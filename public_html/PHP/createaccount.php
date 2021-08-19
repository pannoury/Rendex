<?php
    include "config.php";

    $requestid = $conn->real_escape_string($_GET['requestid']);
    $requestidPost = $conn->real_escape_string($_POST['requestid']);

    if($requestid == 1){ //Individuals
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
    else if($requestid == 2){ //Individuals
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
    else if($requestid == 3){ //Check email
        $email = $conn->real_escape_string($_GET['email']);
        $sql = "SELECT username FROM Accounts WHERE username='$email'";
        $result = mysqli_query($conn,$sql);
        $row = mysqli_fetch_array($result);
        if(mysqli_num_rows($result) > 0){
            $accountid = $row['username'];
            $matchid = 1;
            $matchid = utf8_encode($matchid);
            $accountid = utf8_encode($accountid);
            $results = array(
                0 => $matchid,
                1 => $accountid,
            );
            echo (json_encode($results));
        }
        else{
            echo ("0");
        }
    }
    else if($requestidPost == 4){ //create the new account INDIVIDUAL
        $email = $conn->real_escape_string($_POST['email']);
        $password = $conn->real_escape_string($_POST['password']);
        $time = $conn->real_escape_string($_POST['time']);

        $email = utf8_decode($email);
        $password = utf8_decode($password);
        $time = utf8_decode($time);

        $password = password_hash($password, PASSWORD_DEFAULT);

        $email = $conn->real_escape_string($_POST['email']);
        $personnummer = $conn->real_escape_string($_POST['personnummer']);
        $firstname = $conn->real_escape_string($_POST['firstname']);
        $lastname = $conn->real_escape_string($_POST['lastname']);
        $phonenumber = $conn->real_escape_string($_POST['phonenumber']);
        $email = $conn->real_escape_string($_POST['email']);
        $streetadress = $conn->real_escape_string($_POST['streetadress']);
        $streetnumber = $conn->real_escape_string($_POST['streetnumber']);
        $zipcode = $conn->real_escape_string($_POST['zipcode']);
        
        $streetadress = utf8_decode($streetadress);

        $role = $conn->real_escape_string($_POST['role']);

        if($role == 1){
    
            $sql = "INSERT INTO Accounts (role,password,username,created_at) VALUES ('$role','$password','$email','$time');";
            $sql .= "INSERT INTO Individuals (personnumber,firstname,lastname,email,streetadress,zipcode,streetnumber,phonenumber) 
            VALUES ('$personnummer','$firstname','$lastname','$email','$streetadress','$zipcode','$streetnumber','$phonenumber')";
            $result = mysqli_multi_query($conn, $sql);
            if ($result) {
                echo json_encode("Request made successfully");
            } 
            else {
                echo json_encode("Unsuccessful request");
            }
        }
        else if($role == 2){
    
            $sql = "INSERT INTO Accounts (role, password, username, created_at) 
            VALUES ($role, $password, $email, $time)";
            
            $result = mysqli_query($conn, $sql);
            if ($result) {
                echo json_encode("1");
            } 
            else {
                echo json_encode("Unsuccessful request");
            }
        }
    }
    else if($requestidPost == 5){ //create the new account INDIVIDUAL

        $role = $conn->real_escape_string($_POST['role']);
        $id = $conn->real_escape_string($_POST['id']);
        $email = $conn->real_escape_string($_POST['email']);

        if($role == 1){
            $sql = "UPDATE Individuals SET accountId='$id' WHERE email='$email'";

            $result = mysqli_query($conn, $sql);
            if ($result) {
                echo json_encode(1);
            } 
            else {
                echo json_encode($result);
            }
        }
        else if($role == 2){
    
            $sql = "INSERT INTO Accounts (role, password, username, created_at) 
            VALUES ($role, $password, $email, $time)";
            //add "INSERT INTO organisation (org_name, org_number, adress, street_number, zip_code, region, city, phonenumber)
            
            $result = mysqli_query($conn, $sql);
            if ($result) {
                echo json_encode("1");
            } 
            else {
                echo json_encode("Unsuccessful request");
            }
        }
    }
    else if($requestid == 6){ //create the new account INDIVIDUAL

        $role = $conn->real_escape_string($_GET['role']);
        $email = $conn->real_escape_string($_GET['email']);

        if($role == 1){
            $sql = "SELECT * FROM Accounts WHERE username='$email'";

            $result = mysqli_query($conn, $sql);
            $row = mysqli_fetch_array($result);
            if ($result) {
                $matchid = 1;
                $matchid = utf8_encode($matchid);
                $id = $row['accountId'];
                $id = utf8_encode($id);
                $results = array(
                    0 => $matchid,
                    1 => $id,
                );
                echo (json_encode($results));
            } 
            else {
                echo json_encode($result);
            }
        }
        else if($role == 2){
    
            $sql = "INSERT INTO Accounts (role, password, username, created_at) 
            VALUES ($role, $password, $email, $time)";
            //add "INSERT INTO organisation (org_name, org_number, adress, street_number, zip_code, region, city, phonenumber)
            
            $result = mysqli_query($conn, $sql);
            if ($result) {
                echo json_encode("1");
            } 
            else {
                echo json_encode("Unsuccessful request");
            }
        }
    }

    mysqli_close($conn);



    /*        if(isset($_POST['personnummer']) && isset($_POST['firstname']) && isset($_POST['lastname']) &&
        isset($_POST['phonenumber']) && isset($_POST['email']) && isset($_POST['´streetadress']) && isset($_POST['streetnumber']) && 
        isset($_POST['zipcode']) && isset($_POST['region']) && isset($_POST['role'])){

        }
        else{
            echo json_encode("A value is missing");
        }
    */
?>