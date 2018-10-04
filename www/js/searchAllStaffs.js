var xmlhttp = new XMLHttpRequest();
var url = '';
var name, lastname, meet, issuse, total, to;
var you = '';
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

                xmlhttp.open("GET", g, false);
                xmlhttp.send();
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    var Result = xmlhttp.responseText;
                    var ResultStaff = JSON.parse(Result);          
                    var b = ResultStaff["search-results"]["entry"].length;
                    for(var j=0;j<b;j++){
                      //  meet =ResultStaff ["search-results"]["entry"][j]["link"][2]["@href"];
                      you += j+1 +". <b>"+ ResultStaff ["search-results"]["entry"][j]["dc:title"] + "</b>,<i> "+ResultStaff["search-results"]["entry"][j]["prism:publicationName"]+"</i>, "+ResultStaff["search-results"]["entry"][j]["prism:coverDisplayDate"]+"</br>"+ "<p> Number of Citations:"+ ResultStaff["search-results"]["entry"][j]["citedby-count"]+"</p><br>";

                    }
                }

            }
        }

        document.getElementById("image").innerHTML = r;
        $("#showresult").append(you);






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