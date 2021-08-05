<?php

    include 'config.php';
    $requestId = $conn->real_escape_string($_GET['requestid']);

    if($requestId == 1){
        $sql = "SELECT * FROM Accounts WHERE role='2' OR role='3'";
        $result = mysqli_query($conn,$sql);
        indexCount($result);
    }
    else if($requestId == 2){
        $sql = "SELECT * FROM Articles";
        $result = mysqli_query($conn,$sql);
        indexCount($result);
    }
    else if($requestId == 3){
        $sql = "SELECT * FROM finished-articles";
        $result = mysqli_query($conn,$sql);
        indexCount($result);
    }

    function indexCount($result){
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
    }

    mysqli_close($conn);
?>