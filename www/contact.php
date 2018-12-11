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

    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
    <title>Contact</title>

</head>

<body background="">
    <div class="loader"></div>
    <div id="app">
    <nav class="navbar navbar-expand-lg navbar-default bg-default" >
            <a class="navbar-brand " href="#"> <img class="logo" src="photo/logo.png" width="300" height="50"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1" aria-controls="navbarNav"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar1">
                <ul class="navbar-nav ml-auto ">
                    <li class="nav-item active">
                        <h4> <a class="nav-link" href="logout.php">&nbsp;&nbsp;Logout </a></h4>
                    </li>
                    <li class="nav-item active">
                        <h4> <a class="nav-link" href="home.php">&nbsp;&nbsp;Search <span class="sr-only">(current)</span></a></h4>
                    </li>
                    <li class="nav-item active">
                        <h4> <a class="nav-link" href="COCAcademicStaff.php">&nbsp;&nbsp;COC Academic Staff</a></h4>
                    </li>
                    <li class="nav-item active">
                        <h4> <a class="nav-link" href="contact.php">&nbsp;&nbsp;Contact</a></h4>
                    </li>
                    <li class="nav-item active">
                        <h4> <a class="nav-link" href="" charset="UTF-8">&nbsp;&nbsp;<?php echo $_SESSION["IDname"];?></a></h4>
                    </li>
                    
                </ul>
            </div>
        </nav>
        <div class="container" style=background-color:#33c0ca;>
            <div class="navbar-header">
                <h1 style=color:#f4f8f8;>Contact</h1>

            </div>

        </div>
        <br>
        <div class="container">
            <div class="row" style=background-color:#f2f1f1;>

                <div class="col-md-9">
                    <legend>
                        <h2>Contact</h2>
                    </legend>
                    <br>

                    <div class="row">
                        <div class="col-md-3">
                            <img src="photo/dan.jpg" width="150" height="150" alt="">
                        </div>
                        <div class="col-md-4 align-self-center">
                            <h4>กนกพล&nbsp;เสือพันธ์เจริญ</h4>
                        </div>
                        <div class="col-md-5 align-self-center">
                            <h4>E-mail:&nbsp;s5830213011@phuket.psu.ac.th</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-3">
                            <img src="photo/nan.jpg" width="150" height="150" alt="">
                        </div>
                        <div class="col-md-4 align-self-center">
                            <h4>จันจิรา&nbsp;หลิมประดิษฐ</h4>
                        </div>
                        <div class="col-md-5 align-self-center">
                            <h4>E-mail:&nbsp;s5830213012@phuket.psu.ac.th</h4>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    </div>
    <br>

    </div>
  

</body>