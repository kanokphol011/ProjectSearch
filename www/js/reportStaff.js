var xmlhttp = new XMLHttpRequest();
var urlSearchParams = URL.searchParams;
let params = (new URL(document.location)).searchParams;
let tid = params.get("id");
let name = params.get("name");
let lastname = params.get("lastname");
let yearfrom = parseInt(params.get("year")); 
let yearto = parseInt(params.get("to")); 
 $(function(){
    var x ='https://api.elsevier.com/content/search/scopus?query=';
    var y='&apiKey=185547eee67ed06e5e817a0f227d23fe';
    url =x+'AUTHLASTNAME('+lastname+')&authfirst('+name+')&PUBYEAR'
 })
