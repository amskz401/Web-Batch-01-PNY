<header>
	<nav class="navbar navbar-expand-lg navbar-dark bg-success">
		<div class="container-fluid">
			<a class="navbar-brand" href="index.php"><img src="images/site-logo.webp" height="75px"></a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mb-2 mb-lg-0 ms-auto <?php echo $activeClass; ?>">
					<li class="nav-item">
						<a class="nav-link <?php echo ($activeClass == 'home')?'active':''; ?>" aria-current="page" href="index.php"><i class="fa fa-home" aria-hidden="true"></i>&nbsp;Home</a>
					</li>
					<li class="nav-item">
						<a class="nav-link <?php echo ($activeClass == 'cart')?'active':''; ?>" aria-current="page" href="cart.php"><i class="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;Cart</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="signup.php"><i class="fa fa-user" aria-hidden="true"></i>&nbsp;Singup</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="login.php"><i class="fa fa-sign-in" aria-hidden="true"></i>&nbsp; Login</a>
					</li>
				</ul>
				
			</div>
		</div>
	</nav>
</header>