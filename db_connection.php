<?php
/**
 * DATABASE CONNECTION for KUZURI ESCAPADES LIMITED
 * 
 * Update these credentials with your actual SQL server details.
 */

define('DB_HOST', getenv('DB_HOST') ?: 'localhost');
define('DB_NAME', getenv('DB_NAME') ?: 'kuzuri_escapades_db');
define('DB_USER', getenv('DB_USER') ?: 'db_user');
define('DB_PASS', getenv('DB_PASS') ?: 'db_password');

function getDatabaseConnection() {
    try {
        $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4";
        $options = [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ];
        return new PDO($dsn, DB_USER, DB_PASS, $options);
    } catch (PDOException $e) {
        // Log error and stop
        file_put_contents(__DIR__ . '/db_error.log', date('[Y-m-d H:i:s] ') . "Connection Failed: " . $e->getMessage() . PHP_EOL, FILE_APPEND);
        return null;
    }
}
?>
