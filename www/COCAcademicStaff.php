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
    <title>COC Academic Staff</title>

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
                    <a class="navbar-brand">COC Pubilcation Report System</a>
                </div>
                <div class="collapse navbar-collapse" id="app-navbar-collapse">
                    <ul class="nav navbar-nav">&nbsp;</ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <a href="logout.htm" id="btn">Logout</a>
                        </li>
                        <li>
                            <a href="home.htm" id="btn">Search</a>
                        </li>
                        <li>
                            <a href="COCAcademicStaff.htm" id="btn">COC Academic Staff</a>
                        </li>
                        <li>
                            <a href="contact.htm" id="btn">Contact</a>
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
      
        <br>
        <div class="container">
            <div class="row" style=background-color:#ccccb3;>
                <legend>
                    <div class="collapse navbar-collapse" id="app-navbar-collapse">
                        <ul class="nav navbar-nav">&nbsp;</ul>
                        <ul class="nav navbar-nav navbar-left"></ul>
                        <ul class="col-md-9">
                            <h3>List of COC academic staff</h3>
                            
                        </ul>
                        <form id="searchForm" class="form-horizontal" action="" method="POST" role="form">
                            <div class="form-group col-md-2">
                                <input type="text" class="form-control" id="search" name="search" placeholder="Search" maxlength="100" autofocus>

                            </div>&nbsp;&nbsp;
                            <span class="glyphicon glyphicon-search"></span>
                        </form>
                        
                        </ul>
                    </div>
                </legend>

                <div class="col-md-9">
                    <br>
                    <div class="container">
                        <div class="col-md-6">

                            <!-- ShownameAJ. -->
                            <div class="showNameAj" id="showNameAj">

                                <?php
                                    //connect to mysql database
                                    $con = mysqli_connect("127.0.0.1", "root", "", "staffcoc") or die("Error " . mysqli_error($con));
                                    $sql = "SELECT staffName,staffLName,position FROM staffcoc.staffcoc";
                                    $result = $con->query($sql);

                                    if ($result->num_rows > 0) {
                                    // output data of each row
                                    while($row = $result->fetch_assoc()) {
                                    echo " " . $row["position"]. $row["staffName"]. "&nbsp&nbsp" . $row["staffName"]. "<br>";
                                    }
                                    } else {
                                   echo "0 results";
                                    }
                                    $con->close();
                                ?>

                            </div>
                            <a href="searchAllStaffs.htm">
                            <button class="btn btn-info" type="submit" id="searchB">
                                    Search All &nbsp;  &nbsp;   
                                     <span class="glyphicon glyphicon-search"></span> </button></a>
    

                        </div>



                      

                    </div>

                </div>

                <div class="form-group">
                    <div class="col-md-2 col-md-offset-12">

                    </div>
                </div>
                </form>
            </div>

            <br>

        </div>
    </div>
    </div>
    <br>

    </div>
    


</body>