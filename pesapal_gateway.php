<?php
/**
 * PESAPAL S3 API HANDLER for KUZURI ESCAPADES LIMITED
 */

session_start();
header('Content-Type: application/json');

require_once 'pesapal_config.php';

// --- STEP 1: AUTHENTICATION (Request Token) ---
function getPesapalToken() {
    $auth_endpoint = PESAPAL_BASE_URL . "/Auth/RequestToken";
    
    $payload = json_encode([
        "consumer_key" => PESAPAL_CONSUMER_KEY,
        "consumer_secret" => PESAPAL_CONSUMER_SECRET
    ]);

    $ch = curl_init($auth_endpoint);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Accept: application/json'
    ]);

    $response = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    $data = json_decode($response, true);
    if ($http_code !== 200 || !isset($data['token'])) {
        throw new Exception("Authentication Failed: " . ($data['message'] ?? 'Unknown Error'));
    }

    return $data['token'];
}

// --- STEP 2: REGISTER IPN ---
function registerIPN($token) {
    // If we already have one in this session, return it
    if (isset($_SESSION['pesapal_ipn_id'])) return $_SESSION['pesapal_ipn_id'];

    $endpoint = PESAPAL_BASE_URL . "/URLSetup/RegisterIPN";
    $payload = json_encode([
        "url" => PESAPAL_IPN_URL,
        "ipn_notification_type" => "GET"
    ]);

    $ch = curl_init($endpoint);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "Authorization: Bearer $token",
        'Content-Type: application/json',
        'Accept: application/json'
    ]);

    $response = curl_exec($ch);
    curl_close($ch);
    
    $data = json_decode($response, true);
    if (isset($data['ipn_id'])) {
        $_SESSION['pesapal_ipn_id'] = $data['ipn_id'];
        return $data['ipn_id'];
    }
    
    return null;
}

// --- STEP 3: SUBMIT ORDER (Initiate Payment) ---
function submitOrder($token, $details) {
    $endpoint = PESAPAL_BASE_URL . "/Transactions/SubmitOrderRequest";
    $ipn_id = registerIPN($token);
    
    $merchant_reference = $details['bookingRef'] ?? ('KUZ-' . strtoupper(uniqid()));
    
    $order_payload = [
        "id" => $merchant_reference,
        "currency" => $details['currency'] ?? "USD",
        "amount" => $details['amount'],
        "description" => $details['description'] ?? "Safari Payment",
        "callback_url" => PESAPAL_CALLBACK_URL,
        "notification_id" => $ipn_id,
        "billing_address" => [
            "email_address" => $details['email'],
            "phone_number" => $details['phone'],
            "country_code" => "UG",
            "first_name" => $details['firstName'] ?? "",
            "last_name" => $details['lastName'] ?? "",
            "line_1" => $details['address'] ?? "",
            "city" => $details['city'] ?? "",
            "state" => $details['state'] ?? "",
            "zip_code" => $details['zip'] ?? ""
        ]
    ];

    $ch = curl_init($endpoint);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($order_payload));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "Authorization: Bearer $token",
        'Content-Type: application/json',
        'Accept: application/json'
    ]);

    $response = curl_exec($ch);
    curl_close($ch);
    return $response;
}

// --- STEP 4: GET TRANSACTION STATUS (GetOrderRequest equivalent) ---
function getTransactionStatus($token, $trackingId) {
    $endpoint = PESAPAL_BASE_URL . "/Transactions/GetTransactionStatus?orderTrackingId=" . $trackingId;
    
    $ch = curl_init($endpoint);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        "Authorization: Bearer $token",
        'Accept: application/json'
    ]);

    $response = curl_exec($ch);
    curl_close($ch);
    return $response;
}

// --- MAIN HANDLER ---
$request_method = $_SERVER['REQUEST_METHOD'];

if ($request_method === 'POST') {
    // Read raw input
    $input = json_decode(file_get_contents('php://input'), true);
    
    // Support either order initiation or status check
    if (isset($input['orderTrackingId'])) {
        // ACTION: GET TRANSACTION STATUS
        try {
            $token = getPesapalToken();
            echo getTransactionStatus($token, $input['orderTrackingId']);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(["status" => "500", "error" => $e->getMessage()]);
        }
    } elseif (isset($input['orderDetails'])) {
        // ACTION: SUBMIT ORDER
        $details = $input['orderDetails'];
        try {
            $token = getPesapalToken();
            $raw_response = submitOrder($token, $details);
            
            // SECURITY: Only return the necessary fields to the frontend
            $data = json_decode($raw_response, true);
            if (isset($data['redirect_url']) && isset($data['order_tracking_id'])) {
                echo json_encode([
                    "redirect_url" => $data['redirect_url'],
                    "order_tracking_id" => $data['order_tracking_id']
                ]);
            } else {
                throw new Exception("Incomplete response from Pesapal.");
            }

        } catch (Exception $e) {
            http_response_code(500);
            // SECURITY: Log the high-fidelity error on the server, but show a generic one to the user
            error_log("[Pesapal Gateway Error] " . $e->getMessage());
            echo json_encode(["status" => "500", "error" => "Transaction Initialization Failed. Please contact support."]);
        }
    } else {
        echo json_encode(["status" => "400", "error" => "Unknown Action"]);
    }
} else {
    echo json_encode(["status" => "200", "message" => "Pesapal PHP Relay Active"]);
}
?>
