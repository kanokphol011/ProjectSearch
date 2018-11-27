<?php 
$conn = mysqli_connect("localhost","root", "", "staffcoc");
$sql = "SELECT * FROM staffcoc";
$result = mysqli_query($conn, $sql);


while ($row = mysqli_fetch_assoc($result))
{
    $data[] = $row;
}

echo json_encode($data);
?>