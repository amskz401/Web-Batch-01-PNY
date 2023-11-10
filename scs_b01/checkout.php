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
	<div class="text-center p-5 bg-secondary bg-gradient text-white border-top mb-5">
		<h1 class="">Checkout</h1>
	</div>
	<section class="container">
		<div class="row ">
			<div class="col-md-6 mx-auto">
				<div class="card">
					<div class="card-body">
						<form action="">
							<div class="form-group mb-3">
								<label><strong>First Name</strong></label>
								<input type="text" name="name" class="form-control" placeholder="Enter Your First Name Here">
							</div>
							<div class="form-group mb-3">
								<label><strong>Last Name</strong></label>
								<input type="text" name="name" class="form-control" placeholder="Enter Your Last Name Here">
							</div>
							<div class="form-group mb-3">
								<label><strong>Email</strong></label>
								<input type="text" name="name" class="form-control" placeholder="Enter Your Email Here">
							</div>
							<div class="form-group mb-3">
								<label><strong>Phone</strong></label>
								<input type="text" name="name" class="form-control" placeholder="Enter Your Phone Here">
							</div>
							<div class="form-group mb-3">
								<label><strong>Address</strong></label>
								<input type="text" name="name" class="form-control" placeholder="Enter Your Address Here">
							</div>
							<div class="form-group mb-3">
								<label><strong>City</strong></label>
								<input type="text" name="name" class="form-control" placeholder="Enter Your City Here">
							</div>
							<div class="form-group mb-3">
								<label><strong>Zip Code</strong></label>
								<input type="text" name="name" class="form-control" placeholder="Enter Your Zip Code Here">
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>

		<div class="row mt-5">
			<div class="col-md-6 mx-auto text-center">
				<a href="thankyou.html" class="btn btn-success btn-lg">Complete Order</a>
			</div>
		</div>
	</section>
	<div class="mb-5"></div>
	
	<footer class="bg-dark fixed-bottom-12">
		<div class="copy-rights">
			<p class="text-white pt-3 pb-3 text-center">copy right reserverd by PNY@2023</p>
		</div>
	</footer>

	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>