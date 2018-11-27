var xmlhttp = new XMLHttpRequest();
var url = '';
var name, lastname, meet, issuse, total, to;
var you = '';
var htmldata = '';
var htmlname = '';
var r = '';
var x = 'https://api.elsevier.com/content/search/scopus?query=ALL(';
var y = ')&apiKey=185547eee67ed06e5e817a0f227d23fe';
$(function () {
        // is the string "id"

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


                r += "  <div> <b>" + jsResult["staffcoc"][i]["position"] + "</b> <b> " + jsResult["staffcoc"][i]["staffName"] + "</b> <b>" + jsResult["staffcoc"][i]["staffLastName"] + "</b></div>";
                var name = 'test'
                var headname = '<div class="col-md-3" id="name"';
                var midname = '<h5>'+name+'</h5>' +
                
                    '<div class="col-md-3" id="yearFrom"' +
                    '<h5>From</h5>' +
                    '</div>' +
                    '<div class="col-md-1" id="yearFrom"' +
                    '<h5>to</h5>' +
                    '</div>' +
                    '<div class="col-md-3" id="yearTo"' +
                    '<h5>To</h5>' +
                    '</div>' +
                    '<div class="col-md-12" id="yearTo"' +
                    '<button class="btn btn-info" type="submit" id="searchV" value="submit" onclick="myFunction()">View Report' +
                    '<span class="glyphicon glyphicon-share-alt"></span> </button>' +
                    '</div>';

var midname = '<select class="yearselect" id="yearselect">'+yearSelect+'</select>';

var yearSelect=document.getElementById("yearselect");
var myDate = new Date();
var year = myDate.getFullYear();
for(var j =2005;j<=year ;j++){
var option = document.createElement('option');
   option.value = j;     
      option.textContent = j;
   yearSelect.appendChild(option);  

                var footname = '</div>';
                htmlname = headname + midname + footname;
                $('#showresult').append(htmlname)
                xmlhttp.open("GET", g, false);
                xmlhttp.send();
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    var Result = xmlhttp.responseText;
                    var ResultStaff = JSON.parse(Result);
                    var b = ResultStaff["search-results"]["entry"].length;
                    for (var j = 0; j < b; j++) {
                        you += (j + 1) + ". <b>" + ResultStaff["search-results"]["entry"][j]["dc:title"] + "</b>,<i> " + ResultStaff["search-results"]["entry"][j]["prism:publicationName"] + "</i>, " + ResultStaff["search-results"]["entry"][j]["prism:coverDisplayDate"] + "</br>" + "<p> Number of Citations:" + ResultStaff["search-results"]["entry"][j]["citedby-count"] + "</p><br>";
                        var headdata = '<div class="col-md-offset-4" id="data"';
                        var middata = you
                        var footdata = '</div>';
                        htmldata = headdata+middata+footdata
                        $("#showresult").append(htmldata);
                    }
                }

            }
        }

        var head = '<div class="col-md-3" id="name"';
        var mid = '<h5>name</h5>' +
            '<div class="col-md-3" id="yearFrom"' +
            '<h5>From</h5>' +
            '</div>' +
            '<div class="col-md-1" id="yearFrom"' +
            '<h5>to</h5>' +
            '</div>' +
            '<div class="col-md-3" id="yearTo"' +
            '<h5>To</h5>' +
            '</div>' +
            '<div class="col-md-12" id="yearTo"' +
            '<button class="btn btn-info" type="submit" id="searchV" value="submit" onclick="myFunction()">View Report' +
            '<span class="glyphicon glyphicon-share-alt"></span> </button>' +
            '</div>';
        var foot = '</div>';
        var html = head + mid + foot;
        $('#showresult').append(r);




                                 
    }



        // for(var i=0;i<= to; i++){

        // }


        // url = x+name+'%20AND%20'+lastname+y;

        // xmlhttp.open("GET", url, false);
        // xmlhttp.send();
        // if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
        // {
        //      var Result = xmlhttp.responseText;
        //      var ResultStaff = JSON.parse(Result);

        //      var b = jsResult["search-results"]["entry"].length;

        //     you='';
        //      for(i =0;i<b;i++){

        //        meet =ResultStaff ["search-results"]["entry"][i]["link"][2]["@href"];

        //         r += "<h5 id=Name>"+r[i]+"</h5></br>";
        //         you += i+1 +". <b><a href="+meet+">"+ ResultStaff ["search-results"]["entry"][i]["dc:title"] + "</a></b>,<i> "+ResultStaff["search-results"]["entry"][i]["prism:publicationName"]+"</i>, "+ResultStaff["search-results"]["entry"][i]["prism:coverDisplayDate"]+"</br>"+ "<p> Number of Citations:"+ ResultStaff["search-results"]["entry"][i]["citedby-count"]+"</p><br>";    
        //         }

        //         console.log(you);
        // document.getElementById("showresult").innerHTML = r;
        // document.getElementById("NumberofArticles").innerHTML = total;
    }


)