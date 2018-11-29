<?php
$str_json = file_get_contents('php://input'); //($_POST doesn't work here)
$response = json_decode($str_json, true); // decoding received JSON to array



$con = mysqli_connect("localhost","root", "", "staffcoc");
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

 if(is_array($response)){
    $sql="INSERT INTO staffcoc (ID,staffName,staffLName,article,articleType,pupdate,cite) VALUES";
    $valuesArr = array();
    foreach($response as $row){
        $ID = mysql_real_escape_string( $row['ID'] );
        $Name = mysql_real_escape_string( $row['Name'] );
        $LName = mysql_real_escape_string( $row['LName'] );
        $Article = mysql_real_escape_string( $row['Article'] );
        $ArticleType = mysql_real_escape_string( $row['ArticleType'] );
        $PublicationYear = mysql_real_escape_string( $row['PublicationYear'] );
        $Citation = mysql_real_escape_string( $row['Citation'] );
        $valuesArr[] = "('$ID','$Name', '$LName', '$Article','$ArticleType','$PublicationYear','$Citation')";

        // $sqlCheck = "SELECT * FROM staffcoc WHERE   staffName= '$Name' and 
        //                                             staffLName= '$LName' and 
        //                                             article= '$Article' and 
        //                                             articleType= '$ArticleType' and 
        //                                             pupdate= '$PublicationYear' and 
        //                                             cite= '$Citation' ";
        // $result = mysqli_query($con,$sqlCheck);
        // while ($row = mysqli_fetch_assoc($result))
        // {
        // $data[] = $row;
        // }
        // // echo $sqlCheck;

        // mysqli_close($con);
    }

    $sql .= implode(',', $valuesArr);

    $result = mysqli_query($con,$sql);
    mysqli_close($con);
}
echo implode(',',$valuesArr);

// echo '
// <div align="center">
// <h5> Received data: </h5>
// <table border="1" style="border-collapse: collapse;">
//  <tr> <th> TEST</th>
//  <tr>
//  <td> <center> '.implode(',',$valuesArr).'<center></td>
 
//  </tr>
//  </table></div>
//  ';

?>