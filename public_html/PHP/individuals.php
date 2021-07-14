<?php
    include "config.php";

    $id = $conn->real_escape_string($_GET['userid']);
    $role = $conn->real_escape_string($_GET['role']);

    if($role1 = 1){
        $sql = "SELECT * FROM Individuals WHERE accountId='$id'";
        $result = mysqli_query($conn,$sql);
        $row = mysqli_fetch_array($result);
        if(mysqli_num_rows($result) > 0){
            $img = $row['profilepicture'];
            if($img == ""){
                $firstName = $row['firstname'];
                $lastName = $row['lastname'];
                $email = $row['email'];
                $personNumber = $row['personnumber'];
                $streetAdress = $row['streetadress'];
                $streetNumber = $row['streetnumber'];
                $zipCode = $row['zipcode'];
                $img = $row['profilepicture'];
                $matchid = 1;
                $matchid = utf8_encode($matchid);
                $lastName = utf8_encode($lastName);
                $email = utf8_encode($email);
                $personNumber = utf8_encode($personNumber);
                $streetAdress = utf8_encode($streetAdress);
                $zipCode = utf8_encode($zipCode);
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
                $img = $row['profilepicture'];
                $matchid = 1;
                $matchid = utf8_encode($matchid);
                $lastName = utf8_encode($lastName);
                $email = utf8_encode($email);
                $personNumber = utf8_encode($personNumber);
                $streetAdress = utf8_encode($streetAdress);
                $zipCode = utf8_encode($zipCode);
                $results = array(
                    0 => $matchid,
                    1 => $firstName,
                    2 => $lastName,
                    3 => $email,
                    4 => $personNumber,
                    5 => $streetAdress,
                    6 => $streetNumber,
                    7 => $zipCode,
                    8 => $img,
                );
                echo (json_encode($results));
            }

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
            $matchid = utf8_encode($matchid);
            $results = array(
                0 => $matchid,
            );
            echo (json_encode($results));
        }
    }
    else if($role1 == 2){

    }
    mysqli_close($conn);
?>