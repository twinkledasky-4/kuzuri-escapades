<?php
/**
 * PESAPAL S3 CONFIGURATION
 * 
 * Centralized storage for API credentials and endpoints.
 */

// Prevent direct access to this file
if (count(get_included_files()) === 1) {
    header('HTTP/1.0 403 Forbidden');
    exit('Direct access is restricted.');
}

// --- API KEYS FOR KUZURI ESCAPADES LIMITED ---
define('PESAPAL_CONSUMER_KEY', '2ZaHFEyUrkJLTirCtpiZbPIUK+zgGedj');
define('PESAPAL_CONSUMER_SECRET', '0jPZrbbpf6XQLOA7QjhHh0/Zw/k=');

// --- ENDPOINTS & SETTINGS ---
define('PESAPAL_BASE_URL', 'https://pay.pesapal.com/v3/api');
define('PESAPAL_IPN_URL', 'https://kuzuri-escapades.com/api/pesapal/ipn');
define('PESAPAL_CALLBACK_URL', 'https://kuzuri-escapades.com/pay');

// Internal storage for IPN ID (In production, cache this in a DB or session)
if (!isset($_SESSION)) { session_start(); }
?>
