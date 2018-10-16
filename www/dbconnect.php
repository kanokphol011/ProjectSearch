<?php
//connect to mysql database
$con = mysqli_connect("127.0.0.1", "root", "", "staffcoc") or die("Error " . mysqli_error($con));
?>

<?php
/*$sql = "SELECT staffName,staffLName,position FROM staffcoc.staffcoc";
$result = $con->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "name: " . $row["staffName"]. " - LName: " . $row["staffLName"]. " - Position" . $row["position"]. "<br>";
    }
} else {
    echo "0 results";
}
$sql = "INSERT INTO staffcoc.staffcoc (staffName,staffLName,position)
VALUES ('John2', 'Doe3', 'AJ.')";
if ($con->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $con->error;
}
$con->close();
if (isset($_POST['signup'])) {
    $name = mysqli_real_escape_string($con, $_POST['name']);
    $lname = mysqli_real_escape_string($con, $_POST['lname']);
    $pos = mysqli_real_escape_string($con, $_POST['pos']);
    $sql = "INSERT INTO staffcoc.staffcoc (staffName,staffLName,position)
    VALUES ('" . $name . "', '" . $lname . "', '" . $pos . "')";
    if ($con->query($sql) === TRUE) {
    echo "New record created successfully";
    } else {
    echo "Error: " . $sql . "<br>" . $con->error;
    }
}
$con->close();
?>
<form role="form" action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" name="signupform">
<legend>Sign Up</legend>
<div class="form-group">
    <label for="name">Name</label>
    <input type="text" name="name" placeholder="Enter Full Name"  class="form-control" /> 
</div>
<div class="form-group">
    <label for="name">LastName</label>
    <input type="text" name="lname" placeholder="Enter Full Name"  class="form-control" /> 
</div>
<div class="form-group">
    <label for="name">Position</label>
    <input type="text" name="pos" placeholder="Enter Full Name"  class="form-control" /> 
</div>
<div class="form-group">
		<input type="submit" name="signup" value="Sign Up" class="btn btn-primary" />
</div>
</form>
*/
?>