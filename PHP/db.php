<?php
$db=new mysqli("localhost","root","","pce_drive");
if($db->connect_error){
    echo "Not connected";
}


?>