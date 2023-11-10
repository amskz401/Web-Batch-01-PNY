<?php 
require_once("../db-config/db-connection.php");
session_start();

if(isset($_GET['logout'])) {
	session_destroy();
	header("Location: http://localhost/scs_b01/login.php");
}

$_SESSION['error'] = [];
// Validate First Name
if($_POST['email'] == '') {
	$_SESSION['error']['email'] = "Email is required";
}

// Validate password
if($_POST['password'] == '') {
	$_SESSION['error']['password'] = "Password is required";
}

if(count($_SESSION['error']) == 0){
	$email = $_POST['email'];
	$password = md5($_POST['password']);
	$logged_in = $conn->query("SELECT * FROM `users` WHERE email  = '$email' AND password = '$password'");
	if($logged_in->num_rows == 1){
		$_SESSION['user'] = "active";
		if(isset($_POST['remember_me']) && $_POST['remember_me'] == 1){
			setcookie('user_cookie', 'active', time() + 36000, "/");
		}

		header("Location: http://localhost/scs_b01/dashboard.php");
	} else {
		$_SESSION['error']['invalid_user'] = "Invalid username/email or password";
	}
}

if(count($_SESSION['error']) > 0){
	header("Location: http://localhost/scs_b01/login.php");
}

 ?>