<?php
require("db.php");
$user=$_POST["username"];
$pass=$_POST["password"];
$email=$_POST["email"];
if($_SERVER["REQUEST_METHOD"]==="POST"){
    $myquery="SELECT Email FROM userdetails WHERE Email='$email'";
    $res=$db->query($myquery);
    if(!($res->num_rows)){
        $v_code=[];
        for($i=0;$i<6;$i++){
            $randInt=rand(0,9);
            $v_code[]=$randInt;
        }
        $strv_code=implode($v_code);
        echo $strv_code;
        // print_r($v_code);
        
    }
}





?>