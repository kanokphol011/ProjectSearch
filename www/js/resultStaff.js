var xmlhttp = new XMLHttpRequest();
var urlSearchParams = URL.searchParams;
let params = (new URL(document.location)).searchParams;
let tid = params.get("id");
let options = {};

var url='';
var name,lastname,meet,issuse,total,to,you;
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
             to=jsResult["staffcoc"][i]["id"];
            // console.log(to);
            passs = url+'/'+to;
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
        you='';
         for(i =0;i<c;i++){
        
           meet =jsResult["search-results"]["entry"][i]["link"][2]["@href"];
          // console.log(meet);
            you += "<b><a href="+meet+">"+ jsResult["search-results"]["entry"][i]["dc:title"] + "</a></b>,<i> "+jsResult["search-results"]["entry"][i]["prism:publicationName"]+"</i>, <i>"+jsResult["search-results"]["entry"][i]["prism:coverDisplayDate"]+"</i></br>"+ "<p> Number of Citations:"+ jsResult["search-results"]["entry"][i]["citedby-count"]+"</p><br><br>";        }
         document.getElementById("showresultStaff").innerHTML = you;
         //document.getElementById("NumberofArticles").innerHTML = total;
    }else {
        var text = "none" ;
        document.getElementById("showresult").innerHTML = text;
    }
})



function myFunction() {
 var DateFrom = document.getElementById("yearselect").value;
 var DateTo = document.getElementById("yearselectto").value;


    // $("#btn").click( function() {
        xmlhttp.open("GET", url, false);
        xmlhttp.send();
        //console.log(DateFrom)
        
       var url = "reportStaffs.htm?id="+tid+"&name="+name+"&lastname="+lastname+"&year="+DateFrom+"&to="+DateTo;
     // console.log(selector);


        window.location.assign(url);
    // });

}

$(function(){
    
    xmlhttp.open("GET", "user.php", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            var sss = JSON.parse(this.responseText);
            console.log(sss);
            document.getElementById("user").innerHTML = sss;
            
        }
    }
    
    
})