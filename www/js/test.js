var xmlhttp = new XMLHttpRequest();
var url = '';
var name, lastname,  total, to;
var you = '';
var htmldata = '';
var htmlname = '';
var r = '';
var x = 'https://api.elsevier.com/content/search/scopus?query=ALL(';
var y = ')&apiKey=185547eee67ed06e5e817a0f227d23fe';
var toAdd = document.createDocumentFragment();

$(function () {

        url = 'https://staffcoc.000webhostapp.com/db.json';
        xmlhttp.open("GET", url, false);
        xmlhttp.send();
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var result = xmlhttp.responseText;
            var jsResult = JSON.parse(result);

            var c = jsResult["staffcoc"].length;
            var g = '';
            
            for (i = 0; i < c; i++) {
                g = '';
                to = jsResult["staffcoc"][i]["id"];

                name = jsResult["staffcoc"][i]["staffName"].toLowerCase();
                lastname = jsResult["staffcoc"][i]["staffLastName"].toLowerCase();
                g += x + jsResult["staffcoc"][i]["staffName"].toLowerCase() + '%20AND%20' + jsResult["staffcoc"][i]["staffLastName"].toLowerCase() + y;
            
                // var yearSelect=document.getElementById("yearselect");
                // var myDate = new Date();
                // var year = myDate.getFullYear();
                // for(var j =2005;j<=year ;j++){
                // var option = document.createElement('option');
                //    option.value = j;     
                //       option.textContent = j;
                //    yearSelect.appendChild(option); 
                // }
            
               
                var button ='<button class="btn btn-info" type="submit" id="searchV" value="submit" onclick="myFunction()">View Report'
           + '<span class="glyphicon glyphicon-share-alt"></span></button>';
                r += '<div class="col-md-offset-1 col-md-3" style=background-color:#ffffff;> <h6> <b>' + jsResult["staffcoc"][i]["position"] + '</b> <b> ' + jsResult["staffcoc"][i]["staffName"]
                 + '</b> <b>' + jsResult["staffcoc"][i]["staffLastName"] + '</b></h6>'+[i]+'</div><br>';
                
                }

            // document.appendChild(toAdd);
            var classes ='<div class="form-group" id="pop">';
            var close = '</div>';
            document.getElementById("shows").innerHTML = classes+r+close;

        }  
        })
    
        // function YearFrom(){
        //     var secletOpen='<select class="yearselect" id="yearselect">';
        //     var yearSelect=document.getElementById("yearselect");
        //     var myDate = new Date();
        //     var year = myDate.getFullYear();
        //     for(var j =2005;j<=year ;j++){
        //     var option = document.createElement('option');
        //        option.value = j;     
        //           option.textContent = j;
        //        yearSelect.appendChild(option); 
        //     }
        //     var  selectClose ='</select>';
            

        // }