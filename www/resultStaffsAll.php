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
    <title>Result</title>

</head>

<body background="">
    <div class="loader"></div>
    <div id="app">
        <nav class="navbar navbar-default navbar-static-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                        <span class="sr-only">Menu</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand">COC Publication Report System</a>
                </div>
                <div class="collapse navbar-collapse" id="app-navbar-collapse">
                    <ul class="nav navbar-nav">&nbsp;</ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <a href="logout.php" id="btn">Logout</a>
                        </li>
                        <li>
                            <a href="home.php" id="btn">Search</a>
                        </li>
                        <li>
                            <a href="COCAcademicStaff.php" id="btn">COC Academic Staff</a>
                        </li>
                        <li>
                            <a href="contact.php" id="btn">Contact</a>
                        </li>
                        <li>
                            <a>User</a>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
        <div class="container" style=background-color:#33c0ca;>
            <div class="navbar-header">
                <h1 style=color:#f4f8f8;>Search</h1>

            </div>

        </div>
        <br>
        <div class="container">
            <div class="row" style=background-color:#f2f1f1;>
                <div class="collapse navbar-collapse" id="app-navbar-collapse">
                    <legend>
                        <ul class="nav navbar-nav">&nbsp;</ul>
                        <ul class="nav navbar-nav navbar-left"></ul>
                        <div class="col-md-9">
                            <h3 id="btn">Name</h3>
                        </div>
                        <form id="searchForm" class="form-horizontal" action="" method="POST" role="form">
                            <div class="form-group col-md-2">
                                <input type="text" class="form-control" id="history" name="search" placeholder="Search"
                                    maxlength="100" autofocus>

                            </div>&nbsp;&nbsp;
                            <span class="glyphicon glyphicon-search"></span>
                        </form>


                        </ul>
                        <br>
                    </legend>
                </div>

                <br>


                <div class="col-md-3  " id="image">

                    <img src="photo/dan.jpg" width="100" height="100" alt="">

                    <h5 id="NumberofCitations"> Number of Citations : 586117</h5>
                    <h5 id="NumberofArticles"> Number of Articles : 586</h5>
                    <div class="col-md-7">
                        <input class="form-control" id="searchDateOne" name="searchDateOne" placeholder="Date"
                            autofocus="" type="date">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <p>to</p>

                    <br>
                    <a href="report.php">
                    <button class="btn btn-info" type="submit" id="searchV">
                        View Report
                        <span class="glyphicon glyphicon-share-alt"></span>
                    </button></a>
                    <br>
                    <br>

                </div>

                <div class="col-md-2">
                    <br><br><br><br><br><br><br><br>
                    <input class="form-control" id="searchDateOne" name="searchDateOne" placeholder="Date" autofocus=""
                        type="date">

                </div>
                <div class="col-md-5 " id="showresult" style=background-color:#ffffff;>
                    <br><br>
                </div>

                

            </div>
        </div>

    </div>
    </div>
    <br>

    </div>
<script src="js/result.js"></script>   

</body>