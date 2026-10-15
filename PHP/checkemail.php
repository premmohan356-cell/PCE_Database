<?php
require("db.php");
$server=$_SERVER["REQUEST_METHOD"];
if($server==="POST"){
    $email=$_POST["email"];
    $myquery="SELECT Email FROM userdetails WHERE Email='$email'";
    $res=$db->query($myquery);
    if($res->num_rows){
        echo "Email has Found";
    }else{
        echo "Email Has Not Found";
    }
}


?>