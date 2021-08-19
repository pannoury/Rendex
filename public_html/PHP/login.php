<?php
    include "config.php";

    $username = $conn->real_escape_string($_GET['username']);
    $password = $conn->real_escape_string($_GET['password']);

    if(isset($_GET['username']) && isset($_GET['password'])){
        $sql = "SELECT * FROM Accounts WHERE username='$username' AND password='$password'";
        $result = mysqli_query($conn,$sql);
        $row = mysqli_fetch_array($result);
    
        if(mysqli_num_rows($result) == 1){
            $id = $row['accountId'];
            $role = $row['role'];
            $_SESSION['id'] = $id;
            $matchid = 1;
            $results = array(
                0 => $matchid,
                1 => $id,
                2 => $username,
                3 => $password,
                4 => $role,
            );
            echo (json_encode($results));
        }
        else{
            $username = $conn->real_escape_string($_GET['username']);
            $password = $conn->real_escape_string($_GET['password']);
    
            $sql = "SELECT * FROM Accounts WHERE username='$username'";
            $result = mysqli_query($conn,$sql);
            $row = mysqli_fetch_array($result);
        
            if(mysqli_num_rows($result) == 1){
                $hash = $row['password'];
                if(password_verify($password, $hash)){
                    $id = $row['accountId'];
                    $role = $row['role'];
                    $_SESSION['id'] = $id;
                    $matchid = 1;
                    $results = array(
                        0 => $matchid,
                        1 => $id,
                        2 => $username,
                        3 => $password,
                        4 => $role,
                    );
                    echo (json_encode($results));
                }
                else{
                    $matchid = 0;
                    $results = array(
                        0 => $matchid,
                        1 => $id,
                        2 => $username,
                        3 => $password,
                    );
                    echo (json_encode($results));
                }
            }
            else{
                $matchid = 0;
                $results = array(
                    0 => $matchid,
                    1 => $id,
                    2 => $username,
                    3 => $password,
                );
                echo (json_encode($results));
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