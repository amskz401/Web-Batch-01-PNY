<?php $conn = new mysqli("localhost", "root", "", "online_store"); ?>
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
				<form id="login_form" method="post" action="">
					
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
						<input type="checkbox" class="form-check-input" id="exampleCheck1">
						<label class="form-check-label" for="exampleCheck1">Check me out</label>
					</div>
					<button type="submit" id="submit_form_btn" class="btn btn-primary">Submit</button>

					<div class="alert alert-success d-none" role="alert">
						This is a success alert—check it out!
					</div>

					<div class="alert alert-danger" style="display: none;" role="alert">
						This is a danger alert—check it out!
					</div>
				</form>
			</div>
		</div>

	</div>
	<?php 
	
	
	$email = $_POST['email']; 
	$password = md5($_POST['password']); 

	$checkUser = $conn->query("SELECT * FROM `users` WHERE email = '$email' AND password = '$password'");
	if($checkUser->num_rows === 1){
		$_SESSION['user'] = $checkUser;
		echo 'user found';
	} else {
		echo 'user not found';
	}

	?>
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
				alert(eval(evaluate));
			})

			$(document).keypress(function(event) {
				// alert(event.keyCode);
			});

			$("p").dblclick(function(event) {
				// alert("Double Clicked Fired");
			});

			$("input").change(function(){
				// alert($(this).val());
			})

			$('#login_form').validate();

			// $("#submit_form_btn").click(function(event){
			// 	// event.preventDefault();
			// 	let login_form = $("#login_form").serialize();
			// 	console.log(login_form);
			// })

			$(".alert.alert-danger").removeClass("d-none");
			setTimeout(function() {
				$(".alert.alert-danger").addClass("d-none");
			}, 3000);

			$(".alert.alert-danger").css("display", "block");
			setTimeout(function() {
				$(".alert.alert-danger").css("display", "none");
			}, 3000);
			68
			$(".alert.alert-danger").show();
			setTimeout(function() {
				$(".alert.alert-danger").hide();
			}, 3000);
			70
			$(".alert.alert-danger").show("slow");
			setTimeout(function() {
				$(".alert.alert-danger").hide("slow");
			}, 3000);

			$("#eye-icon").click(function() {
				if($("#password_field").attr('type') == "password"){
					$("#password_field").attr('type', 'text');
				} else {
					$("#password_field").attr('type', 'password');
				}
			});
		});	
	</script>
	<!-- <script type="text/javascript" src="js/custom.js"></script> -->
</body>
</html>