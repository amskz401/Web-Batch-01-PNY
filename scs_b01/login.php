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
	<?php include("layouts/header.php"); ?>
	<?php if(isset($_SESSION['user']) && $_SESSION['user'] == 'active') {
		header("Location: dashboard.php");
	} ?>
	<div class="container">
		<div class="row mt-5">
			<div class="col-md-12">
				<h2 class="text-center">Login Here</h2>
			</div>
		</div>
		<?php if(isset($_SESSION['error']['invalid_user'])) { ?>
		<div class="row mt-5">
			<div class="col-md-6 mx-auto">
				<div class="alert alert-danger">
					<h5><?php echo $_SESSION['error']['invalid_user']; ?></h5>
				</div>
			</div>
		</div>
		<?php unset($_SESSION['error']['invalid_user']); } ?>
		<div class="row mt-5">
			<div class="col-md-6 mx-auto">
				<form id="login_form" method="post" action="controller/process_user.php">
					<input type="hidden" name="process_login" value="true">
					<div class="mb-3">
						<label for="exampleInputEmail1" class="form-label">Email address</label>
						<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required name="email">
					</div>
					<p><label for="exampleInputPassword1" class="form-label">Password</label></p>
					<div class="input-group mb-3">

						<input type="password" class="form-control" id="password_field" required name="password">
						<div class="input-group-append" id="toggle_password">
							<span class="input-group-text" id="eye-icon"><i class="fa fa-eye"></i></span>
						</div>
					</div>
					<div class="mb-3 form-check">
						<input type="checkbox" name="remember_me" value="1" class="form-check-input" id="exampleCheck1">
						<label class="form-check-label" for="exampleCheck1">Remember Me</label>
					</div>
					<button type="submit" id="submit_form_btn" class="btn btn-primary">Submit</button>
				</form>
			</div>
		</div>

	</div>
	
	<footer class="bg-dark fixed-bottom-12">
		<div class="copy-rights">
			<p class="text-white pt-3 pb-3 text-center">copy right reserverd by PNY@2023</p>
		</div>
	</footer>
	<script type="text/javascript" src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
	<script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
	<script type="text/javascript">
		jQuery(document).ready(function($) {
			$('#login_form').validate();
		});	
	</script>
	<!-- <script type="text/javascript" src="js/custom.js"></script> -->
</body>
</html>