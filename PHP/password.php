<?php
$elem="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#%^&*()_+-=[]{};:',.<>/?`~
";
    $password=[];

$length=strlen($elem)-1;
for($i=0;$i<7;$i++){
    $randno=rand(0,$length);
    // echo $elem[$randno];
   $password[]=$elem[$randno];
//    print_r($password);
}
$pass=implode($password);
echo $pass;

?>