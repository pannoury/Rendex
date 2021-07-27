<?php
    include "config.php";

    $id = $conn->real_escape_string($_GET['userid']);
    $role = $conn->real_escape_string($_GET['role']);
    
    if($role1 = 1){
        $sql = "SELECT * FROM Individuals WHERE accountId='$id'";
        $result = mysqli_query($conn,$sql);
        $row = mysqli_fetch_array($result);
        $img = $row['profilepicture'];
        if(mysqli_num_rows($result) > 0){
            if($img == ""){
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
            else{
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
                    9 => $img
                );
                echo (json_encode($results));
            }

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
    else if($role1 = 2){
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
    mysqli_close($conn);
?>