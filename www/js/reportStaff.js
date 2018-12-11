    var xmlhttp = new XMLHttpRequest();
var urlSearchParams = URL.searchParams;
let params = (new URL(document.location)).searchParams;
let tid = params.get("id");
let name = params.get("name");
let lastname = params.get("lastname");
let yearfrom = parseInt(params.get("year")); 
let yearto = parseInt(params.get("to"));
var maxCite, numJor, numPro, numBook;
var numCitation = new Array;
var artType = new Array;
var stockData = new Array;
var numYearB = new Array;
var authorAllurl = new Array;
var authorAll = new Array;
var authorSimple = new Array;
var titleAll = new Array;
var checkStockData = new Array;
var dataScopusID = new Array;
var stockDatabase = new Array;



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
        
        document.getElementById("namestaff").innerHTML = r+'('+yearfrom+' - '+yearto+')';
    
    }
})

 $(function(){
    for(l=0;l<=(yearto-yearfrom);l++){
        numYearB[l] = 0;
    }   
    var x ='https://api.elsevier.com/content/search/scopus?query=ALL(';
    var y='&apiKey=185547eee67ed06e5e817a0f227d23fe';
    url =x+name+'%20AND%20'+lastname+')AND%20PUBYEAR%20>%20'+(yearfrom-1)+'%20AND%20PUBYEAR%20<%20'+(yearto+1)+''+y;

    if(yearfrom==yearto){
        url =x+name+'%20AND%20'+lastname+')AND%20PUBYEAR%20=%20'+yearfrom+''+y;
    }

    console.log(url);
    xmlhttp.open("GET", url, false);
    xmlhttp.send();
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
    {
        var result = xmlhttp.responseText;
        var jsResult = JSON.parse(result);
        numJor=0;
        numPro=0;
        numBook=0;
       
        var numCite = new Array;
        var datastaff = jsResult["search-results"]["entry"].length;
        for(i =0;i<datastaff;i++){
            // get จำนวนอ้างอิง
            issuse1 = +jsResult["search-results"]["entry"][i]["citedby-count"];
                numCitation[i] = parseInt(issuse1);
                //console.log(numCitation);
                if(i==0){
                    numCite[i] = parseInt(issuse1);
                    maxCite = numCite[i]; 
                }else if(i>0 && i<datastaff){
                    numCite[i] = parseInt(issuse1)+numCite[i-1];
                    maxCite = numCite[i];
                }


            // get  จำนวนArticleในปีนั้น
            issuseYear = jsResult["search-results"]["entry"][i]["prism:coverDate"]+'='+jsResult["search-results"]["entry"][i]["citedby-count"];
                
                var numYearC = new Array;
                    for(k=0;k<=(yearto-yearfrom);k++){
        
                        if(k==0){
                            numYearC[k] = yearfrom;
                            if(issuseYear.includes(numYearC[k])){
                                numYearB[k] = numYearB[k]+1;
                                }
                        }else{
                            numYearC[k] = numYearC[k-1]+1;
                            if(issuseYear.includes(numYearC[k])){
                                numYearB[k] = numYearB[k]+1;
                                }     
                        }
                    }
               
                   

            // get ประเภทของงานวิจัย(proceed,journal)
            issuse2 = jsResult["search-results"]["entry"][i]["prism:aggregationType"];
                var ss = toString(issuse2);
                if(issuse2=='Conference Proceeding'){
                    numPro += 1;
                }else if(issuse2=='Journal'){
                    numJor += 1;
                }else if(issuse2=='Book Series'){
                    numBook += 1;
                }


            // title งานวิจัย
            titleAll[i] = jsResult["search-results"]["entry"][i]["dc:title"];

            // scopusID
            var scopusID = jsResult["search-results"]["entry"][i]["dc:identifier"];
            dataScopusID[i] = scopusID.split("SCOPUS_ID:").pop();
            console.log(dataScopusID[i]);
            
        }

        

    }else {
        var text = "none" ;
        document.getElementById("showresult").innerHTML = text;
    }
    document.getElementById("NumberCitations").innerHTML = 'Number of Citation :'+maxCite;

 })

 //กราฟแสดงจำนวนArticle
 $(function(){
    var numYear = new Array;
    for(i=0;i<=(yearto-yearfrom);i++){
        if(i==0){
            numYear[i] = yearfrom;
        }else{
            numYear[i] = numYear[i-1]+1;
        }
    }
    
    var ctx = document.getElementById('showGraphofCitations').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',
    
        // The data for our dataset
        data: {
            labels: numYear,
            datasets: [{
                label:"Number of Articles",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: numYearB,
            }]
        },
    
        // Configuration options go here
        options: {}
    });
    
 })

 //กราฟแสดงประเภทของงานวิจัย
 $(function(){
    var ctx1 = document.getElementById('showGraphofArticles').getContext('2d');
    var chart2 = new Chart(ctx1, {
        // The type of chart we want to create
        type: 'pie',
    
        // The data for our dataset
        data: {
            datasets: [{
                data: [numJor, numPro , numBook],
                backgroundColor: [
                    'rgba(255, 99, 105, 0.6)',
                    'rgba(100, 59, 255, 0.6)',
                    'rgba(50, 150, 200, 0.6)'
                ]
            }],
        
            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
                'Journal',
                'Conference Proceeding',
                'Book Series'
            ],
            
        },
    
        // Configuration options go here
        options: {}
    });
 })


