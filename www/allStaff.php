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
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="http://code.jquery.com/jquery-latest.min.js"></script>
    <link rel="stylesheet" rel="stylesheet" type="text/css" href="css/home.css">
    <link rel="stylesheet" rel="stylesheet" type="text/css" href="css/test.css">
    <link rel="stylesheet" rel="stylesheet" type="text/css" href="css/pagination.css">
    <script src="js/pagination.min.js"></script>
    <script src="js/pagination.js"></script>




    <title>Document</title>
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
      
        <div class="container" style=background-color:#33c0ca;>
            <div class="navbar-header">
                <h1 style=color:#f4f8f8;>Search by COC Academic staff</h1>

            </div>

        </div>

        <div class="container">
            <div class="row" style=background-color:#f2f1f1;>


                <div class="collapse navbar-collapse" id="app-navbar-collapse">
                    <ul class="nav navbar-nav">&nbsp;</ul>
                    <ul class="nav navbar-nav navbar-left"></ul>
                    <ul class="col-md-6">
                        <h3>Result</h3>

                    </ul>
                    <br>
                    <label for="chooses">chooses  name</label>
                    <select class="choosesName" id="choosesName">
                    <script>
                       
                        var choosesNames=document.getElementById("choosesName");
                        var xmlhttps = new XMLHttpRequest();
                        var urls ='https://staffcoc.000webhostapp.com/db.json';
                        xmlhttps.open("GET", urls, false);
                        xmlhttps.send();
                        if (xmlhttps.readyState == 4 && xmlhttps.status == 200)
                        {
                         var result = xmlhttps.responseText;
                            var jsResult = JSON.parse(result);                                
                            var pop = jsResult["staffcoc"].length;
                            var pass ="";
                            var positionaj = ""
                        for(var l =0;l<=pop-1;l++){
                           var option = document.createElement('option');
                           option.value = l+1;     
                           passs = urls+'/'+ option.value;
                           console.log(jsResult["staffcoc"][l]);
                  
                      
                           option.textContent = jsResult["staffcoc"][l]["position"]+jsResult["staffcoc"][l]["staffName"]+"  "+jsResult["staffcoc"][l]["staffLastName"];
                           console.log(option.textContent);
                           choosesNames.appendChild(option); 
                        }
                    }
                    </script>
                   
                </select>
                  
                        <!-- <input type="text" id="DateYear" required="required"> -->
                        
                              
                            <label for="year">year</label>
                            <select class="yearselect" id="yearselect">
                            <script>
                               
                                var yearSelect=document.getElementById("yearselect");
                                var myDate = new Date();
                                var year = myDate.getFullYear();
                                for(var j =1990;j<=year ;j++){
                                   // yearselect.options[y]=new Option(thisyear, thisyear);
    
                                   var option = document.createElement('option');
                                   option.value = j;     
                                 //  option.appendChild(document.createTextNode(j));
                                   option.textContent = j;
                                   yearSelect.appendChild(option);
                               // var list ='<option value="'+j+'">'+j+'</option>'; 
                                //  document.write(list); 
                                
                            }
                            </script>
                           
                        </select>
                        to
                        <select class="yearselectto" id="yearselectto">
                                <script>
                                   
                                    var yearSelectto=document.getElementById("yearselectto");
                                    var myYear = new Date();
                                    var years = myYear.getFullYear();
                                    for(var k =1990;k<=years ;k++){
        
                                       var option = document.createElement('option');
                                       //option.value = k;     
                                       // option.appendChild(document.createTextNode(j));
                                       option.textContent = k;
                                       yearSelectto.appendChild(option);
                                   // var list ='<option value="'+j+'">'+j+'</option>'; 
                                    //  document.write(list); 
                                    
                                }
                                </script>
                               
                            </select>
                
                        <button class="btn btn-info" type="submit" id="searchV"  onclick="myFunction()">
                            Seach  
                            <span class="glyphicon glyphicon-share-alt"></span>
                        </button>
                    </ul>
                </div>
                <div class="container">
                    <!-- <div class="row" id="row"> -->
                    <div id="data-container"></div>
                    <div id="pagination-container"></div>
                    <!-- <div class="" id="data"></div> -->
                    <!-- </div> -->
                </div>
                
                
            </div>
        </div>


    </div>
    <script src="js/test.js"></script>

</body>

</html>