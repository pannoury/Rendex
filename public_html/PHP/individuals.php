<?php
    include "config.php";

    $id = $conn->real_escape_string($_POST['userId']);
    $email1 = $conn->real_escape_string($_POST['email']);
    $role = $conn->real_escape_string($_POST['role']);

    if($role1 = 1){
        $sql = "SELECT * FROM Individuals WHERE accountId='$id'";
        $result = mysqli_query($conn,$sql);
        $row = mysqli_fetch_array($result);
        if(mysqli_num_rows($result) > 0){
            $firstName = $row['firstname'];
            $lastName = $row['lastname'];
            $email = $row['email'];
            $personNumber = $row['personnumber'];
            $streetAdress = $row['streetadress'];
            $streetNumber = $row['streetnumber'];
            $zipCode = $row['zipcode'];
            $matchid = 1;
            $results = array(
                0 => $matchid,
                1 => $firstName,
                2 => $lastName,
                3 => $email,
                4 => $personNumber,
                5 => $streetAdress,
                6 => $streetNumber,
                7 => $zipCode,
            );
            echo (json_encode($results));
        }
        else{
            $firstName = $row['firstname'];
            $lastName = $row['lastname'];
            $email = $row['email'];
            $personNumber = $row['personnumber'];
            $streetAdress = $row['streetadress'];
            $streetNumber = $row['streetnumber'];
            $zipCode = $row['zipcode'];
            $matchid = 0;
            $_SESSION['id'] = $id;
            $results = array(
                0 => $matchid,
            );
            echo $role;
            echo (json_encode($results));
        }
    }
    else if($role1 == 2){

    }
    mysqli_close($conn);
?>