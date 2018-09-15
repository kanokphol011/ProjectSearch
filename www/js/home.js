 function collectJSON(){
 var xmlhttp = new XMLHttpRequest();
 var all = document.getElementById("searchAll").value;
 var url = 'https://api.elsevier.com/content/search/scopus?query=AUTHOR-NAME('+all+')&apiKey=c1012bdfeae663cbf772fda975c25fd3';
 
 xmlhttp.open("GET", url, false);
 xmlhttp.send();
 if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
 {
 	 var result = xmlhttp.responseText;
 	 var jsResult = JSON.parse(result);
 	 
 	 var c = jsResult["search-results"]["entry"].length;
 	 var r = "";
 	 for(i =0;i<c;i++){
 	 	 r += i+1 +". <b>"+ jsResult["search-results"]["entry"][i]["dc:title"] + "</b>,<i> "+jsResult["search-results"]["entry"][i]["prism:publicationName"]+"</i>, "+jsResult["search-results"]["entry"][i]["prism:coverDisplayDate"]+"</br>";
 	 }
 	
 	
 	 document.getElementById("show").innerHTML = r;
 }
}
