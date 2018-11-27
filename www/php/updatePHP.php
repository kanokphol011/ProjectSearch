

<?php
$a = $_GET['name'];
$b = $_GET['lastname'];
$c = $_GET['article'];
// $d = $_GET['articleType'];
// $e = $_GET['pupdate'];
// $f = $_GET['citation'];

$con = mysqli_connect("localhost","root", "", "staffcoc");
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"ajax_demo");
//$sql="SELECT * FROM user WHERE id = '".$q."'";
$sql="INSERT INTO staffcoc (staffName,staffLName,article/*,articleType,pupdate,cite*/) VALUES ('".$a."','".$b."','".$c."')";
$result = mysqli_query($con,$sql);

?>
