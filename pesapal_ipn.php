<?php
/**
 * PESAPAL S3 IPN LISTENER for KUZURI ESCAPADES LIMITED
 * 
 * This script captures the transaction details from the Pesapal POST request,
 * verifies the status via the GetTransactionStatus API, and ensures it is COMPLETED.
 */

// 1. Security & Header
header('Content-Type: application/json');

// 2. Load Configuration & Helpers
require_once __DIR__ . '/pesapal_config.php';
require_once __DIR__ . '/pesapal_gateway.php'; 
require_once __DIR__ . '/db_connection.php'; 
require_once __DIR__ . '/mail-config.php'; 

// 3. Capture EXACT Parameters as per Technical Requirements
// Pesapal V3 uses OrderTrackingId, while older versions used pesapal_transaction_tracking_id
$notification_type = $_POST['pesapal_notification_type'] ?? $_GET['pesapal_notification_type'] ?? null;
$tracking_id = $_POST['OrderTrackingId'] ?? $_GET['OrderTrackingId'] ?? $_POST['pesapal_transaction_tracking_id'] ?? $_GET['pesapal_transaction_tracking_id'] ?? null;
$merchant_reference = $_POST['OrderMerchantReference'] ?? $_GET['OrderMerchantReference'] ?? $_POST['pesapal_merchant_reference'] ?? $_GET['pesapal_merchant_reference'] ?? null;

// logging for production verification
file_put_contents(__DIR__ . '/pesapal_ipn_debug.log', date('[Y-m-d H:i:s] ') . "IPN Signal: $tracking_id | Ref: $merchant_reference\n", FILE_APPEND);

if (!$tracking_id) {
    http_response_code(400);
    echo json_encode(["status" => "400", "message" => "pesapal_transaction_tracking_id is required"]);
    exit;
}

