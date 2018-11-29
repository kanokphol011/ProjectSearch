<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"> -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <link rel="stylesheet" rel="stylesheet" type="text/css" href="css/home.css">
    <script>

        function collectJSON(){
         var xmlhttp = new XMLHttpRequest();
         var all = document.getElementById("all").value;
         var url ='';
         console.log(all,checkBox.checked);
        // var url = 'https://api.elsevier.com/content/search/scopus?query=AUTHOR-NAME('+auth+')&apiKey=c1012bdfeae663cbf772fda975c25fd3';
         
        if (!all === false && !checkBox.checked === false){
         url = 'https://api.elsevier.com/content/search/scopus?query=ALL('+all+')%20AFFIL(Prince%20of%20Songkla%20University)&apiKey=185547eee67ed06e5e817a0f227d23fe'; 
        console.log(1);      
      }
        if(!all === false && !checkBox.checked === true){
            url = 'https://api.elsevier.com/content/search/scopus?query=ALL('+all+')&apiKey=185547eee67ed06e5e817a0f227d23fe';
            console.log(2);        
        }
         if(!all === true && !checkBox.checked === false){
            url = 'https://api.elsevier.com/content/search/scopus?query=AFFIL(Prince%20of%20Songkla%20University)&apiKey=185547eee67ed06e5e817a0f227d23fe';
            console.log(3);     
        }
         console.log(url)
         xmlhttp.open("GET", url, false);
         xmlhttp.send();
         if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
         {
              var result = xmlhttp.responseText;
              var jsResult = JSON.parse(result);
              
              var c = jsResult["search-results"]["entry"].length;
              var r = "";
              for(i =0;i<c;i++){
                var meet =jsResult["search-results"]["entry"][i]["link"][2]["@href"];
                   r += "<h4><b><a href="+meet+">"+ jsResult["search-results"]["entry"][i]["dc:title"] + "</a></b>,<i> "+jsResult["search-results"]["entry"][i]["prism:publicationName"]+"</i>, "+jsResult["search-results"]["entry"][i]["prism:coverDisplayDate"]+"</h4></br>";
              }
             
             
              document.getElementById("show").innerHTML = r;
         }
        }
         </script>
    <title>Home</title>

</head>

<body>
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
        <br>
        <div class="container" class="container-fluid bg-success" style="background-color:#009999;padding-top:20px;padding-bottom:20px">
            <div class="navbar-header">
                <h1 style=color:#f4f8f8;>Search</h1>

            </div>

        </div>
        <br>
        <div class="container">
            <div class="row" style=background-color:#ccccb3;>


                <div class="bs-example">
                    <div class="list-group">
                        <a href="home.php" class="list-group-item">
                            <h3> <span class="glyphicon glyphicon-search"></span>&nbsp;&nbsp; All <span class="badge"></span></h3>
                        </a>
                        <a href="authors.php" class="list-group-item">
                            <h3> <span class="glyphicon glyphicon-user"></span>&nbsp;&nbsp; Authors <span class="badge"></span></h3>
                        </a>
                        <a href="advanced.php" class="list-group-item">
                            <h3> <span class="glyphicon glyphicon-zoom-in"></span>&nbsp;&nbsp; Advanced <span class="badge"></span></h3>
                        </a>

                    </div>
                </div>

                <div class="col-md-9">
                    <br>

                    <div class="container">
                        <div class="form-group">

                            <h2><label for="name">Seach </label></h2>
                            <input type="text" class="form-control col-md-4" id="all" name="all" required="required"><br>
                            
                            <div class="">
                                    <br><br>
                                <h5> <input type="checkbox" name="checkBox" id="checkBox" checked="checked">Affiliation:
                                    Prince of Songkla University</h5>
                            </div>
                        </div>


                    </div>

                    <div class="form-group">
                        <div class="col-md-3">
                                <button class="btn btn-primary btn-lg" id="btnClick" onclick="collectJSON();"> Search</button>
                            <br><br>
                            <!-- <button id="btnClick" onclick="collectJSON();">Search</button> -->

                        </div>
                    </div>
                    <br><br><br>
                    <div id="show">
                       
                    </div>

                </div>

                <br>

            </div>
        </div>
        <br>
        <br>
        <br>

    </div>
   
    

</body>