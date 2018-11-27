<?php 
$conn = mysqli_connect("localhost","root", "", "staffcoc");
$sql = "DELETE FROM `staffcoc` WHERE 'staffName'=0";
$result = mysqli_query($conn, $sql);

?>