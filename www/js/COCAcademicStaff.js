var xmlhttp = new XMLHttpRequest();
$(function(){
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
         var pass =""
         for(i =0;i<c;i++){
              staffId += i+1 + jsResult["staffcoc"][i]["id"];
              passs = url+'/'+staffId;
              r += "<a href="+'"resultStaff.htm?id='+jsResult["staffcoc"][i]["id"]+'"'+">"+"<i>"+ jsResult["staffcoc"][i]["position"] + " "+jsResult["staffcoc"][i]["staffName"]+" "+jsResult["staffcoc"][i]["staffLastName"]+"</i></a></br>";
         }
        document.getElementById("show").innerHTML = r;
    }
})


