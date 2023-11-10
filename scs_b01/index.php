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
	<?php $activeClass = 'home'; ?>
	<?php include("layouts/header.php"); ?>
	<section class="container">
		<div class="row">
			<div class="col-md-12">
				<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
					<div class="carousel-indicators">
						<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
						<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
						<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
					</div>
					<div class="carousel-inner">
						<div class="carousel-item active">
							<img src="images/1.avif" class="d-block w-100" height="400px" alt="...">
							<div class="carousel-caption d-md-block">
								<h5>First slide label</h5>
								<p>Some representative placeholder content for the first slide.</p>
							</div>
						</div>
						<div class="carousel-item">
							<img src="images/2.webp" class="d-block w-100" height="400px" alt="...">
							<div class="carousel-caption d-md-block">
								<h5>Second slide label</h5>
								<p>Some representative placeholder content for the second slide.</p>
							</div>
						</div>
						<div class="carousel-item my-style">
							<img src="images/3.avif" class="d-block w-100" height="400px" alt="...">
							<div class="carousel-caption d-md-block">
								<h5>Third slide label</h5>
								<p>Some representative placeholder content for the third slide.</p>
							</div>
						</div>
					</div>
					<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
						<span class="carousel-control-prev-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Previous</span>
					</button>
					<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
						<span class="carousel-control-next-icon" aria-hidden="true"></span>
						<span class="visually-hidden">Next</span>
					</button>
				</div>
			</div>
		</div>
		<div class="row mt-5">
			<div class="col-md-12">
				<h2 class="border-bottom">Fetured Products</h2>
			</div>
		</div>
		<div class="row mt-3">
			
			<div class="col-md-3 mb-3">
				<div class="card">
					<img src="images/products/download.jfif" class="card-img-top" alt="images/products/download.jfif">
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" class="btn btn-primary">Go somewhere</a>
					</div>
				</div>
			</div>
			
			<div class="col-md-3 mb-3">
				<div class="card">
					<img src="images/products/download.jfif" class="card-img-top" alt="images/products/download.jfif">
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" class="btn btn-primary">Go somewhere</a>
					</div>
				</div>
			</div>
			<div class="col-md-3 mb-3">
				<div class="card">
					<img src="images/products/download.jfif" class="card-img-top" alt="images/products/download.jfif">
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" class="btn btn-primary">Go somewhere</a>
					</div>
				</div>
			</div>
			<div class="col-md-3 mb-3">
				<div class="card">
					<img src="images/products/download.jfif" class="card-img-top" alt="images/products/download.jfif">
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" class="btn btn-primary">Go somewhere</a>
					</div>
				</div>
			</div><div class="col-md-3 mb-3">
				<div class="card">
					<img src="images/products/download.jfif" class="card-img-top" alt="images/products/download.jfif">
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" class="btn btn-primary">Go somewhere</a>
					</div>
				</div>
			</div><div class="col-md-3 mb-3">
				<div class="card">
					<img src="images/products/download.jfif" class="card-img-top" alt="images/products/download.jfif">
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" class="btn btn-primary">Go somewhere</a>
					</div>
				</div>
			</div><div class="col-md-3 mb-3">
				<div class="card">
					<img src="images/products/download.jfif" class="card-img-top" alt="images/products/download.jfif">
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" class="btn btn-primary">Go somewhere</a>
					</div>
				</div>
			</div>
			<div class="col-md-3 mb-3">
				<div class="card">
					<img src="images/products/download.jfif" class="card-img-top" alt="images/products/download.jfif">
					<div class="card-body">
						<h5 class="card-title">Card title</h5>
						<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
						<a href="#" class="btn btn-primary">Go somewhere</a>
					</div>
				</div>
			<!-- </div> -->
		</div>
		<div class="row mt-5 mb-5">
			<div class="col-md-12 text-center">
				<a href="products.html" class="btn btn-success"><strong>Find Out More Products</strong></a>
			</div>
		</div>
	</section>
	
	<footer class="bg-dark fixed-bottom-12">
		<div class="copy-rights">
			<p class="text-white pt-3 pb-3 text-center">copy right reserverd by PNY@2023</p>
		</div>
	</footer>

	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
	<!-- <script type="text/javascript" src="js/my-script.js"></script> -->
	<script type="text/javascript" src="js/loop.js"></script>
</body>
</html>