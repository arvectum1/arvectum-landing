<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!$data || !is_array($data)) {
    echo json_encode(['ok' => false, 'error' => 'Invalid payload']);
    exit;
}

$record = [
    'receivedAt' => gmdate('c'),
    'ip' => $_SERVER['REMOTE_ADDR'] ?? '',
    'consentVersion' => (string) ($data['consentVersion'] ?? ''),
    'analytics' => (bool) ($data['analytics'] ?? false),
    'updatedAt' => (string) ($data['updatedAt'] ?? ''),
    'visitorId' => (string) ($data['visitorId'] ?? ''),
    'sessionId' => (string) ($data['sessionId'] ?? ''),
    'firstVisit' => (string) ($data['firstVisit'] ?? ''),
    'lastVisit' => (string) ($data['lastVisit'] ?? ''),
    'path' => (string) ($data['path'] ?? ''),
    'landingPath' => (string) ($data['landingPath'] ?? ($data['path'] ?? '')),
    'referrer' => (string) ($data['referrer'] ?? ''),
    'utm_source' => (string) ($data['utm_source'] ?? ''),
    'utm_medium' => (string) ($data['utm_medium'] ?? ''),
    'utm_campaign' => (string) ($data['utm_campaign'] ?? ''),
    'utm_term' => (string) ($data['utm_term'] ?? ''),
    'utm_content' => (string) ($data['utm_content'] ?? ''),
    'language' => (string) ($data['language'] ?? ''),
    'userAgent' => (string) ($data['userAgent'] ?? '')
];

$storageDir = __DIR__ . '/storage';
if (!is_dir($storageDir)) {
    @mkdir($storageDir, 0755, true);
}

$logFile = $storageDir . '/cookie-consents.jsonl';
$logLine = json_encode($record, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES) . PHP_EOL;
$result = @file_put_contents($logFile, $logLine, FILE_APPEND | LOCK_EX);

if ($result === false) {
    echo json_encode(['ok' => false, 'error' => 'Failed to write consent log']);
    exit;
}

echo json_encode(['ok' => true]);
