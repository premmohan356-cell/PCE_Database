<?php
require("db.php");
$server=$_SERVER["REQUEST_METHOD"];
// $server="POST";
if($server==="POST"){
    $email=$_POST["email"];
    // $email="prem@gmail.com";

    $myquery="SELECT Email FROM userdetails WHERE Email='$email'";
    // echo $myquery;
    $res=$db->query($myquery);
    // print_r($res);
    if($res->num_rows){
        echo "Email has Found";
    }else{
        echo "Email Has Not Found";
    }
}


?>