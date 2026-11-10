<?php
require("./db.php");
$server=$_SERVER["REQUEST_METHOD"];
if($server=="POST"){
    $emailId=$_POST["email"];
    $V_CODE=$_POST["v_code"];
    $myquery="SELECT * FROM userdetails WHERE Email=TRIM('$emailId') AND Activate_Code=TRIM($V_CODE);";
    $res=$db->query($myquery);
    if($res->num_rows){
        $updateQuery="UPDATE userdetails SET Status='Active' WHERE Email=TRIM('$emailId');";
        if($db->query($updateQuery)){
            echo "Verified User";
        }
    }else{
        echo "Verification Failed";
    }

}

?>