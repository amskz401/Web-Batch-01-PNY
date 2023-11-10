
<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Bootstrap demo</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">

</head>
<body>
	<?php $activeClass = "singup_page"; ?>
	<?php require_once("layouts/header.php"); ?>
	<?php if(isset($_SESSION['user']) && $_SESSION['user'] == 'active') {
		header("Location: dashboard.php");
	} ?>
	<div class="container">
		<div class="row mt-5">
			<div class="col-md-12">
				<h2 class="text-center">Register Here</h2>
			</div>
		</div>
		<?php if(isset($_GET['success'])) { ?>
		<div class="row mt-5">
			<div class="col-md-6 mx-auto">
				<div class="alert alert-success">
					<h5>Your registration is completed login <a href="login.php">here</a></h5>
				</div>
			</div>
		</div>
		<?php } ?>
		
		<?php if(isset($_SESSION['error']['exist_email'])) { ?>
		<div class="row mt-5">
			<div class="col-md-6 mx-auto">
				<div class="alert alert-danger">
					<h5>This email already exist choose another one</h5>
				</div>
			</div>
		</div>
		<?php unset($_SESSION['error']['exist_email']); } ?>
		<div class="row mt-5">
			<div class="col-md-6 mx-auto">
				<form action="controller/process_singup.php" method="post">
					<div class="mb-3">
						<label for="exampleInputEmail1" class="form-label">First Name</label>
						<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="first_name">
						<?php if(isset($_SESSION['error']['first_name'])) { ?>
						<small><font color="red"><?php echo $_SESSION['error']['first_name']; ?></font></small>
						<?php unset($_SESSION['error']['first_name']); } ?>
						
					</div>
					<div class="mb-3">
						<label for="exampleInputEmail1" class="form-label">Last Name</label>
						<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="last_name">
						<?php if(isset($_SESSION['error']['last_name'])) { ?>
						<small><font color="red"><?php echo $_SESSION['error']['last_name']; ?></font></small>
						<?php unset($_SESSION['error']['last_name']); } ?>
						
					</div>
					<div class="mb-3">
						<label for="exampleInputEmail1" class="form-label">Email address</label>
						<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email">
						<?php if(isset($_SESSION['error']['email'])) { ?>
						<small><font color="red"><?php echo $_SESSION['error']['email']; ?></font></small>
						<?php unset($_SESSION['error']['email']); } ?>
						
					</div>
					<div class="mb-3">
						<label for="exampleInputEmail1" class="form-label">Phone Number</label>
						<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="phone">
						<?php if(isset($_SESSION['error']['phone'])) { ?>
						<small><font color="red"><?php echo $_SESSION['error']['phone']; ?></font></small>
						<?php unset($_SESSION['error']['phone']); } ?>
						
					</div>
					<div class="mb-3">
						<label for="exampleInputEmail1" class="form-label">Gender</label>
						<select name="gender" class="form-control" required>
							<option value="male">Male</option>
							<option value="female">Female</option>
							<option value="other">Other</option>
						</select>
						
					</div>
					
					<div class="mb-3">
						<label for="exampleInputPassword1" class="form-label">Password</label>
						<input type="password" class="form-control" id="exampleInputPassword1" name="password">
						<?php if(isset($_SESSION['error']['password'])) { ?>
						<small><font color="red"><?php echo $_SESSION['error']['password']; ?></font></small>
						<?php unset($_SESSION['error']['password']); } ?>
					</div>
					<div class="mb-3">
						<label for="exampleInputPassword1" class="form-label">Confirm Password</label>
						<input type="password" class="form-control" id="exampleInputPassword1" name="con_password">
						<?php if(isset($_SESSION['error']['con_password'])) { ?>
						<small><font color="red"><?php echo $_SESSION['error']['con_password']; ?></font></small>
						<?php unset($_SESSION['error']['con_password']); } ?>
					</div>

					<button type="submit" class="btn btn-primary mb-5">Register</button>
				</form>
			</div>
		</div>
	</div>

	<footer class="bg-dark ">
		<div class="copy-rights">
			<p class="text-white pt-3 pb-3 text-center">copy right reserverd by PNY@2023</p>
		</div>
	</footer>

	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>