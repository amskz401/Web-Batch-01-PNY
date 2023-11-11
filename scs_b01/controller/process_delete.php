<?php 
require_once("../db-config/db-connection.php");
session_start();

$user_id = $_GET['user_id'];
$conn->query("DELETE FROM `users` WHERE `id` = $user_id");
$_SESSION['succMSG'] = "Your record deleted successfully";
header("Location: http://localhost/scs_b01/dashboard.php");

 ?>