// SAVE กราฟ1
function saveArt() {
    var url_base64 = document.getElementById("showGraphofCitations").toDataURL("image/png");
    
    link1.href = url_base64;

    var url = link1.href.replace(/^data:image\/[^;]/, 'data:application/octet-stream');

}

// SAVE กราฟ2
function saveArtType() {
    var url_base64 = document.getElementById("showGraphofArticles").toDataURL("image/png");
    
    link2.href = url_base64;

    var url = link1.href.replace(/^data:image\/[^;]/, 'data:application/octet-stream');

}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//URLข้อมูลauthorทั้งหมด
$(function(){
    var x ='https://api.elsevier.com/content/search/scopus?query=ALL(';
    var y='&apiKey=185547eee67ed06e5e817a0f227d23fe';
    url =x+name+'%20AND%20'+lastname+')AND%20PUBYEAR%20>%20'+yearfrom+'%20AND%20PUBYEAR%20<%20'+yearto+1+''+y;
    if(yearfrom==yearto){
        url =x+name+'%20AND%20'+lastname+')AND%20PUBYEAR%20=%20'+yearfrom+''+y;
    }
    // console.log('get success');
    xmlhttp.open("GET", url, false);
    xmlhttp.send();
    
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200){

        var result = xmlhttp.responseText;
        var jsResult = JSON.parse(result);
        var datastaff = jsResult["search-results"]["entry"].length;

        //ข้อมูลใน Array ที่เตรียมไว้แปลงเป็น CSV
        for(i =0;i<datastaff;i++){
            authorAllurl[i] = jsResult["search-results"]["entry"][i]["prism:url"];
            // console.log(i+" :"+authorAllurl[i]);
        }
    }else {
        var text = "none" ;
        document.getElementById("showresult").innerHTML = text;
    }
    
 })

 $(function(){
     for(a=0;a<authorAllurl.length;a++){
        var authorSimple = new Array;
        var x =authorAllurl[a];
        var y='?field=authors&apiKey=185547eee67ed06e5e817a0f227d23fe&httpAccept=application%2Fjson';
        url =x+y;
        // console.log(url);
        xmlhttp.open("GET", url, false);
        xmlhttp.send();
        
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
    
            var result = xmlhttp.responseText;
            // console.log(result);
            var jsResult = JSON.parse(result);
            
            var datastaff = jsResult["abstracts-retrieval-response"]["authors"]["author"].length;
            // console.log("///////// :"+datastaff);
    
            //
            for(i =0;i<datastaff;i++){
                
                authorSimple[i] = jsResult["abstracts-retrieval-response"]["authors"]["author"][i]["ce:given-name"]+" "+jsResult["abstracts-retrieval-response"]["authors"]["author"][i]["preferred-name"]["ce:surname"];
                // console.log(i+" :"+authorAll[i]);
                if(datastaff == 1){
                    authorAll[a] = authorSimple[i];
                }
                else if(datastaff == 2){
                    if (i == 0){
                        authorAll[a] = authorSimple[i]+", ";
                    }
                    else if(i > 0 && i < datastaff){
                            authorAll[a] += authorSimple[i];
                    }
                }
                else if (datastaff > 2){
                    if (i == 0){
                        authorAll[a] = authorSimple[i]+", ";
                    }
                    else if(i > 0 && i != datastaff-1){
                        authorAll[a] += authorSimple[i]+", ";
                    }
                    else{
                        authorAll[a] += authorSimple[i];
                    }
                }
                
                // document.getElementById("ShowAuthor").innerHTML = "<tr><td>"+titleAll[i]+"</td><td>"+authorAll[i]+"</td></tr>";
                // var table = document.getElementById("ShowAuthor");
                // var row = table.insertRow(1);
                // var cell1 = row.insertCell(0);
                // var cell2 = row.insertCell(1);
                // cell1.innerHTML = titleAll[i];
                // cell2.innerHTML = authorAll[i];
            }

            // console.log(authorAll[a]);

        }else {
            var text = "none" ;
            document.getElementById("showresult").innerHTML = text;
        }
        
    }
    
 })

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//แปลงข้อมูลเป็นCSV
 function convertArrayOfObjectsToCSV(args) {
    var result, ctr, keys, columnDelimiter, lineDelimiter, data;

    data = args.data || null;
    if (data == null || !data.length) {
        return null;
    }

    columnDelimiter = args.columnDelimiter || ',';
    lineDelimiter = args.lineDelimiter || '\n';
    keys = Object.keys(data[0]);

    result = '';
    data.forEach(function(item) {
        ctr = 0;
        keys.forEach(function(key) {
            if (ctr > 0) result += columnDelimiter;

            result += item[key];
            ctr++;
        });
        result += lineDelimiter;
    });
    return result;
}

