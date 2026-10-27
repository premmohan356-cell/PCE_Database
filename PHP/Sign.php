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
        
        $sendEmail=mail($email,"Verfication Code For PCE Drive","$user, your Verification is $strv_code.
        Please do Not share it with anyone.
        Thanks For the Team of PCE_DRIVE.");
        if($sendEmail){
        $newquery="INSERT INTO userdetails(Full_Name,Email,Password,Activate_Code)VALUES('$user','$email','$pass','$strv_code');";
        if($db->query($newquery)){
            echo "User Data Saved";
        }else{
            echo "User Data Not Saved";
        }
        }else{
            echo "EmailId Is wrong";
        }
       
        
    }
}





?>