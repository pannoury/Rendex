<?php
    include "config.php";

    /**************************************************************** */
    //Request ID between 1 & 5 are for "MyAccount" Page for settings
    //The rest are not decided yet.
    /**************************************************************** */

    if(isset($_POST['requestid'])){
        $requestId = $conn->real_escape_string($_POST['requestid']);

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
                SET streetadress='$streetadress',  
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
        else if($requestId == 2){
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
                SET streetadress='$streetadress', 
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
        else if($requestId == 3){ //Företagsprofil/Company Profile
            $role = $conn->real_escape_string($_POST['role']);
            $id = $conn->real_escape_string($_POST['accountid']);
    
            if($role == 1 && isset($_POST['role']) && isset($_POST['accountid'])){ //individual
                if(isset($_POST['description']) && isset($_POST['website'])){
                    $description = $conn->real_escape_string($_POST['description']);
                    $website = $conn->real_escape_string($_POST['website']);
                    
                    $description = utf8_decode($description);
                    $website = utf8_decode($website);

                    $sql = "UPDATE Individuals SET description='$description', website='$website' WHERE accountId='$id'";

                    $result = mysqli_query($conn, $sql);
                    if ($result) {
                        echo ("1");
                    } 
                    else {
                        echo ("Unsuccessful request");
                    }
                }
                else if(isset($_POST['description']) && isset($_POST['website']) == false){
                    $description = $conn->real_escape_string($_POST['description']);
                    $description = utf8_decode($description);

                    $sql = "UPDATE Individuals SET description='$description' WHERE accountId='$id'";

                    $result = mysqli_query($conn, $sql);
                    if ($result) {
                        echo ("1");
                    } 
                    else {
                        echo ("Unsuccessful request");
                    }
                }
                else if(isset($_POST['description']) == false && isset($_POST['website'])){
                    $website = $conn->real_escape_string($_POST['website']);
                    $website = utf8_decode($website);

                    $sql = "UPDATE Individuals SET website='$website' WHERE accountId='$id'";

                    $result = mysqli_query($conn, $sql);
                    if ($result) {
                        echo ("1");
                    } 
                    else {
                        echo ("Unsuccessful request");
                    }
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
    }
    else{
        echo json_encode(0);
    }


    mysqli_close($conn);
?>