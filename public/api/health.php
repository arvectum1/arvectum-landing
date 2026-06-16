<?php
header('Content-Type: application/json; charset=UTF-8');

$storageDir = __DIR__ . '/storage';
$storageWritable = is_dir($storageDir) ? is_writable($storageDir) : @mkdir($storageDir, 0755, true);

echo json_encode([
    'ok' => true,
    'service' => 'arvectum-site',
    'php' => PHP_VERSION,
    'storageWritable' => (bool) $storageWritable,
    'time' => gmdate('c'),
], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
