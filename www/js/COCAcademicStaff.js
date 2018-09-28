$(function(){

    var xmlhttp = new XMLHttpRequest();
    var url ='https://staffcoc.000webhostapp.com/db.json';
    xmlhttp.open("GET", url, false);
    xmlhttp.send();
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
    {
         var result = xmlhttp.responseText;
         var jsResult = JSON.parse(result);
         
         var c = jsResult["staffcoc"].length;
         var r = "";
         var staffId ="";
         for(i =0;i<c;i++){
            staffId += i+1 + jsResult["staffcoc"][i]["id"];

              r += i+1 +". <i>"+ jsResult["staffcoc"][i]["position"] + "</i> <i> "+jsResult["staffcoc"][i]["staffName"]+"</i> <i>"+jsResult["staffcoc"][i]["staffLastName"]+"</i></br>";
         }
        
        
         document.getElementById("show").innerHTML = r;
    }
})