<?php
$userMobile = $_POST['mobile'];
$name = $_POST['name'];
$email = $_POST['email'];
$grade = $_POST['grade'];
$message = $_POST['message'];

$adminMobile = '919502099553'; // Replace with your admin WhatsApp number

$apiToken = 'e46a6d811caec885d9a061cb0322878327db5f20'; // Replace with your Picky Assist API token
$projectId = 'mgs'; // Replace with your Picky Assist Project ID

$url = "https://pickyassist.com/app/api/v2/push";

$adminMessage = "New form submission:\nName: $name\nMobile: $userMobile\nEmail: $email\nGrade: $grade\nMessage: $message";

$postFields = [
    'token' => $apiToken,
    'project' => $projectId,
    'data' => [
        [
            'number' => $adminMobile,
            'message' => $adminMessage,
            'channel' => 'whatsapp'
        ]
    ]
];

$options = [
    'http' => [
        'header' => "Content-Type: application/json\r\n",
        'method' => 'POST',
        'content' => json_encode($postFields)
    ]
];

$context = stream_context_create($options);
$response = file_get_contents($url, false, $context);

if ($response === FALSE) {
    echo json_encode(['status' => 'failure']);
} else {
    echo json_encode(['status' => 'success']);
}
?>

