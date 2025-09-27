<?php
// Disable error reporting in production for better performance
ini_set('display_errors', 0);
ini_set('display_startup_errors', 0);
error_reporting(0);

// Set output buffering and compression for faster response
ob_start('ob_gzhandler');

// Performance headers first
header("Content-Type: application/json; charset=utf-8");
header("Cache-Control: no-cache, must-revalidate");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");

// Only allow POST - fail fast
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
    exit;
}

// Database credentials with connection optimization
$host = "62.72.28.206";
$db   = "u976065191_Formdata";
$user = "u976065191_Star8959";
$pass = "Ashiq8959";

// Optimized MySQL connection with timeout settings
mysqli_report(MYSQLI_REPORT_OFF); // Disable mysqli warnings for performance
$conn = new mysqli($host, $user, $pass, $db);

// Set connection timeout and charset for performance
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Service temporarily unavailable"]);
    exit;
}

// Set charset and connection options for performance
$conn->set_charset("utf8mb4");
$conn->options(MYSQLI_OPT_CONNECT_TIMEOUT, 5);
$conn->options(MYSQLI_OPT_READ_TIMEOUT, 5);

// Get form data as JSON
$data = json_decode(file_get_contents("php://input"), true);

// Check required fields
if (!$data || !isset($data['name'], $data['email'], $data['phone'])) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Missing required fields."]);
    exit;
}

// Clean inputs
$name     = trim($data['name']);
$email    = trim($data['email']);
$phone    = trim($data['phone']);
$product  = trim($data['product'] ?? '');
$quantity = trim($data['quantity'] ?? '');
$message  = trim($data['message'] ?? '');

// Validate phone format
if (!preg_match('/^[6-9]\d{9}$/', $phone)) {
    http_response_code(422);
    echo json_encode(["status" => "error", "message" => "Invalid phone number format."]);
    exit;
}

// 🔄 Use your actual table: contact_data
$stmt = $conn->prepare("
    INSERT INTO contact_data (name, email, phone, product, quantity, message)
    VALUES (?, ?, ?, ?, ?, ?)
");
$stmt->bind_param("ssssss", $name, $email, $phone, $product, $quantity, $message);

// Execute and send response
if ($stmt->execute()) {

    // (Optional) Send email to admin
    $adminEmail = "info@starmultiventure.in";  // 🔁 Replace with your admin email
    $subject = "New Contact Request from $name";
    $body = "
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> {$name}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Phone:</strong> {$phone}</p>
        <p><strong>Product:</strong> {$product}</p>
        <p><strong>Quantity:</strong> {$quantity}</p>
        <p><strong>Message:</strong><br>{$message}</p>
    ";

    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8\r\n";
    $headers .= "From: noreply@starmultiventure.in\r\n";

    @mail($adminEmail, $subject, $body, $headers);

    echo json_encode(["status" => "success", "message" => "Data saved and email sent."]);
} else {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Database insert failed."]);
}

$stmt->close();
$conn->close();
?>
