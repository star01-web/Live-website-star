<?php
// Error Reporting (enable during dev)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Headers for CORS and JSON
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json");

// Database credentials
$host = "62.72.28.206";
$db   = "u976065191_Formdata";
$user = "u976065191_Star8959";
$pass = "Ashiq8959";

// Connect to MySQL
$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Database connection failed."]);
    exit;
}

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
    exit;
}

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
