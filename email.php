<?php
// Connect to the database
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "your_database_name";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the email address from the form
$email = $_POST['email'];

// Validate the email
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    // Prepare the SQL statement
    $stmt = $conn->prepare("INSERT INTO emails (email) VALUES (?)");
    $stmt->bind_param("s", $email);
    
    // Execute the statement
    $stmt->execute();

    echo "Email address stored successfully";
    
    // Close the statement and connection
    $stmt->close();
    $conn->close();
} else {
    echo "Invalid email address";
}
?>
