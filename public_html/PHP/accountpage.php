<?php
    include "config.php";

    $requestId = $conn->real_escape_string($_POST['requestid']);
    /********************************************************** */
    //Request ID between 1 & 5 are for "MyAccount" Page for settings
    //The rest are not decided yet.
    /********************************************************** */

    if($requestId == 1){
        $role = $conn->real_escape_string($_POST['role']);
        $id = $conn->real_escape_string($_POST['accountid']);
        $path = $conn->real_escape_string($_POST['path']);

        if($role == 1){ //individual
            $firstname = $conn->real_escape_string($_POST['firstname']);
            $lastname = $conn->real_escape_string($_POST['lastname']);
            $phonenumber = $conn->real_escape_string($_POST['phonenumber']);
            $alternativephonenumber = $conn->real_escape_string($_POST['alternativephonenumber']);
            $streetadress = $conn->real_escape_string($_POST['streetadress']);
            $streetnumber = $conn->real_escape_string($_POST['streetnumber']);
            $zipcode = $conn->real_escape_string($_POST['zipcode']);
            $imagepath = $conn->real_escape_string($_POST['imagepath']);

            $firstname = utf8_decode($firstname);
            $lastname = utf8_decode($lastname);
            $streetadress = utf8_decode($streetadress);

            $sql = "UPDATE Individuals 
            SET firstname='$firstname', 
            lastname='$lastname', 
            streetadress='$streetadress',  
            streetnumber='$streetnumber', 
            zipcode='$zipcode', 
            phonenumber='$phonenumber', 
            profilepicture='$imagepath' 
            WHERE accountId='$id'";
            $result = mysqli_query($conn, $sql);
            if ($result) {
                echo ("1");
            } 
            else {
                echo ("Unsuccessful request");
            }
        }
        else if($role == 2){ //organisation
            echo ("organisation");
        }
    }
    if($requestId == 2){
        $role = $conn->real_escape_string($_POST['role']);
        $id = $conn->real_escape_string($_POST['accountid']);

        if($role == 1){ //individual
            $firstname = $conn->real_escape_string($_POST['firstname']);
            $lastname = $conn->real_escape_string($_POST['lastname']);
            $phonenumber = $conn->real_escape_string($_POST['phonenumber']);
            $alternativephonenumber = $conn->real_escape_string($_POST['alternativephonenumber']);
            $streetadress = $conn->real_escape_string($_POST['streetadress']);
            $streetnumber = $conn->real_escape_string($_POST['streetnumber']);
            $zipcode = $conn->real_escape_string($_POST['zipcode']);
            
            $firstname = utf8_decode($firstname);
            $lastname = utf8_decode($lastname);
            $streetadress = utf8_decode($streetadress);

            $sql = "UPDATE Individuals 
            SET firstname='$firstname', 
            lastname='$lastname', 
            streetadress='$streetadress', 
            zipcode='$zipcode', 
            streetnumber='$streetnumber',  
            phonenumber='$phonenumber' 
            WHERE accountId='$id'";
            $result = mysqli_query($conn, $sql);
            if ($result) {
                echo ("1");
            } 
            else {
                echo ("Unsuccessful request");
            }
        }
        else if($role == 2){ //organisation
            echo ("organisation");
        }
    }
    else{
        echo json_encode("not recognized");
    }

    mysqli_close($conn);

?>