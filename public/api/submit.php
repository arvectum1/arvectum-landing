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

if (!$data) {
    $data = $_POST;
}

$name = trim($data['name'] ?? '');
$contactMethod = trim($data['contactMethod'] ?? '');
$contactMethodOther = trim($data['contactMethodOther'] ?? '');
$contactValue = trim($data['contactValue'] ?? '');
$contact = trim($data['contact'] ?? '');

$isOther = ($contactMethod === 'Другое');
$chosenMethod = $isOther && $contactMethodOther ? $contactMethodOther : $contactMethod;

if ($isOther) {
    $contact = $contactMethodOther ? $contactMethodOther : 'Другое';
} else {
    $contact = $contactValue ? ($contactMethod . ': ' . $contactValue) : '';
}

$projectType = trim($data['projectType'] ?? '');
$message = trim($data['message'] ?? '');
$budget = trim($data['budget'] ?? '');
$deadline = trim($data['deadline'] ?? '');
$website = trim($data['website'] ?? '');

if (!$name || !$contactMethod || !$projectType || !$message) {
    echo json_encode(['ok' => false, 'error' => 'Заполните обязательные поля']);
    exit;
}

if ($isOther && !$contactMethodOther) {
    echo json_encode(['ok' => false, 'error' => 'Укажите способ связи в поле «Другое»']);
    exit;
}

if (!$isOther && !$contactValue) {
    echo json_encode(['ok' => false, 'error' => 'Укажите контакт для связи']);
    exit;
}

$telegramSent = false;
$telegramError = null;
$mailSent = false;
$mailError = null;

$envFile = dirname(__DIR__) . '/.env';
$envVars = [];
if (file_exists($envFile)) {
    $lines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos($line, '=') !== false && strpos($line, '#') !== 0) {
            list($key, $value) = explode('=', $line, 2);
            $envVars[trim($key)] = trim($value);
        }
    }
}

$telegramToken = $envVars['TELEGRAM_BOT_TOKEN'] ?? '';
$telegramChatId = $envVars['TELEGRAM_CHAT_ID'] ?? '';
$telegramThreadId = $envVars['TELEGRAM_THREAD_ID'] ?? '';
$formToEmail = $envVars['FORM_TO_EMAIL'] ?? 'info@arvectum.com';

if ($telegramToken && $telegramChatId) {
    $telegramText = "🔔 Новая заявка с arvectum.com\n\n";
    $telegramText .= "👤 Имя: " . $name . "\n";
    $telegramText .= "📬 Способ связи: " . ($chosenMethod ?: 'не указано') . "\n";
    $telegramText .= "💬 Контакт: " . $contact . "\n";
    $telegramText .= "📋 Тип запроса: " . $projectType . "\n";
    if ($budget) {
        $telegramText .= "💰 Бюджет: " . $budget . "\n";
    }
    if ($deadline) {
        $telegramText .= "📅 Горизонт пилота: " . $deadline . "\n";
    }
    $telegramText .= "\n📝 Описание:\n" . $message;

    $telegramUrl = "https://api.telegram.org/bot" . $telegramToken . "/sendMessage";
    $telegramData = [
        'chat_id' => $telegramChatId,
        'text' => $telegramText
    ];

    if ($telegramThreadId !== '') {
        $telegramData['message_thread_id'] = (int) $telegramThreadId;
    }

    $ch = curl_init($telegramUrl);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($telegramData));
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    $result = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    if ($httpCode === 200) {
        $telegramSent = true;
    } else {
        $telegramError = $result ?: 'Telegram request failed';
    }
}

$subject = 'Arvectum: новая заявка с сайта';
$fromEmail = 'noreply@' . ($_SERVER['HTTP_HOST'] ?? 'arvectum.com');
$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = 'From: Arvectum Site <' . $fromEmail . '>';
$headers[] = 'Reply-To: ' . $fromEmail;

$emailBody = "Новая заявка с arvectum.com\n";
$emailBody .= "=========================\n\n";
$emailBody .= "Имя: " . $name . "\n";
$emailBody .= "Способ связи: " . ($chosenMethod ?: 'не указано') . "\n";
$emailBody .= "Контакт: " . $contact . "\n";
$emailBody .= "Тип запроса: " . $projectType . "\n";
$emailBody .= "Горизонт пилота: " . ($deadline ?: 'не указан') . "\n";
$emailBody .= "Бюджет: " . ($budget ?: 'не указан') . "\n\n";
$emailBody .= "Описание:\n" . $message . "\n";

if ($formToEmail) {
    $mailSent = @mail($formToEmail, $subject, $emailBody, implode("\r\n", $headers));
    if (!$mailSent) {
        $mailError = 'mail() returned false';
    }
}

if ($telegramSent || $mailSent) {
    $channels = [];
    if ($telegramSent) {
        $channels[] = 'telegram';
    }
    if ($mailSent) {
        $channels[] = 'email';
    }

    echo json_encode([
        'ok' => true,
        'message' => 'Заявка отправлена',
        'channels' => $channels
    ]);
} else {
    $errors = [];
    if ($telegramError) {
        $errors[] = 'telegram: ' . $telegramError;
    }
    if ($mailError) {
        $errors[] = 'email: ' . $mailError;
    }
    if (!$telegramToken || !$telegramChatId) {
        $errors[] = 'telegram is not configured';
    }
    if (!$formToEmail) {
        $errors[] = 'email recipient is not configured';
    }

    echo json_encode([
        'ok' => false,
        'error' => implode('; ', $errors ?: ['all delivery channels failed'])
    ]);
}
