<?php
require("./db.php");
$server=$_SERVER["REQUEST_METHOD"];
if($server=="POST"){
    $emailId=$_POST["email"];
    // $emailId="raji78@gmail.com";
    $V_CODE=$_POST["v_code"];
    // $V_CODE="012562";
    $myquery="SELECT * FROM userdetails WHERE Email=TRIM('$emailId') AND Activate_Code=TRIM('$V_CODE');";
    $res=$db->query($myquery);
    if($res->num_rows){
        $updateQuery="UPDATE userdetails SET Status='Active' WHERE Email=TRIM('$emailId');";
        if($db->query($updateQuery)){
            $dir_query="SELECT * FROM userdetails WHERE Email='$emailId';";
            $res=$db->query($dir_query);
            while($datum=$res->fetch_assoc()){
                // Table Creation................................
                $IDs=$datum['Id'];
                $tableName="User_$IDs";
                $tablequery="CREATE TABLE $tableName(ID INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,Item_Name VARCHAR(100),Item_Size VARCHAR(100),DateTime DATETIME DEFAULT CURRENT_TIMESTAMP); ";
                // CREATE TABLE User_44(ID INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,Item_Name VARCHAR(100),Item_Size VARCHAR(100),DateTime DATETIME DEFAULT CURRENT_TIMESTAMP);
                // echo $tablequery;
                $table_res=$db->query($tablequery);
                if($table_res){
                    echo "Verified User";
                    // Making directories......................................
                    mkdir("../Profile/DATA/$tableName");
                    }
            }
           
        }
    }else{
        echo "Verification Failed";
    }

}

?>