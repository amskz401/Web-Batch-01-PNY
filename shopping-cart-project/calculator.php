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
	<div class="container">
		<div class="row mt-5">
			<div class="col-md-12">
				<h2 class="text-center">Login Here</h2>
			</div>
		</div>
		<div class="row mt-5">
			<div class="col-md-6 mx-auto">
				<form id="login_form">
					<div class="form-group">
						<label>Expression</label>
						<input type="text" name="evaluate" id="input_expression" class="form-control">
						<button value="1" type="button">1</button>
						<button value="100" type="button">100</button>
						<button value="2" type="button">2</button>
						<button value="3" type="button">3</button>
						<button value="+" type="button">+</button>
						<button value="-" type="button">-</button>
						<button value="(" type="button">(</button>
						<button value=")" type="button">)</button>
						<button id="evaluate" type="button">Get Answer</button>
					</div>
				</form>
			</div>
		</div>

	</div>
	<!-- <footer class="bg-dark fixed-bottom-12">
		<div class="copy-rights">
			<p class="text-white pt-3 pb-3 text-center">copy right reserverd by PNY@2023</p>
		</div>
	</footer> -->
	<script type="text/javascript" src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
	<script src="https://cdn.jsdelivr.net/jquery.validation/1.16.0/jquery.validate.min.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
	<script type="text/javascript">

		jQuery(document).ready(function($) {

			$("button").click(function() {
				let old_value = $("#input_expression").val();
				if(old_value !== ''){
					$("#input_expression").val(old_value + '' +$(this).val());
				} else {
					$("#input_expression").val($(this).val());
				}
			});

			$("#evaluate").click(function() {
				let evaluate = $("#input_expression").val();
				// alert(eval(evaluate));
				$("#input_expression").val(eval(evaluate));

			})

		});	
	</script>
	<!-- <script type="text/javascript" src="js/custom.js"></script> -->
</body>
</html>