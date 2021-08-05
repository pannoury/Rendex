<?php
    include "config.php";

    $requestid = $conn->real_escape_string($_GET['requestid']);

    if($requestid = 1){ //Individuals
        $personnummer = $conn->real_escape_string($_GET['personnummer']);
        $sql = "SELECT personnumber FROM Individuals WHERE personnumber='$personnummer'";
        $result = mysqli_query($conn,$sql);
        $row = mysqli_fetch_array($result);
        if(mysqli_num_rows($result) > 0){
            $personNumber = $row['personnumber'];
            $matchid = 1;
            $matchid = utf8_encode($matchid);
            $personNumber = utf8_encode($personNumber);
            $results = array(
                0 => $matchid,
                1 => $personNumber,
            );
            echo (json_encode($results));
        }
        else{
            $results = array(
                0 => $matchid,
            );
            echo (json_encode($results));
        }
    }
    else if($requestid = 2){ //Individuals
        $email = $conn->real_escape_string($_GET['username']);
        $sql = "SELECT username FROM Accounts WHERE username='$email'";
        $result = mysqli_query($conn,$sql);
        $row = mysqli_fetch_array($result);
        if(mysqli_num_rows($result) > 0){
            $personNumber = $row['personnumber'];
            $matchid = 1;
            $matchid = utf8_encode($matchid);
            $personNumber = utf8_encode($personNumber);
            $results = array(
                0 => $matchid,
                1 => $personNumber,
            );
            echo (json_encode($results));
        }
        else{
            $matchid = 0;
            $results = array(
                0 => $matchid,
            );
            echo (json_encode($matchid));
        }
    }
    else if($requestid == 3){ //create the new account
        
    }

    mysqli_close($conn);
?>