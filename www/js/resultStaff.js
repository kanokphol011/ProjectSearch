var xmlhttp = new XMLHttpRequest();
var urlSearchParams = URL.searchParams;
let params = (new URL(document.location)).searchParams;
let tid = params.get("id");
var url='';
var name,lastname,meet,issuse,total;
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
         var r = "";
         for(i =0;i<c;i++){
             //var to=jsResult["staffcoc"][i]["id"];
            // console.log(to);
            if(parseInt(jsResult["staffcoc"][i]["id"])===parseInt(tid)){
               name =jsResult["staffcoc"][i]["staffName"].toLowerCase();
               lastname = jsResult["staffcoc"][i]["staffLastName"].toLowerCase();
            
              r += "<b>"+ jsResult["staffcoc"][i]["position"] + "</b> <b> "+jsResult["staffcoc"][i]["staffName"]+"</b> <b>"+jsResult["staffcoc"][i]["staffLastName"]+"</b></a></br>";
              
              //return pop;  
            }
        }
        
        document.getElementById("Name").innerHTML = r;
    
    }
})

$(function(){
    var x ='https://api.elsevier.com/content/search/scopus?query=ALL(';
    var y=')&apiKey=185547eee67ed06e5e817a0f227d23fe';
    url = x+name+'%20AND%20'+lastname+y;
    console.log(url);
    xmlhttp.open("GET", url, false);
    xmlhttp.send();
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
    {
         var result = xmlhttp.responseText;
         var jsResult = JSON.parse(result);
         
         var c = jsResult["search-results"]["entry"].length;
         var you = "";
         for(i =0;i<c;i++){

           issuse = +jsResult["search-results"]["entry"][i]["prism:issueIdentifier"];
           console.log(issuse);
           if(!issuse=== issuse|| 0){

            total="<h5>Number of Articles: None </h5>";
        }
           else{
            total = "<h5>Number of Articles : "+parseInt(issuse)+"</h5>"; 
           }
          // console.log(total);
           meet =jsResult["search-results"]["entry"][i]["link"][2]["@href"];
           console.log(meet);
           you += i+1 +". <b><a href="+meet+">"+ jsResult["search-results"]["entry"][i]["dc:title"] + "</a></b>,<i> "+jsResult["search-results"]["entry"][i]["prism:publicationName"]+"</i>, "+jsResult["search-results"]["entry"][i]["prism:coverDisplayDate"]+"</br>"+ "<p> Number of Citations:"+ jsResult["search-results"]["entry"][i]["citedby-count"]+"</p><br><br>";
        
            //r += i+1 +". <b>"+ jsResult["search-results"]["entry"][i]["preferred-name"]["surname"] + "</b> ,<i>"+jsResult["search-results"]["entry"][i]["preferred-name"]["given-name"]+"</i> <i> "+jsResult["search-results"]["entry"][i]["affiliation-current"]["affiliation-name"]+"</i>,"+jsResult["search-results"]["entry"][i]["document-count"]+"</br>";
         }
         document.getElementById("showresult").innerHTML = you;
         document.getElementById("NumberofArticles").innerHTML = total;
    }else {
        var text = "none" ;
        document.getElementById("showresult").innerHTML = text;
    }
})
