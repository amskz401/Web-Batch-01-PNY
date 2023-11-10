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
	<?php $activeClass = 'cart'; ?>
	<?php include("layouts/header.php"); ?>
	<div class="text-center p-5 bg-secondary bg-gradient text-white border-top mb-5">
		<h1 class="">Cart</h1>
	</div>
	<section class="container">
		<div class="row">
			<div class="col-md-12">
				
				<table class="table table-striped">

					<thead>
						<tr>
							<th>#</th>
							<th>Title</th>
							<th>Quantity</th>
							<th>Sub total</th>
							<th>Total</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>Prodcut One</td>
							<td>2</td>
							<td>12</td>
							<td>24</td>
						</tr>
						<tr>
							<td>2</td>
							<td>Prodcut Two</td>
							<td>1</td>
							<td>12</td>
							<td>12</td>
						</tr>
						<tr>
							<td>3</td>
							<td>Prodcut Three</td>
							<td>1</td>
							<td>12</td>
							<td>12</td>
						</tr>
						<tr>
							<td colspan="4"><strong>Total</strong></td>
							<td>48</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<div class="row">
			<div class="col-md-12 text-end">
				<a href="checkout.html" class="btn btn-success">Checkout</a>
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