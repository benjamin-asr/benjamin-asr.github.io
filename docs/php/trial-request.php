<?php
/* ------------ configuration ------------ */
$sender    = 'info' . '@' . 'benasr.com';
$recipient = 'bijanbina' . '@' . 'gma' . 'il.com';

header('Content-Type: application/json');

/* -------- only POST allowed ------ */
if ($_SERVER['REQUEST_METHOD'] !== 'POST')
{
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

/* -------- sanitise & validate ---- */
$name  = filter_input(INPUT_POST, 'name',  FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);

if (!$name || !filter_var($email, FILTER_VALIDATE_EMAIL))
{
    http_response_code(400);
    echo json_encode(['error' => 'Invalid name or email']);
    exit;
}

/* -------- build & send mail ------ */
$subject = "Benjamin-ASR Sign Up: {$name}";
$body    = "A new user with following detail signed up for the Windows setup file access:\n\n" . 
           "Full Name : {$name}\n" . 
           "Email        : {$email}\n\n" .
           "An automatic email has been send to their account and we are waiting for them to respond.";

$headers = [
    'Content-Type: text/plain; charset=utf-8',
    'X-Mailer: PHP/' . phpversion()
];

if( mail($recipient, $subject, $body, implode("\r\n", $headers), "-F 'Benjamin-ASR Admin' -f info@benasr.com") )
{
    echo json_encode(['status' => 'ok']);
}
else
{
    http_response_code(500);
    echo json_encode(['error' => 'Message could not be sent']);
}
