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
	<?php include("layouts/header.php"); ?>
	<div class="container">
		<div class="row mt-5">
			<div class="col-md-12">
				<h2 class="text-center">Register Here</h2>
			</div>
		</div>
		<div class="row mt-5">
			<div class="col-md-6 mx-auto">
				<form>
					<div class="mb-3">
						<label for="exampleInputEmail1" class="form-label">Full Name</label>
						<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
						<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
					</div>
					<div class="mb-3">
						<label for="exampleInputEmail1" class="form-label">Email address</label>
						<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
						<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
					</div>
					<div class="mb-3">
						<label for="exampleInputEmail1" class="form-label">Phone Number</label>
						<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
						<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
					</div>
					<div class="mb-3">
						<label for="exampleInputEmail1" class="form-label">Address</label>
						<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
						<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
					</div>
					<div class="mb-3">
						<label for="exampleInputEmail1" class="form-label">City</label>
						<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
						<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
					</div>
					<div class="mb-3">
						<label for="exampleInputEmail1" class="form-label">State/Province</label>
						<select class="form-control">
							<option>Punjab</option>
							<option>Blochistan</option>
							<option>Sindh</option>
							<option>KPK</option>
							<option>Gilgit Bultistan</option>
						</select>
					</div>
					<div class="mb-3">
						<label for="exampleInputPassword1" class="form-label">Password</label>
						<input type="password" class="form-control" id="exampleInputPassword1">
					</div>
					<div class="mb-3">
						<label for="exampleInputPassword1" class="form-label">Confirm Password</label>
						<input type="password" class="form-control" id="exampleInputPassword1">
					</div>

					<button type="submit" class="btn btn-primary">Register</button>
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