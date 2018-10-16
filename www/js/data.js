// function searchB() {
    
//     var x, text, y;
//     x = document.getElementById("searchAuthorsName").value;
//     y = document.getElementById("searchAuthorLastName").value;
//     z = document.getElementById("affiliation").value;

//     var url = 'https://api.elsevier.com/content/search/author?query=authlast('+y+')%20and%20authfirst('+x+')%20and%20affil('+z+')&apiKey=7f59af901d2d86f78a1fd60c1bf9426a';
//    // console.log(url);
 
//     $.ajax({
//         url: url ,
//         type: 'GET',
//         dataType :  'json',
//         //success : onSuccess,
//        //error : onError
//        success : function (data) {
//            var x = data
//           //console.log(data.search-results);
//           console.log(x['search-results'].entry[0]);

//           //window.location.href = "reult.htm?id=" ;
//        }
//     })  
//     // }).then(function (data) {
//     //     var x = data;
//     //    console.log(x.search-results);
// }  

        
        
//     //     var row = data.search-results.entry[0].eid;
//     //    console.log(row);
       
    
   

var express = require('express');
var app = express();

app.get('/',function(req, res){
    res.send('hello, world');

})
app.listen(process.env.PORT || 3000);