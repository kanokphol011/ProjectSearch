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


$(
    function () {

    url = 'https://staffcoc.000webhostapp.com/db.json';
    xmlhttp.open("GET", url, false);
    xmlhttp.send();
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var result = xmlhttp.responseText;
        var jsResult = JSON.parse(result);
        var c = jsResult["staffcoc"].length;
        var c1 = jsResult["staffcoc"];
        
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
          
            $('#pagination-container').pagination({
                dataSource: c1,
                totalNumber: 43,
                pageSize: 5,
                ajax: {
                    beforeSend: function() {
                        $('#data-container').html('Loading data from flickr.com ...');
                    }
                },
                callback: function(data, pagination) {
                    // template method of yourself  
                    // var html = Handlebars.compile($('#name').html(), {
                    //     data: data
                    // });                
                    // var html = _.template($('#name').html, {
                    //     data: data
                    // }); 
                    
                    var html = simpleTemplating(data);

                    $('#data-container').html(html);
                    
                }
            })
    })

    function simpleTemplating(data) {     
        // document.getElementById('#data-container').value=''
        
        var html = "";
   
            // console.log(data);
            var g = '';
            var yearSelect = [];
            var yearSelectto = [];
            var usernames = '';
        for (i = 0; i < data.length; i++) {
            console.log(data[i]);
            g = '';
            //to = jsResult["staffcoc"][i]["id"];
            // to.push(jsResult["staffcoc"][i]["id"]);
           
            
            name = jsResult["staffcoc"][data[i]["id"]]["staffName"].toLowerCase();
            // console.log(name);

            lastname = jsResult["staffcoc"][data[i]["id"]]["staffLastName"].toLowerCase();
            
            g += x + jsResult["staffcoc"][data[i]["id"]]["staffName"].toLowerCase() + '%20AND%20' + jsResult["staffcoc"][data[i]["id"]]["staffLastName"].toLowerCase() + y;
            console.log(); 
            // var button = '<button class="btn btn-info" type="submit" id="searchV" value="submit" onclick="myFunction()">View Report' +
            //     '<span class="glyphicon glyphicon-share-alt"></span></button><br>';
            //ice += [i]+'<br>';
            
            xmlhttp.open("GET", g, false);
            xmlhttp.send();
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

                var Result = xmlhttp.responseText;
                var ResultStaff = JSON.parse(Result);
                var b = ResultStaff["search-results"]["entry"].length;
                console.log(ResultStaff["search-results"]["entry"].length); 
                for (var j = 0; j < b; j++) {
                    if (j == 0) {
                        
                        // usernames = jsResult["staffcoc"][i]["position"]+ jsResult["staffcoc"][i]["staffName"]+jsResult["staffcoc"][i]["staffLastName"];
                        r = '<div class="col-sm-6" style="border-top: 2px solid red;">' + '<h5> <b>' + jsResult["staffcoc"][data[i]["id"]]["position"] + '</b> <b> ' + jsResult["staffcoc"][data[i]["id"]]["staffName"] +
                            '</b> <b>' + jsResult["staffcoc"][data[i]["id"]]["staffLastName"] + '</b></h5>' + 
                            // '<select class="yearselect" id="yearselect' + i + '"></select><select class="yearselectto" id="yearselectto' + i + '"></select>' + '<br>' + button + 
                            '</div>';

                    } else {
                        // console.log(ResultStaff["search-results"]["entry"]); 
                        // usernames = usernames;
                        r = '<div class="col-sm-6 style="border-top: 2px solid #ccccb3;"></div>';
                    }

                    if(j == 0){
                        you = '<div class="col-sm-6" style="border-top: 2px solid red;">' + (j + 1 ) + ".<b>" + ResultStaff["search-results"]["entry"][j]["dc:title"] + "</b>,<i> " + ResultStaff["search-results"]["entry"][j]["prism:publicationName"] + "</i>, " + ResultStaff["search-results"]["entry"][j]["prism:coverDisplayDate"] + "</br>" + "<p> Number of Citations:" + ResultStaff["search-results"]["entry"][j]["citedby-count"] + "</p><br>" + '</div>';
                    }else{
                        you = '<div class="col-sm-6" style="border-top: 2px solid #ccccb3;">' + (j + 1) + ".<b>" + ResultStaff["search-results"]["entry"][j]["dc:title"] + "</b>,<i> " + ResultStaff["search-results"]["entry"][j]["prism:publicationName"] + "</i>, " + ResultStaff["search-results"]["entry"][j]["prism:coverDisplayDate"] + "</br>" + "<p> Number of Citations:" + ResultStaff["search-results"]["entry"][j]["citedby-count"] + "</p><br>" + '</div>';
                    }
                    // you = '<div class="col-sm-6">' + (j + 1) + ".<b>" + ResultStaff["search-results"]["entry"][j]["dc:title"] + "</b>,<i> " + ResultStaff["search-results"]["entry"][j]["prism:publicationName"] + "</i>, " + ResultStaff["search-results"]["entry"][j]["prism:coverDisplayDate"] + "</br>" + "<p> Number of Citations:" + ResultStaff["search-results"]["entry"][j]["citedby-count"] + "</p><br>" + '</div>';
                    // console.log(ResultStaff["search-results"]["entry"][j]["dc:title"]);


                    if (ResultStaff["search-results"]["entry"][j]["dc:title"] != null) {
                        // usernames;
                        html += r + you;
                      
                    }
                    // function template(data) {
                    //     var html = '<ul>';
                    //     $.each(data, function(index, all){
                    //         html += '<li>'+ all +'</li>';
                    //     });
                    //     html += '</ul>';
                    //     return html;                        
                    // }
                }
                // all
                // console.log(all);

                // document.getElementById("data").innerHTML = '<div="col-sm-6">'+you+'</div>';
            }

            // document.getElementById("name").innerHTML = '<div class="row" id="row">' + all + '</div>';
            // html += '<div class="row" id="row">' + html + '</div>';
            
            
            }
            html += "";
        
        return html;
    }

    function myFunction() {
        var choosesName = document.getElementById("choosesName").value;
        var DateFrom = document.getElementById("yearselect").value;
        var DateTo = document.getElementById("yearselectto").value;
     
       
           // $("#btn").click( function() {
               xmlhttp.open("GET", url, false);
               xmlhttp.send();
               //console.log(DateFrom)
               
              var url = "resultSearch.php?id="+choosesName+"&year="+DateFrom+"&to="+DateTo;
            // console.log(selector);
       
       
               window.location.assign(url);
           // });
       
       }