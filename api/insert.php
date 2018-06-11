<?php 

$data = json_decode(file_get_contents("php://input"));
include_once "db.php";

$sql = "INSERT INTO employee(`name`, position, department, salary) VALUES ('$data->name', '$data->position', '$data->department', '$data->salary')";
echo $sql;

if(isset($data->name)){
    $query = $conn->query($sql);
}

$conn->close();


?>