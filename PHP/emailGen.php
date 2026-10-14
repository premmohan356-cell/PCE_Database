<?php

$mailres=mail("coursewithprabhat@gmail.com","Request for Another Party Sir","Welcome To Pce We Have arrange a New Party For all of us","From:premmohan356@gmail.com");
if($mailres){
    echo "Mail Has Sent";
}else{
    echo "Mail Has Not Sent";
}



?>