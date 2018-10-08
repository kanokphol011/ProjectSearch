var xmlhttp = new XMLHttpRequest();
var urlSearchParams = URL.searchParams;
let params = (new URL(document.location)).searchParams;
let tid = params.get("id");
let name = params.get("name");
let lastname = params.get("lastname");
let yearfrom = parseInt(params.get("year")); 
let yearto = parseInt(params.get("to"));
var maxCite, numJor, numPro;
var numCitation = new Array;
var artType = new Array;
var stockData = new Array;
var numYearB = new Array;


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
    url =x+name+'%20AND%20'+lastname+')AND%20PUBYEAR%20>%20'+yearfrom+'%20AND%20PUBYEAR%20<%20'+(yearto+1)+''+y;

    console.log(url);
    xmlhttp.open("GET", url, false);
    xmlhttp.send();
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
    {
        var result = xmlhttp.responseText;
        var jsResult = JSON.parse(result);
        numJor=0;
        numPro=0;
       
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
                }
            
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
                data: [numJor, numPro],
                backgroundColor: [
                    'rgba(255, 99, 105, 0.6)',
                    'rgba(100, 59, 255, 0.6)'
                ]
            }],
        
            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: [
                'Journal',
                'Conference Proceeding',
            ],
            
        },
    
        // Configuration options go here
        options: {}
    });
 })

 document.getElementById("saveA").addEventListener("click",function(){
    chart.exportChart({format: "jpg"});
}); 
/*
 function exportToCsv(filename, rows) {
    var processRow = function (row) {
        var finalVal = '';
        for (var j = 0; j < row.length; j++) {
            var innerValue = row[j] === null ? '' : row[j].toString();
            if (row[j] instanceof Date) {
                innerValue = row[j].toLocaleString();
            };
            var result = innerValue.replace(/"/g, '""');
            if (result.search(/("|,|\n)/g) >= 0)
                result = '"' + result + '"';
            if (j > 0)
                finalVal += ',';
            finalVal += result;
        }
        return finalVal + '\n';
    };

    var csvFile = '';
    for (var i = 0; i < rows.length; i++) {
        csvFile += processRow(rows[i]);
    }

    var blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, filename);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", filename);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}*/
/*$(function(){
    var button = document.getElementById('saveA');
    button.addEventListener('click', function (chart) {
    var dataURL = canvas.toDataURL('image/png');
    button.href = dataURL;
});
})*/
/*
$(function(){
    
    var x ='https://api.elsevier.com/content/search/scopus?query=ALL(';
    var y='&apiKey=185547eee67ed06e5e817a0f227d23fe';
    url =x+name+'%20AND%20'+lastname+')AND%20PUBYEAR%20>%20'+yearfrom+'%20AND%20PUBYEAR%20<%20'+yearto+''+y;
    console.log('get success');
    xmlhttp.open("GET", url, false);
    xmlhttp.send();
    
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200){

        var result = xmlhttp.responseText;
        var jsResult = JSON.parse(result);
        var datastaff = jsResult["search-results"]["entry"].length;
        //INPUT DATA IN ARRAY TO DOWNLOAD
        for(i =0;i<datastaff;i++){
            stockData[i] = name+' '+lastname+'","'+ jsResult["search-results"]["entry"][i]["dc:title"]+'","'+jsResult["search-results"]["entry"][i]["prism:aggregationType"]; 

        }
    }else {
        var text = "none" ;
        document.getElementById("showresult").innerHTML = text;
    }
})
/* 
 function download_csv() {

    console.log(stockData);

    var csv = 'Name,Title,Type\n';
    stockData.forEach(function(row) {
            csv += row.join(',');
            csv += "\n";
    });
 
    console.log(csv);
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'people.csv';
    hiddenElement.click();
}
*/

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
    //result += keys.join(columnDelimiter);
    //result += lineDelimiter;

    data.forEach(function(item) {
        ctr = 0;
        keys.forEach(function(key) {
            if (ctr >= 0) 
          //  result += columnDelimiter;

            result += item[key];
            ctr++;
           
        });    
        result += lineDelimiter;
        console.log(result);
    });

    return result;
    
}

function downloadCSV(args) {

    var stockData = new Array;
    var x ='https://api.elsevier.com/content/search/scopus?query=ALL(';
    var y='&apiKey=185547eee67ed06e5e817a0f227d23fe';
    url =x+name+'%20AND%20'+lastname+')AND%20PUBYEAR%20>%20'+yearfrom+'%20AND%20PUBYEAR%20<%20'+yearto+''+y;
    console.log('get success');
    xmlhttp.open("GET", url, false);
    xmlhttp.send();
    
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200){

        var result = xmlhttp.responseText;
        var jsResult = JSON.parse(result);
        var datastaff = jsResult["search-results"]["entry"].length;
        //INPUT DATA IN ARRAY TO DOWNLOAD
        for(i =0;i<datastaff;i++){
            stockData[i] = name+' '+lastname+'","'+ jsResult["search-results"]["entry"][i]["dc:title"]+'","'+jsResult["search-results"]["entry"][i]["prism:aggregationType"]; 
            
        }
    }else {
        var text = "none" ;
        document.getElementById("showresult").innerHTML = text;
    }
    console.log(stockData);
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

// var stockDataa = [
//     {
//         Symbol: "AAPL",
//         Company: "Apple Inc.",
//         Price: "132.54"
//     },
//     {
//         Symbol: "INTC",
//         Company: "Intel Corporation",
//         Price: "33.45"
//     },
//     {
//         Symbol: "GOOG",
//         Company: "Google Inc",
//         Price: "554.52"
//     },
// ];
