<?php
// Your server-side code to send an email

// Get the data from POST
$email = $_POST['email'];
$name = $_POST['name'];

// Set email subject and message
$subject = "Thank You for Submitting the Form";
$message = "Thank you, $name,\n\nFor taking the time to inquire about Manchester Global School. Our team is ready to reach out to you.  
\n\n
 Your interest and engagement mean a lot to us, and we are honored that you are considering our institution as a potential educational home for your child(ren). We appreciate your dedication and commitment to your child's education. It is one of the factors that motivates us to work hard and strive for excellence. \n\n

We are here to assist you every step of the way.\n\n Team Manchester"
;

// Additional headers
$headers = 'From: admissions@manchester.global' . "\r\n" .
    'Reply-To: admissions@manchester.global' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

// Send the email
$mailSuccess = mail($email, $subject, $message, $headers);

// Respond with success or failure
if ($mailSuccess) {
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'failure']);
}
?>
