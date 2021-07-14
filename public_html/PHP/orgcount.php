<?php

    include 'config.php';

    $sql = "SELECT * FROM Accounts WHERE role='2' OR role='3'";
    $result = mysqli_query($conn,$sql);    
    if(mysqli_num_rows($result) > 0){
        $hits = mysqli_num_rows($result);
        $matchid = 1;
        $results = array(
            0 => $matchid,
            1 => $hits,
        );
        echo (json_encode($results));
    }
    else{
        $matchid = 0;
        $results = array(
            0 => $matchid,
        );
        echo (json_encode($results));
    }

    mysqli_close($conn);
?>