<?php
header('Content-Type: application/json; charset=UTF-8');
echo json_encode([
    'ok' => true,
    'service' => 'arvectum-site',
], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
