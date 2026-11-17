<?php
require("./db.php");
session_start();
$server=$_SERVER["REQUEST_METHOD"];
if($server=="POST"){
    $email=$_POST["email"];
    $pass=$_POST["pass"];
    $emailquery="SELECT * FROM userdetails WHERE Email='$email';";
    if($db->query($emailquery)->num_rows){
        $loginquery="SELECT * FROM userdetails WHERE Email='$email' AND Password='$pass';";
        if($db->query($loginquery)->num_rows){
            echo "Login Successfully";
            $_SESSION["username"]=$email;
        }else{
            echo "Password is Wrong";
        }
    }else{
            echo "Email Not Found";
        }
}




?>