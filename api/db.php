<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-headers: Origin, X-Requested-With, Content-Type, Accept");

$serverName = "localhost";
$username   = "root";
$password   = "";
$dbname     = "angular";
$conn       = new mysqli($serverName, $username, $password, $dbname);



?>