<?php 

include "db.php";
$sql = "SELECT * FROM employee ORDER BY _id DESC";
$result = $conn->query($sql);

if($result->num_rows > 0){
    // output data each row
    $data = array();

    while($row = $result->fetch_assoc()){
        $data[] = $row;
    }

    echo json_encode($data);
}else{
    echo "0";

}

$conn->close();

?>