var xmlhttp = new XMLHttpRequest();
var url='';
var name,lastname,meet,issuse,total,to,you;
var r='';
$(function(){
    // is the string "id"
    
     url ='https://staffcoc.000webhostapp.com/db.json';
    xmlhttp.open("GET", url, false);
    xmlhttp.send();
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
    {
         var result = xmlhttp.responseText;
         var jsResult = JSON.parse(result);
         
         var c = jsResult["staffcoc"].length;
        
         for(i =0;i<c;i++){
             to=jsResult["staffcoc"][i]["id"];
            // console.log(to);
          
            
               name =jsResult["staffcoc"][i]["staffName"].toLowerCase();
               lastname = jsResult["staffcoc"][i]["staffLastName"].toLowerCase();
            
              r += "<b>"+ jsResult["staffcoc"][i]["position"] + "</b> <b> "+jsResult["staffcoc"][i]["staffName"]+"</b> <b>"+jsResult["staffcoc"][i]["staffLastName"]+"</b>";
              
              //return pop;  
            }
        }
        
      // document.getElementById("image").innerHTML = r;
    
    })

$(function(){
    var x ='https://api.elsevier.com/content/search/scopus?query=ALL(';
    var y=')&apiKey=185547eee67ed06e5e817a0f227d23fe';
    for(var i=0;i<= to; i++){
        url = x+name+'%20AND%20'+lastname+y;
        console.log(url);
    }
   
    // url = x+name+'%20AND%20'+lastname+y;
    console.log(url);
    xmlhttp.open("GET", url, false);
    xmlhttp.send();
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
    {
         var result = xmlhttp.responseText;
         var ResultStaff = JSON.parse(result);
         
         var c = jsResult["search-results"]["entry"].length;
        you='';
         for(i =0;i<c;i++){

        issuse = +ResultStaff ["search-results"]["entry"][i]["prism:issueIdentifier"];
         
           if(!issuse=== issuse|| 0){

            total="<h5>Number of Articles: None </h5>";
        }
           else{
            total = "<h5>Number of Articles : "+parseInt(issuse)+"</h5>"; 
           }
         
           meet =ResultStaff ["search-results"]["entry"][i]["link"][2]["@href"];
          
            r += "<h5 id=Name>"+r[i]+"</h5></br>";
            you += i+1 +". <b><a href="+meet+">"+ ResultStaff ["search-results"]["entry"][i]["dc:title"] + "</a></b>,<i> "+ResultStaff["search-results"]["entry"][i]["prism:publicationName"]+"</i>, "+ResultStaff["search-results"]["entry"][i]["prism:coverDisplayDate"]+"</br>"+ "<p> Number of Citations:"+ ResultStaff["search-results"]["entry"][i]["citedby-count"]+"</p><br><br>";    
            }
       //  document.getElementById("image").innerHTML = r+you;
        // document.getElementById("NumberofArticles").innerHTML = total;
    }else {
        var text = "none" ;
        document.getElementById("showresult").innerHTML = text;
    }
})

$(function(){


})

