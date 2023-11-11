<?php 
require_once("../db-config/db-connection.php");
session_start();

if(isset($_POST['process_signup'])){
	$_SESSION['error'] = [];
	// Validate First Name
	if($_POST['first_name'] == '') {
		$_SESSION['error']['first_name'] = "First Name is required";
	}

	if(!preg_match("/^([a-zA-Z]+)$/", $_POST['first_name'])){
		$_SESSION['error']['first_name'] = "Only alphabets can used in First Name";
	}

	if(!preg_match("/^([0-9]+)$/", $_POST['phone'])){
		$_SESSION['error']['phone'] = "Only numeric values can used in Phone";
	}

	// Validate Last Name
	if($_POST['last_name'] == '') {
		$_SESSION['error']['last_name'] = "Last Name is required";
	}

	// Validate Email
	if($_POST['email'] == '') {
		$_SESSION['error']['email'] = "Email is required";
	}



	// Validate password
	if($_POST['password'] == '') {
		$_SESSION['error']['password'] = "Password is required";
	}

	// Validate password
	if($_POST['password'] != $_POST['con_password']) {
		$_SESSION['error']['con_password'] = "Password confirmation is wrong";
	}

	// Check Email
	$email = $_POST['email'];
	$checkMail = $conn->query("SELECT * FROM users WHERE email  = '$email'");


	if($checkMail->num_rows > 0){
		$_SESSION['error']['exist_email'] = "Email Already exist use another one";
	}

	if(count($_SESSION['error']) > 0){
		header("Location: http://localhost/scs_b01/signup.php");
	}

	if(count($_SESSION['error']) == 0){
		$first_name = $_POST['first_name'];
		$last_name = $_POST['last_name'];
		$email = $_POST['email'];
		$phone = $_POST['phone'];
		$gender = $_POST['gender'];
		$password = md5($_POST['password']);
		$conn->query("INSERT INTO `users`(`first_name`, `last_name`, `phone`, `email`, `gender`, `password`) VALUES ('$first_name', '$last_name', '$phone', '$email', '$gender', '$password')");
		header("Location: http://localhost/scs_b01/signup.php?success=true");
	}
}

elseif(isset($_POST['process_login'])){
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
				setcookie('user_cookie', 'active', time() + 3600, "/");
			}

			header("Location: http://localhost/scs_b01/dashboard.php");
		} else {
			$_SESSION['error']['invalid_user'] = "Invalid username/email or password";
		}
	}

	if(count($_SESSION['error']) > 0){
		header("Location: http://localhost/scs_b01/login.php");
	}
}

elseif(isset($_POST['process_update'])){
	$_SESSION['error'] = [];
	// Validate First Name
	if($_POST['first_name'] == '') {
		$_SESSION['error']['first_name'] = "First Name is required";
	}

	if(!preg_match("/^([a-zA-Z]+)$/", $_POST['first_name'])){
		$_SESSION['error']['first_name'] = "Only alphabets can used in First Name";
	}

	if(!preg_match("/^([0-9]+)$/", $_POST['phone'])){
		$_SESSION['error']['phone'] = "Only numeric values can used in Phone";
	}

	// Validate Last Name
	if($_POST['last_name'] == '') {
		$_SESSION['error']['last_name'] = "Last Name is required";
	}

	// Validate Email
	if($_POST['email'] == '') {
		$_SESSION['error']['email'] = "Email is required";
	}

	if(count($_SESSION['error']) > 0){
		header("Location: http://localhost/scs_b01/edit.php?user_id=".$_POST['user_id']);
	}

	if(count($_SESSION['error']) == 0){
		$first_name = $_POST['first_name'];
		$last_name = $_POST['last_name'];
		$email = $_POST['email'];
		$phone = $_POST['phone'];
		$gender = $_POST['gender'];
		$user_id = $_POST['user_id'];

		$conn->query("UPDATE `users` SET `first_name`='$first_name',`last_name`='$last_name',`phone`='$phone',`email`='$email',`gender`='$gender' WHERE `id` = $user_id");
		$_SESSION['succMSG'] = "Your record udpated successfully";
		header("Location: http://localhost/scs_b01/dashboard.php");
	}
}

elseif(isset($_GET['process_delete'])){
	$user_id = $_GET['user_id'];
	$conn->query("DELETE FROM `users` WHERE `id` = $user_id");
	$_SESSION['succMSG'] = "Your record deleted successfully";
	header("Location: http://localhost/scs_b01/dashboard.php");
}

elseif(isset($_GET['process_logout'])){
	session_destroy();
	header("Location: http://localhost/scs_b01/login.php");
}

 ?>