<?php 

// $host = ;
// $user = ;
// $password = ;
// $database = ;
echo '<pre>';
// $connection = new mysqli('127.0.0.1', 'root', '', 'online_store');
$conn = new mysqli('localhost', 'root', '', 'online_store');

// add a record in database using php
// $conn->query("INSERT INTO `users` (`first_name`, `last_name`, `phone`, `email`, `password`) VALUES ('php2', 'value2', '+98 234 5455858', 'other@record.com', MD5('mynewpassword'));");

// get records using php
// $students = $conn->query("SELECT * FROM `users`;");

// $html = "";
// echo '<table border=1 width="100%">
// 	<tr>
// 		<th>Name</th>
// 		<th>Phone</th>
// 		<th>Email</th>
// 	</tr>';
// while ($row = $students->fetch_assoc()) {
// 	echo '
// 	<tr>
// 		<td>'.$row['first_name'].'</td>
// 		<td>'.$row['phone'].'</td>
// 		<td>'.$row['email'].'</td>
		
// 	</tr>';

// }
// echo '</table>';

// get records using php
// $students = $conn->query("SELECT first_name, last_name, phone, email FROM `users`;");

// $html = "";
// echo '<table border=1 width="100%">
// 	<tr>
// 		<th>Name</th>
// 		<th>Phone</th>
// 		<th>Email</th>
// 	</tr>';
// while ($row = $students->fetch_assoc()) {
// 	echo '
// 	<tr>
// 		<td>'.$row['first_name'].'</td>
// 		<td>'.$row['phone'].'</td>
// 		<td>'.$row['email'].'</td>
		
// 	</tr>';

// }
// echo '</table>';

// $conn->query("UPDATE `users` SET `first_name`='phpfile',`last_name`='update',`phone`='000035r4w5',`email`='php@update.com',`status`= 1");

// $conn->query("DELETE FROM users WHERE `users`.`id` = 6");

// $students = $conn->query("SELECT * FROM `users` WHERE (id = 6 AND first_name = 'phpfile' AND last_name = 'update');");

// $sum = $conn->query("SELECT SUM(id) FROM `users`;");

// echo $sum->num_rows;

// while ($row = $sum->fetch_assoc()) {
// 	print_r($row);
// }

$result = $conn->query("SELECT * FROM `users` WHERE (first_name = 'phpfile' OR last_name = 'newlast') AND email = ('php@update.com') ORDER BY `id` DESC");

echo $result->num_rows;

if($result->num_rows > 0){
	foreach ($result->fetch_assoc() as $key => $value) {
		echo '<br>';
		print_r($value);
	}
}

// while ($row = $result->fetch_assoc()) {
// 	var_dump($row);
// }

echo '<br>done';

?>