try {
    // 4. Authenticate using static credentials defined in config
    $token = getPesapalToken();

    // 5. Query the Source of Truth (GetTransactionStatus API)
    $rawStatus = getTransactionStatus($token, $tracking_id);
    $transaction = json_decode($rawStatus, true);

    if (!$transaction) {
        throw new Exception("Invalid response from Status Query.");
    }

    // Capture the human-readable status
    // Pesapal V3 returns 'payment_status_description'. We also check status_code for redundancy.
    $currentStatus = strtoupper($transaction['payment_status_description'] ?? '');
    $statusCode = $transaction['status_code'] ?? 0;

    // 6. Verification: Confirm the status is exactly COMPLETED
    if ($currentStatus === 'COMPLETED' || $statusCode == 1) {
        // --- MISSION CRITICAL SUCCESS ---
        file_put_contents(__DIR__ . '/pesapal_ipn_debug.log', date('[Y-m-d H:i:s] ') . "SUCCESS: Transaction $tracking_id marked as COMPLETED.\n", FILE_APPEND);
        
        // --- DATA SYNC: Update SQL Database ---
        $pdo = getDatabaseConnection();
        if ($pdo) {
            try {
                // Assuming a 'bookings' table where 'merchant_reference' is the unique identifier
                $stmt = $pdo->prepare("UPDATE bookings SET status = 'Paid', updated_at = NOW() WHERE merchant_reference = :ref");
                $stmt->execute(['ref' => $merchant_reference]);
                
                if ($stmt->rowCount() > 0) {
                    file_put_contents(__DIR__ . '/pesapal_ipn_debug.log', date('[Y-m-d H:i:s] ') . "DB SYNC: Booking $merchant_reference updated to 'Paid'.\n", FILE_APPEND);
                } else {
                    file_put_contents(__DIR__ . '/pesapal_ipn_debug.log', date('[Y-m-d H:i:s] ') . "DB SYNC WARNING: No booking found with Ref $merchant_reference.\n", FILE_APPEND);
                }
            } catch (Exception $dbEx) {
                file_put_contents(__DIR__ . '/pesapal_ipn_debug.log', date('[Y-m-d H:i:s] ') . "DB SYNC ERROR: " . $dbEx->getMessage() . "\n", FILE_APPEND);
            }
        }
        
        // --- TRIGGER EMAIL RECEIPTS ---
        $amount = $transaction['amount'] ?? '0.00';
        $currency = $transaction['currency'] ?? 'USD';
        // In Pesapal V3, the client's email is usually in the billing details or reconstructed from order history.
        // For the IPN, we'll try to find it in the status response.
        $client_email = $transaction['payment_account'] ?? ''; 
        $payment_method = $transaction['payment_method'] ?? 'Secure Provider';
        
        $receipt_html = "
            <div style=\"font-family: 'Helvetica', Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #1A1A1A; background-color: #F5F5DC;\">
                <div style=\"background-color: #1A1A1A; padding: 40px; text-align: center;\">
                    <img src=\"https://i.postimg.cc/NFtScdZf/Capturezzzzzzzzz.png\" alt=\"Kuzuri Escapades\" style=\"width: 120px;\" />
                    <h1 style=\"color: #D4AF37; margin-top: 20px; font-weight: 300; letter-spacing: 2px;\">PAYMENT CONFIRMED</h1>
                </div>
                <div style=\"padding: 40px; color: #1A1A1A;\">
                    <p style=\"font-size: 18px; line-height: 1.6;\">Your Ugandan journey has been secured.</p>
                    <p style=\"font-size: 14px; opacity: 0.8;\">We have successfully received your payment. Our curators are already preparing your next chapter.</p>
                    
                    <div style=\"margin: 40px 0; border: 1px solid rgba(0,0,0,0.1); padding: 30px; background-color: #FFFFFF;\">
                        <table style=\"width: 100%; border-collapse: collapse;\">
                            <tr>
                                <td style=\"padding: 10px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #8B5A2B;\">Transaction ID</td>
                                <td style=\"padding: 10px 0; text-align: right; font-weight: bold;\">$merchant_reference</td>
                            </tr>
                            <tr>
                                <td style=\"padding: 10px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #8B5A2B;\">Pesapal Tracking</td>
                                <td style=\"padding: 10px 0; text-align: right; font-weight: bold; font-size: 12px;\">$tracking_id</td>
                            </tr>
                            <tr>
                                <td style=\"padding: 10px 0; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #8B5A2B;\">Payment Method</td>
                                <td style=\"padding: 10px 0; text-align: right; font-weight: bold;\">$payment_method</td>
                            </tr>
                            <tr style=\"border-top: 1px solid rgba(0,0,0,0.1);\">
                                <td style=\"padding: 20px 0 0 0; font-size: 14px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px;\">Amount Paid</td>
                                <td style=\"padding: 20px 0 0 0; text-align: right; font-size: 24px; font-weight: 900; color: #D4AF37;\">$currency $amount</td>
                            </tr>
                        </table>
                    </div>
                    
                    <p style=\"font-size: 12px; line-height: 1.8; text-align: center; margin-top: 40px; border-top: 1px solid rgba(0,0,0,0.05); pt: 20px;\">
                        Need assistance? Contact our curators at <br/>
                        <strong>+256 708 012030</strong> or <strong>info@kuzuri-escapades.com</strong>
                    </p>
                </div>
                <div style=\"background-color: #1A1A1A; color: #D4AF37; text-align: center; padding: 15px; font-size: 10px; letter-spacing: 3px;\">
                    NATIVE STEWARDS SINCE 2018 • KAMPALA, UGANDA
                </div>
            </div>
        ";

        // Dispatch Email Logic
        $email_payload = [
            "to" => "info@kuzuri-escapades.com",
            "subject" => "[KUZURI] New Payment Confirmed: $merchant_reference",
            "html" => $receipt_html
        ];

        // 1. Notify Admin (info@kuzuri-escapades.com)
        $ch = curl_init("http://localhost:3000/api/send-email");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($email_payload));
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
        $resp = curl_exec($ch);
        if (curl_errno($ch)) {
            log_mail_error("PHP Curl to Node SMTP Relay Failed (Admin): " . curl_error($ch));
        } elseif (curl_getinfo($ch, CURLINFO_HTTP_CODE) >= 400) {
            log_mail_error("Node SMTP Relay Error (Admin): HTTP " . curl_getinfo($ch, CURLINFO_HTTP_CODE) . " - " . $resp);
        }
        
        // 2. Notify Client (If email is available in transaction data)
        if (!empty($client_email) && filter_var($client_email, FILTER_VALIDATE_EMAIL)) {
            $email_payload['to'] = $client_email;
            $email_payload['subject'] = "Your Receipt: Kuzuri Escapades Payment Confirmation ($merchant_reference)";
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($email_payload));
            $resp = curl_exec($ch);
            if (curl_errno($ch)) {
                log_mail_error("PHP Curl to Node SMTP Relay Failed (Client): " . curl_error($ch));
            } elseif (curl_getinfo($ch, CURLINFO_HTTP_CODE) >= 400) {
                log_mail_error("Node SMTP Relay Error (Client): HTTP " . curl_getinfo($ch, CURLINFO_HTTP_CODE) . " - " . $resp);
            }
        }
        
        curl_close($ch);
    }

    // 7. Mandatory Pesapal S3 Handshake Acknowledgement
    $ack = [
        "order_tracking_id" => $tracking_id,
        "merchant_reference" => $merchant_reference,
        "status" => "200"
    ];
    
    echo json_encode($ack);

} catch (Exception $e) {
    file_put_contents(__DIR__ . '/pesapal_ipn_debug.log', date('[Y-m-d H:i:s] ') . "CRITICAL ERROR: " . $e->getMessage() . "\n", FILE_APPEND);
    http_response_code(500);
    echo json_encode(["status" => "500", "error" => $e->getMessage()]);
}
?>
