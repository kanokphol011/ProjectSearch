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

<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
    <title>Result</title>

</head>

<body background="">
    <div id="app">
    <nav class="navbar navbar-expand-lg navbar-default bg-default">
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
                <h1 style=color:#f4f8f8;>Search by COC Academic staff</h1>

            </div>

        </div>
        <br>
        <div class="container">
            <div class="row" style=background-color:#f2f1f1;>
                <div class="collapse navbar-collapse" id="app-navbar-collapse">
                    <legend>
                        <ul class="nav navbar-nav">&nbsp;</ul>
                        <ul class="nav navbar-nav navbar-left"></ul>
                        <div class="col-md-9" id="Name">
                            
                        </div>
                    <br>
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
        <br>

    </div>
    </div>
    <br>

    </div>
<script src="js/resultSearch.js"></script>   


</body>