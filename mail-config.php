<?php
/**
 * KUZURI ESCAPADES - PHP MAIL CONFIGURATION
 * 
 * This file pulls SMTP credentials from environment variables (Secrets)
 * and provides a robust logging mechanism for delivery tracing.
 */

// 1. PULL CONFIGURATION FROM ENVIRONMENT (Cloud Run / Secrets)
// We check both getenv() and $_ENV for broad compatibility
$config = [
    'host'       => getenv('SMTP_HOST') ?: ($_ENV['SMTP_HOST'] ?? 'mail.kuzuri-escapades.com'),
    'port'       => getenv('SMTP_PORT') ?: ($_ENV['SMTP_PORT'] ?? 587),
    'user'       => getenv('SMTP_USER') ?: ($_ENV['SMTP_USER'] ?? 'info@kuzuri-escapades.com'),
    'pass'       => getenv('SMTP_PASS') ?: ($_ENV['SMTP_PASS'] ?? 'Uganda@2006?'),
    'secure'     => getenv('SMTP_SECURE') ?: ($_ENV['SMTP_SECURE'] ?? 'false'),
    'from_email' => getenv('SMTP_FROM_EMAIL') ?: ($_ENV['SMTP_FROM_EMAIL'] ?? 'info@kuzuri-escapades.com'),
    'from_name'  => getenv('SMTP_FROM_NAME') ?: ($_ENV['SMTP_FROM_NAME'] ?? 'Kuzuri Escapades'),
    'to_email'   => getenv('SMTP_TO_EMAIL') ?: ($_ENV['SMTP_TO_EMAIL'] ?? 'info@kuzuri-escapades.com')
];

// Constants for global usage
define('SMTP_HOST', $config['host']);
define('SMTP_PORT', $config['port']);
define('SMTP_USER', $config['user']);
define('SMTP_PASS', $config['pass']);
define('SMTP_SECURE', $config['secure']);
define('SMTP_FROM_EMAIL', $config['from_email']);
define('SMTP_FROM_NAME', $config['from_name']);
define('SMTP_TO_EMAIL', $config['to_email']);

/**
 * CRITICAL ERROR LOGGING
 * Writes precise failure reasons to mail_error.log
 */
function log_mail_error($reason, $context = []) {
    $log_file = __DIR__ . '/mail_error.log';
    $timestamp = date('Y-m-d H:i:s');
    $context_str = !empty($context) ? " | Context: " . json_encode($context) : "";
    $log_entry = "[$timestamp] [MAIL FAILURE] Reason: $reason$context_str" . PHP_EOL;
    
    // Attempt to write to file
    file_put_contents($log_file, $log_entry, FILE_APPEND);
    
    // Also log to server's error log
    error_log("Kuzuri Mail Failure: $reason");
}

/**
 * DEBUG HELPER: SMTP Port/Auth Test
 * Call this to check if the server can even talk to the mail server.
 */
function test_smtp_handshake() {
    $host = SMTP_HOST;
    $port = SMTP_PORT;
    
    $connection = @fsockopen($host, $port, $errno, $errstr, 5);
    if (!$connection) {
        log_mail_error("TCP Connection Blocked. Port $port on $host is unreachable. System Error: $errstr ($errno)");
        return false;
    }
    
    $response = fgets($connection, 1024);
    fclose($connection);
    
    if (strpos($response, '220') === false) {
        log_mail_error("SMTP Handshake Failed. Server responded, but not with 220. Response: " . trim($response));
        return false;
    }
    
    return true;
}
?>
