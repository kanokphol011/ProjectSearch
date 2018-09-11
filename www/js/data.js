//Window.SearchB = {

    function searchB() {
   // location.href = "result.htm";
    var x, text, y;
    x = document.getElementById("searchAuthorsName").value;
    y = document.getElementById("searchAuthorLastName").value;
    z = document.getElementById("affiliation").value;
    // var t = document.getElementById("users").value;
    // document.getElementById("demo").innerHTML = t;
    
  
    var url = 'https://api.elsevier.com/content/search/author?query=authlast('+y+')%20and%20authfirst('+x+')%20and%20affil('+z+')&apiKey=7f59af901d2d86f78a1fd60c1bf9426a';
    
    localStorage.setItem("url");
        // $.ajax({
    //     url: url ,
    //     type: 'GET',
    //     dataType :  'json',
        
    //    success : function (data) {
    //        var x = data
    //       console.log(x['search-results']);
    //      var c = (x['search-results'].entry[0]['preferred-name'].surname);
    //      console.log(c);
    //     // window.location.href='result.htm';
        
    //     //document.getElementsById("showresult").innerHTML = window.location.search;
        
    //    }
   
    // });
    // console.log(url);  

} 
//}



        
  
    
   

