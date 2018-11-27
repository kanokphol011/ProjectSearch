<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <title>Result</title>

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
        <div class="container" style=background-color:#009999;>
            <div class="navbar-header">
                <h1 style=color:#f4f8f8;>Search by COC Academic staff</h1>

            </div>

        </div>
        <br>
        <div class="container">
            <div class="row" style=background-color:#ccccb3;>
                <div class="collapse navbar-collapse" id="app-navbar-collapse">
                    <legend>
                        <ul class="nav navbar-nav">&nbsp;</ul>
                        <ul class="nav navbar-nav navbar-left"></ul>
                        <div class="col-md-9" id="Name">
                            
                        </div>
                    
                    </legend>
                </div>

                <br>


                <div class="col-md-2  " id="image">
           
                    
                 
                    <button class="btn btn-info" type="button" id="btn" value="submit" onclick="myFunction()" >View Report</button>
                    <!-- <a href="reportStaffs.htm"></a> -->
                  
               
                    <br>
                    <br>

                </div>


                <div class="col-md-9 " id="showresultStaff" style=background-color:#ffffff;>
                    <br><br>
                </div>

                

            </div>
        </div>

    </div>
    </div>
    <br>

    </div>
<script src="js/resultSearch.js"></script>   


</body>