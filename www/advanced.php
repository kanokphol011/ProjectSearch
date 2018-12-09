<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <link rel="stylesheet" rel="stylesheet" type="text/css" href="css/home.css">

    <!-- <style>
        div.col-md-9 Search{
            margin-left: 50px;
        }
    </style> -->

    <script>
            function collectJSON(){
         
                var xmlhttp = new XMLHttpRequest();
                var Title = document.getElementById("TitleName").value;
                var Lauth = document.getElementById("Lauthor").value;
                var Nauth = document.getElementById("Nauthor").value;   
                var Keyword = document.getElementById("Keyword").value;
                var Exclude = document.getElementById("Exclude").value;
                var DateFrom = document.getElementById("yearselect").value;
                var DateTo = document.getElementById("yearselectto").value;
                var ApiKey = '&apiKey=185547eee67ed06e5e817a0f227d23fe';         
                
                var y = "";
                //url = 'https://api.elsevier.com/content/search/scopus?query=EXACTSRCTITLE('+Title+')&authlast('+Lauth+')&authfirst('+Nauth+')&AFFIL(Prince%20of%20Songkla%20University)&apiKey=185547eee67ed06e5e817a0f227d23fe'; 
                var x='https://api.elsevier.com/content/search/scopus?';
                if(!Title === false){
                    if(!y===true){
                        y+=x+'query=title('+Title+')';
                        console.log(1);
                    }
                    else{
                       // y+=x+'query=title('+Title+')';
                        console.log(2);
                    }
                }
                if(!Lauth === false){
                    if(!y=== true){
                       y+=x+'query=AUTHLASTNAME('+Lauth+')';
                       console.log(2);
                    }  
                    else{
                        y+='&AUTHLASTNAME('+Lauth+')';
                        console.log(3);  
                    }         
                }
                if(!Nauth === false){
                    if(!y=== true){
                       y+=x+'query=authfirst('+Nauth+')';
                       console.log(5);
                    }  
                    else{
                        y+='&authfirst('+Nauth+')';
                        console.log(6);
                    }         
                }
                if(!Keyword === false){
                    if(!y=== true){
                        y+=x+'query=KEY('+Keyword+')';
                        console.log(7);
                    } 
                    else {
                        y+='&KEY('+Keyword+')';       
                        console.log(8);
                    }
                }
                if(!Exclude === false){
                    if(!y=== true){
                        y+=x+'query=NOT%20KEY('+Exclude+')';
                        console.log(9);
                    } 
                    else {
                        y+='&NOT%20KEY('+Exclude+')';       
                        console.log(10);
                    }
                }
                if(!DateFrom === false && !DateTo===false){
                    if(!y=== true){
                        y+=x+'query=PUBYEAR%20>%20'+DateFrom+'AND%20PUBYEAR%20<%20'+DateTo;
                        console.log(11);
                    } 
                    else {
                        y+='&PUBYEAR%20>%20'+DateFrom+'AND%20PUBYEAR%20<%20'+DateTo;       
                        console.log(12);
                    }
                }
                if(!checkBox.checked === false){
                    if(!y=== true){
                        y+=x+'query=AFFIL(Prince%20of%20Songkla%20University)';
                      console.log(13);
                    } 
                    else {
                        y+='&AFFIL(Prince%20of%20Songkla%20University)';
                        console.log(14);
                    }
                }
                
                console.log(y+ApiKey);
                var url =y+ApiKey;
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
                        //r += i+1 +". <b>"+ jsResult["search-results"]["entry"][i]["preferred-name"]["surname"] + "</b> ,<i>"+jsResult["search-results"]["entry"][i]["preferred-name"]["given-name"]+"</i> <i> "+jsResult["search-results"]["entry"][i]["affiliation-current"]["affiliation-name"]+"</i>,"+jsResult["search-results"]["entry"][i]["document-count"]+"</br>";
                     }
                     document.getElementById("showName").innerHTML = r;
                }
                else{
                    console.log(Error);
                    console.log(ErrorEvent)
                }
               }
        </script>
    <title>advanced</title>

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
                <br>
                <div class="container" class="container-fluid bg-success" style="background-color:#33c0ca;padding-top:10px;padding-bottom:10px">
                    <div class="navbar-header">
                        <h1 style=color:#f4f8f8;>Search</h1>
        
                    </div>
        
                </div>
                <br>
                <div class="container">
                    <div class="row" style=background-color:#f2f1f1;>
        
        
                        <div class="bs-example">
                            <div class="list-group">
                                <a href="home.php" class="list-group-item">
                                    <h4> <span class="glyphicon glyphicon-search"></span>&nbsp;&nbsp; All <span class="badge"></span></h4>
                                </a>
                                <a href="authors.php" class="list-group-item">
                                    <h4> <span class="glyphicon glyphicon-user"></span>&nbsp;&nbsp; Authors <span class="badge"></span></h4>
                                </a>
                                <a href="advanced.php" class="list-group-item">
                                    <h4> <span class="glyphicon glyphicon-zoom-in"></span>&nbsp;&nbsp; Advanced <span class="badge"></span></h4>
                                </a>
        
                            </div>
                        </div>
                </legend>
               
                <div class="Search">
                    <br>

                    <div class="container">
                            <form class="form-horizontal">
                        <div class="form-group">
                                <div class="form-group">
                                <h5> <label for="title" >Title: </label></h5>
                            <input type="text"class="form-control col-md-5" id="TitleName" name="TitleName"placeholder="Title name"  >
                        </div>
                            <!-- <h5><label for="name" >Name: </label></h5>
                            <input type="text" class="form-control col-md-3"id="Nauthor" name="Nauthor" placeholder="Authors name" required="required">
                            <br>
                            <h5><label for="lastname" >Lastname: </label></h5>
                            <input type="text"class="form-control col-md-3" id="Lauthor" name="Lauthor" placeholder="Authors Lastname" required="required"><br><br><br> -->
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <div class="row col-offsize-md-1">
			    				<div class="col-xs-5 col-sm-5 col-md-5">
			    					<div class="form-group">
                                            <h5><label for="lastname" >Authors name: </label></h5>
			                <input type="text" name="Nauthor" id="Nauthor" class="form-control input-sm " placeholder="Authors name">
			    					</div>
                                </div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			    				<div class="col-offsize-sm-2 col-offsize-xs-2 col-offsize-md-2 col-xs-5 col-sm-5 col-md-5">
			    					<div class="form-group">
                                            <h5><label for="lastname" >Authors Lastname: </label></h5>
			    						<input type="text" name="Lauthor" id="Lauthor" class="form-control input-sm"  placeholder="Authors Lastname">
			    					</div>
			    				</div>
                            </div>
                            <div class="row col-offsize-md-1">
                                    <div class="col-xs-5 col-sm-5 col-md-5">
                            <div class="form-group">
                            <h5><label for="name" >Keyword: </label> </h5>
                            <input type="keyword" class="form-control" id="Keyword" name="Keyword" placeholder="Keyword" >
                        </div>
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div class="col-xs-5 col-sm-5 col-md-5">
                        <div class="form-group">
                            <h5><label for="exclude" >Exclude: </label> </h5>
                            <input type="text"class="form-control" id="Exclude" name="Exclude" placeholder="Exclude" >
                        </div>
                    </div>
                </div>
                <div class="row col-offsize-md-1">
                                    <div class="col-xs-4 col-sm-4 col-md-4">
                            <div class="form-group">
                            <h5><label for="year">year</label></h5>
                            <select class="yearselect" id="yearselect">
                                  
                            <script>
                               
                                var yearSelect=document.getElementById("yearselect");
                                var myDate = new Date();
                                var year = myDate.getFullYear();
                                for(var j =2005;j<=year ;j++){
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
                                    for(var k =2005;k<=years ;k++){
        
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
                        </div> 
                        </div>
                                   <br><br> <br>        
                            <div class="col-md-6">
                                   <br>       
                                    <h5><input type="checkbox" name="checkBox" id="checkBox" 
                                    checked="checked">Affiliation: Prince of Songkla University</h5>
                        
                                </div>
                                <div class="form-group">
                                        <div class="col-md-3 ">
                                                <br>  
                                       <a class="btn btn-primary btn-lg" id="btnClick" onclick="collectJSON();"> Search</a>
                
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </form>
                            
                        </div>
                        <br>
                    </div>
                   
                    <div class="row">
                    <div class="col-md-3" ></div>
                    <div class="col-md-8" id="showName"></div>
                    </div>
                </div>

                <br>

            </div>
        </div>
        <br>
    
    
    </div>
    </div>
    <br>

    </div>

</body>