// DOWNLOAD FILE
function downloadCSV(args) {

    var stockData = new Array;
    var x ='https://api.elsevier.com/content/search/scopus?query=ALL(';
    var y='&apiKey=185547eee67ed06e5e817a0f227d23fe';
    url =x+name+'%20AND%20'+lastname+')AND%20PUBYEAR%20>%20'+yearfrom+'%20AND%20PUBYEAR%20<%20'+yearto+1+''+y;
    if(yearfrom==yearto){
        url =x+name+'%20AND%20'+lastname+')AND%20PUBYEAR%20=%20'+yearfrom+''+y;
    }
    console.log('get success');
    xmlhttp.open("GET", url, false);
    xmlhttp.send();
    console.log(authorAll);
    
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200){

        var result = xmlhttp.responseText;
        var jsResult = JSON.parse(result);
        var datastaff = jsResult["search-results"]["entry"].length;

        //ข้อมูลใน Array ที่เตรียมไว้แปลงเป็น CSV
        for(i =0;i<datastaff;i++){
            stockData[i] = [authorAll[i], 
                            jsResult["search-results"]["entry"][i]["dc:title"],
                            jsResult["search-results"]["entry"][i]["prism:coverDate"], 
                            jsResult["search-results"]["entry"][i]["prism:aggregationType"],
                            "citation : "+ jsResult["search-results"]["entry"][i]["citedby-count"]
                            ]           
                           ;
        }
        console.log(stockData);
    }else {
        var text = "none" ;
        document.getElementById("showresult").innerHTML = text;
    }
    //console.log(stockData);
    var data, filename, link;

    var csv = convertArrayOfObjectsToCSV({
        data: stockData
    });
    if (csv == null) return;

    filename = args.filename || 'export.csv';

    if (!csv.match(/^data:text\/csv/i)) {
        csv = 'data:text/csv;charset=utf-8,' + csv;
    }
    data = encodeURI(csv);

    link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', filename);
    link.click();
}





// $(function(){
//     if(showData() !== null){
//         console.log("6789");
//     }
//     if(showData() === 'undefined'){
//         console.log("7777");
//     }

// })

$(function(){
    var x ='https://api.elsevier.com/content/search/scopus?query=ALL(';
    var y='&apiKey=185547eee67ed06e5e817a0f227d23fe';
    url =x+name+'%20AND%20'+lastname+')AND%20PUBYEAR%20>%20'+yearfrom+'%20AND%20PUBYEAR%20<%20'+yearto+1+''+y;
    if(yearfrom==yearto){
        url =x+name+'%20AND%20'+lastname+')AND%20PUBYEAR%20=%20'+yearfrom+''+y;
    }
    xmlhttp.open("GET", url, false);
    xmlhttp.send();
    
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200){

        var result = xmlhttp.responseText;
        var jsResult = JSON.parse(result);
        var datastaff = jsResult["search-results"]["entry"].length;
        for(i =0;i<datastaff;i++){
            
            stockDatabase[i] = {ID : dataScopusID[i],
                            Name: name,
                            LName: lastname, 
                            Article: jsResult["search-results"]["entry"][i]["dc:title"],
                            PublicationYear: jsResult["search-results"]["entry"][i]["prism:coverDate"], 
                            ArticleType: jsResult["search-results"]["entry"][i]["prism:aggregationType"], 
                            Citation: jsResult["search-results"]["entry"][i]["citedby-count"]
                           };
        }
        
    }else {
        var text = "none" ;
        document.getElementById("showresult").innerHTML = text;
    }

    
    xmlhttp.abort();
})


function addData() {

     console.log(stockDatabase);
    //  console.log(checkStockData); 
    
    var myJsonString = JSON.stringify(stockDatabase);
    xmlhttp.onreadystatechange = respond;
    xmlhttp.open("POST", "php/test.php", true);
    xmlhttp.send(myJsonString);

    function respond() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById('showResult').innerHTML = xmlhttp.responseText;
        }
    }
    // xmlhttp.abort();
}

$(function(){
    
    xmlhttp.open("GET", "php/getData.php", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            var sss = JSON.parse(this.responseText);
            console.log(sss);
            var html = "";
            for (var a = 0; a < sss.length; a++)
            {
                
                checkStockData[a] = {ID: sss[a].ID,
                                    Name: sss[a].staffName,
                                    LName: sss[a].staffLName, 
                                    Article: sss[a].article,
                                    PublicationYear: sss[a].pupdate, 
                                    ArticleType: sss[a].articleType, 
                                    Citation: sss[a].cite
                                    };                    
            }
            
        }
    }
    console.log(checkStockData);
    // return checkStockData;
    
})

function deleteData(){
    xmlhttp.open("GET", "php/deleteData.php", true);
    xmlhttp.send();
    console.log('555');
}

$(function(){
        // console.log(dataScopusID);
})

