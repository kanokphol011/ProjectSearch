
 function collectJSON(){
 var xmlhttp = new XMLHttpRequest();
 var all = document.getElementById("searchAll").value;
 var url = 'https://api.elsevier.com/content/search/scopus?query=('+all+')&apiKey=185547eee67ed06e5e817a0f227d23fe';
 
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
	  console.log(r);
 	
	  document.getElementById("show").innerHTML = r;
	  
	  
 }
}
 