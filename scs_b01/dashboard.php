<?php require_once("db-config/db-connection.php"); ?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Bootstrap demo</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">

</head>
<body>
	<?php $activeClass = "dashboard_page"; ?>
	<?php require_once("layouts/header.php"); ?>
	<?php if(!isset($_SESSION['user'])) {
		header("Location: login.php");
	} ?>
	<div class="container">
		<div class="row mt-5">
			<div class="col-md-12">
				<h2 class="text-center">Users Data</h2>
				<?php if(isset($_SESSION['succMSG'])) { ?>
				<div class="alert alert-success text-center">
					<strong><?php echo $_SESSION['succMSG'] ?></strong>
				</div>
				<?php } ?>
				<table class="table">
					<thead>
						<tr>
							<th>ID</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Email</th>
							<th>Phone</th>
							<th>Gender</th>
							<th>Created At</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>

						<?php $students = $conn->query("SELECT * FROM `users` WHERE 1"); 
						while ($std = $students->fetch_assoc()) { ?>
						<tr>
							<td><?php echo $std['id']; ?></td>
							<td><?php echo $std['first_name']; ?></td>
							<td><?php echo $std['last_name']; ?></td>
							<td><?php echo $std['email']; ?></td>
							<td><?php echo $std['phone']; ?></td>
							<td><?php echo $std['gender']; ?></td>
							<td><?php echo $std['created_date']; ?></td>
							<td>
								<a href="edit.php?user_id=<?php echo $std['id']; ?>" class="btn btn-primary"><i class="bi bi-pencil-square"></i></a>
								<a onclick="return confirm('Are you sure you want to delete this record !');" href="controller/process_delete.php?user_id=<?php echo $std['id']; ?>&process_delete=true" class="btn btn-danger"><i class="bi bi-trash3-fill"></i></a>
							</td>
						</tr>
						<?php } ?>
					</tbody>
				</table>
			</div>
		</div>		
	</div>

	<footer class="bg-dark ">
		<div class="copy-rights">
			<p class="text-white pt-3 pb-3 text-center">copy right reserverd by PNY@2023</p>
		</div>
	</footer>

	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
	<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
	<script type="text/javascript">
		setTimeout(function(){
			$(".alert.alert-success.text-center").hide("slow");
			// document.querySelector(".alert.alert-success.text-center").style.display = "none";
		}, 2000);
	</script>
</body>
</html>