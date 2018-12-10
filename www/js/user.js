
$(function(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "user.php", true);
    xmlhttp.send();

    xmlhttp.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            var sss = JSON.parse(this.responseText);
            //console.log(sss);
            document.getElementById("userD").innerHTML = sss;
            
        }
    }
    
    
})
