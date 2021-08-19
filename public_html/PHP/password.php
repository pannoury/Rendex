<?php
    include "config.php";

    $requestIdGet = $conn->real_escape_string($_GET['requestid']);
    $requestIdPost = $conn->real_escape_string($_POST['requestid']);

    if(isset($_GET['requestid'])){

    }
    else if(isset($_POST['requestid'])){
        if($requestIdPost == 1){
            if(isset($_POST['username']) && isset($_POST['password'])){
                $user = $conn->real_escape_string($_POST['username']);
                $password = $conn->real_escape_string($_POST['password']);

                $password = password_hash($password, PASSWORD_DEFAULT);

                $sql = "UPDATE Accounts SET password='$password' WHERE username='$user'";
    
                $result = $conn->query($sql);
                echo json_encode($conn->affected_rows);
            }
            else{
                echo 0;
            }
        }
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