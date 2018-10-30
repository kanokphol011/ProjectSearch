var xmlhttp = new XMLHttpRequest();
var url = '';
var name, lastname, total;
var you = '';
var all = '';
var htmldata = '';
var htmlname = '';
var r = '';
var ice = '';
var hearname = '';
var hearclose = '';
var x = 'https://api.elsevier.com/content/search/scopus?query=ALL(';
var y = ')&apiKey=185547eee67ed06e5e817a0f227d23fe';
var toAdd = document.createDocumentFragment();
var to =[];


$(function () {

    url = 'https://staffcoc.000webhostapp.com/db.json';
    xmlhttp.open("GET", url, false);
    xmlhttp.send();
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var result = xmlhttp.responseText;
        var jsResult = JSON.parse(result);
        var c = jsResult["staffcoc"].length;
        var g = '';
        var yearSelect = [];
        var yearSelectto = [];
        var option1 = '';
        var option2 = '';
        for (i = 0; i < c; i++) {
            g = '';
            //to = jsResult["staffcoc"][i]["id"];
            to.push(jsResult["staffcoc"][i]["id"]);
           
            
            name = jsResult["staffcoc"][i]["staffName"].toLowerCase();
            lastname = jsResult["staffcoc"][i]["staffLastName"].toLowerCase();
            
            g += x + jsResult["staffcoc"][i]["staffName"].toLowerCase() + '%20AND%20' + jsResult["staffcoc"][i]["staffLastName"].toLowerCase() + y;
            // var button = '<button class="btn btn-info" type="submit" id="searchV" value="submit" onclick="myFunction()">View Report' +
            //     '<span class="glyphicon glyphicon-share-alt"></span></button><br>';
            //ice += [i]+'<br>';

            xmlhttp.open("GET", g, false);
            xmlhttp.send();
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                var Result = xmlhttp.responseText;
                var ResultStaff = JSON.parse(Result);
                var b = ResultStaff["search-results"]["entry"].length;
                for (var j = 0; j < b; j++) {
                    if (j == 0) {
                        r = '<div class="col-sm-5">' + '<h5> <b>' + jsResult["staffcoc"][i]["position"] + '</b> <b> ' + jsResult["staffcoc"][i]["staffName"] +
                            '</b> <b>' + jsResult["staffcoc"][i]["staffLastName"] + '</b></h5>' + 
                            // '<select class="yearselect" id="yearselect' + i + '"></select><select class="yearselectto" id="yearselectto' + i + '"></select>' + '<br>' + button + 
                            '</div>';
                    } else {
                        r = '<div class="col-sm-5"></div>';
                    }
                    you = '<div class="col-sm-6">' + (j + 1) + ".<b>" + ResultStaff["search-results"]["entry"][j]["dc:title"] + "</b>,<i> " + ResultStaff["search-results"]["entry"][j]["prism:publicationName"] + "</i>, " + ResultStaff["search-results"]["entry"][j]["prism:coverDisplayDate"] + "</br>" + "<p> Number of Citations:" + ResultStaff["search-results"]["entry"][j]["citedby-count"] + "</p><br>" + '</div>';
                    // console.log(ResultStaff["search-results"]["entry"][j]["dc:title"]);

                    if (ResultStaff["search-results"]["entry"][j]["dc:title"] != null) {
                        all += r + you;
                    }

                }
                // all
                // console.log(all);

                // document.getElementById("data").innerHTML = '<div="col-sm-6">'+you+'</div>';
            }
            document.getElementById("name").innerHTML = '<div class="row" id="row">' + all + '</div>';



                
            }
        
                // var showName=document.getElementById("showName");
                //     var pop = jsResult["staffcoc"].length;
                //    var b='';
                //     var pass ="";
                    
                //         var option = document.createElement('option');
                //        // b += jsResult["staffcoc"][i]["position"]+jsResult["staffcoc"][i]["staffName"]+jsResult["staffcoc"][i]["staffLastName"];
                //         option.value = i;     
                //         option.textContent = jsResult["staffcoc"][i]["position"]+jsResult["staffcoc"][i]["staffName"]+jsResult["staffcoc"][i]["staffLastName"];
                //         console.log(option.textContent);
                //         showName.appendChild(option);
                    }
                
         
            $('#name').pagination({
                dataSource: to,
                pagesize: 10,
                callback: function(data, pagination) {
                    // template method of yourself
                    
                    var html = template(data);
                  
                    $('#name').html(html);
                }
            })
    })