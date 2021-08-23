<?php
    include "config.php";

    $id = $conn->real_escape_string($_GET['userid']);
    $role = $conn->real_escape_string($_GET['role']);
    $requestid = $conn->real_escape_string($_GET['requestid']);
    
    if($role == 1){ //Individuals
        $sql = "SELECT * FROM Individuals WHERE accountId='$id'";
        $result = mysqli_query($conn,$sql);
        $row = mysqli_fetch_array($result);
        if(mysqli_num_rows($result) > 0){

            $firstName = utf8_encode($row['firstname']);
            $lastName = utf8_encode($row['lastname']);
            $email = utf8_encode($row['email']);
            $personNumber = utf8_encode($row['personnumber']);
            $streetAdress = utf8_encode($row['streetadress']);
            $streetNumber = utf8_encode($row['streetnumber']);
            $zipCode = utf8_encode($row['zipcode']);
            $phonenumber = utf8_encode($row['phonenumber']);
            $description = utf8_encode($row['description']);
            $website = $row['website'];
            $img = $row['profilepicture'];

            $matchid = 1;
            $matchid = utf8_encode($matchid);
            $results = array(
                0 => $matchid,
                1 => $firstName,
                2 => $lastName,
                3 => $email,
                4 => $personNumber,
                5 => $streetAdress,
                6 => $streetNumber,
                7 => $zipCode,
                8 => $phonenumber,
                9 => $img,
                10 => $description,
                11 => $website
            );
            echo (json_encode($results));
        }
        else{
            $sql = "SELECT * FROM Individuals WHERE accountId='$id'";
            $result = mysqli_query($conn,$sql);
            $row = mysqli_fetch_array($result);
            $matchid = utf8_encode($matchid);
            $results = array(
                0 => $matchid,
            );
            echo (json_encode($results));
        }
    }
    else if($role == 2){ // Organisation
        $sql = "SELECT * FROM organisations WHERE accountId='$id'";
        $firstName = $row['firstname'];
        $lastName = $row['lastname'];
        $email = $row['email'];
        $personNumber = $row['personnumber'];
        $streetAdress = $row['streetadress'];
        $streetNumber = $row['streetnumber'];
        $zipCode = $row['zipcode'];
        $phonenumber = $row['phonenumber'];
        $matchid = 1;
        $matchid = utf8_encode($matchid);
        $firstName = utf8_encode($firstName);
        $lastName = utf8_encode($lastName);
        $email = utf8_encode($email);
        $personNumber = utf8_encode($personNumber);
        $streetAdress = utf8_encode($streetAdress);
        $streetNumber = utf8_encode($streetNumber);
        $zipCode = utf8_encode($zipCode);
        $phonenumber = utf8_encode($phonenumber);
        $results = array(
            0 => $matchid,
            1 => $firstName,
            2 => $lastName,
            3 => $email,
            4 => $personNumber,
            5 => $streetAdress,
            6 => $streetNumber,
            7 => $zipCode,
            8 => $phonenumber,
        );
        echo (json_encode($results));
    }
    else if($requestid == 1 && $role == 0){
        $sql = "SELECT * FROM Accounts WHERE accountId='$id'";
        $result = mysqli_query($conn,$sql);
        $row = mysqli_fetch_array($result);
        $role = $row['role'];
        $username = $row['username'];
        $createdat = $row['created_at'];
        $matchid = 1;
        $role = utf8_encode($role);
        $username = utf8_encode($username);
        $createdat = utf8_encode($createdat);
        $results = array(
            0 => $matchid,
            1 => $role,
            2 => $username,
            3 => $createdat,
        );
        echo (json_encode($results));
    }
    mysqli_close($conn);
?>