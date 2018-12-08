<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

        <!-- jQuery library -->
		<script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
 
        <!-- Latest compiled JavaScript -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> 
		
		<link rel="stylesheet" href="home.css">
		<title>Sign in</title>
		
	</head>
	<body >

		<div id="app">
			<nav class="navbar navbar-default bg-default">
				<div class="container">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
						<span class="sr-only">Menu</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						</button>
						<a class="navbar-brand " href="#"> <img class="logo" src="photo/logo.png" width="300" height="50"></a>					</div>
					<div class="collapse navbar-collapse" id="app-navbar-collapse">
						<ul class="nav navbar-nav">&nbsp;</ul>
						<ul class="nav navbar-nav navbar-right">
						<br>
							<li><a href="signin.php" id="btn">Signin</a></li>
						</ul>
					</div>
				</div>
			</nav>
	<br>
			<div  class="container "style="background-color:#33c0ca;">
				<div class="navbar-header">
					<h1 style=color:#f4f8f8;>Sign  in</h1>
				
				</div>
				
			</div>
		
			
			<br><br>

			<div class="container">
				<div class="row">

						
							<center>&nbsp;<img src="photo/psupassport.png"><br></center>
							
						

					<div class="col-md-8 col-md-offset-2">


							<div class="container">
								<form id="form" class="form-horizontal" action="login.php" method="POST" role="form">
									<div class="form-group">
										<div class="col-md-8">
										<label for="username" class="col-md-1 control-label">Username</label>
											<input type="text" class="form-control" id="txtUserId" name="txtUserId" placeholder="Please enter a username here." maxlength="12" autofocus>
											</div>
										<br>
									</div>
									<div class="form-group">
										<div class="col-md-8">
										<label for="password" class="col-md-1 control-label">Password</label>

											<input type="password" class="form-control" id="txtPassword" name="txtPassword" placeholder="Please enter a password here." maxlength="12">
										</div>
										<br><br>
									</div>
								
									<div class="form-group">
										<div class="col-md-6 col-md-offset-2">
											
												<a>
														&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
														&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
														<button type="submit" id="signin" name="button"  class="float-left submit-button">
												Sign  in</button></a> &nbsp;
											
										</div>
									</div>
									
								</form>
								<div>
										<b><?php if(isset($_SESSION["ReportError"])) {echo $_SESSION["ReportError"];}?></b>
								</div>
							</div>



						<div id="err" style="display:none" class="alert alert-danger alert-dismissable fade in">
							<a href="#" class="close" data-dismiss="alert" aria-label="close">x</a>
							<strong>incorrect username or password please try again</strong><br>
							<span style="color:blue;font-weight:bold" id="summary"></span>
						</div>
						<div id="suc" style="display:none" class="alert alert-success alert-dismissable fade in">
							<a href="#" class="close" data-dismiss="alert" aria-label="close">x</a>
							<strong>login successfully</strong>
						</div>
					</div>
				</div>
			</div>
		</div>
	

</body>