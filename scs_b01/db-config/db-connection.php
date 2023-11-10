<?php 
$host = "localhost";
$user = "root";
$pass = "";
$database = "online_store";

try {
	// database connection string
	$conn = new mysqli($host, $user, $pass, $database);
	
} catch (Exception $e) {
	die($e->getMessage());
}
 ?>