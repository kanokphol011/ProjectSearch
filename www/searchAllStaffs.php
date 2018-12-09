<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- <meta name="viewport" content="width=device-width, initial-scale=1"> -->
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <title>COC Academic Staff</title>

</head>

<body background="">

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
                <h1 style=color:#f4f8f8;>Search by COC Academic staff</h1>

            </div>

        </div>
        <br>

        <br>
        <div class="container">
            <div class="row" style=background-color:#f2f1f1;>

                <div class="collapse navbar-collapse" id="app-navbar-collapse">
                    <ul class="nav navbar-nav">&nbsp;</ul>
                    <ul class="nav navbar-nav navbar-left"></ul>
                    <ul class="col-md-9">
                        <h3>Result</h3>

                    </ul>
                    <br>
                    <a href="reportStaffs.php">
                        <button class="btn btn-info" type="submit" id="searchV">
                            View Report All
                            <span class="glyphicon glyphicon-share-alt"></span>
                        </button></a>
                    </ul>
                </div><br><br>



                <div class="container" id="show">
                    <div class="col-md-3  " id="image">
                        <div id="Name"></div>
                        <div class="col-md-7">
                            <label for="year">year</label>
                            <select class="yearselect" id="yearselect">
                                <script>
                                    var yearSelect=document.getElementById("yearselect");
                                var myDate = new Date();
                                var year = myDate.getFullYear();
                                for(var j =2005;j<=year ;j++){
                                var option = document.createElement('option');
                                   option.value = j;     
                                      option.textContent = j;
                                   yearSelect.appendChild(option);                           
                            }
                        </script>
                            </select>
                            <h6>to</h6>
                            <select class="yearselectto" id="yearselectto">
                                <script>
                                    var yearSelectto=document.getElementById("yearselectto");
                                        var myYear = new Date();
                                        var years = myYear.getFullYear();
                                        for(var k =2005;k<=years ;k++){           
                                           var option = document.createElement('option');
                                           option.textContent = k;
                                           yearSelectto.appendChild(option);     
                                    }
                                    </script>
                            </select>
                        </div>

                    </div>
                    <div class="container">
                        <div class="col-md-12 " id="showresult" style=background-color:#ffffff;>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    </div>

    <br>

    </div>
    </div>
    </div>
    <br>

    </div>

    <script src="js/searchAllStaffs.js"></script>

</body>