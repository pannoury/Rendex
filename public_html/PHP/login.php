<?php
    include "config.php";

    $username = $conn->real_escape_string($_POST['username']);
    $password = $conn->real_escape_string($_POST['password']);

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
        $matchid = 0;
        $results = array(
            0 => $matchid,
            1 => $id,
            2 => $username,
            3 => $password,
        );
        echo (json_encode($results));
    }

    mysqli_close($conn);
?>