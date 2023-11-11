<?php 
require_once("../db-config/db-connection.php");
session_start();

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

 ?>