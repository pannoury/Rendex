<?php

    include 'config.php';
    
    $requestId = $conn->real_escape_string($_GET['requestid']);
    $requestIdPost = $conn->real_escape_string($_POST['requestid']);

    if($requestId == 1){ //Find all unique chat_id's
        $id = $conn->real_escape_string($_GET['userid']);
        $chatid = $conn->real_escape_string($_GET['chatid']);
        $sender = $conn->real_escape_string($_GET['sender']);
        $sql = "SELECT DISTINCT chat_id FROM chatdb WHERE account_id='$id' OR counterpart='$id'";
        $result = mysqli_query($conn,$sql); 
        $rows = mysqli_num_rows($result); 
        if(mysqli_num_rows($result) > 1){
            for($i=0; $i < $rows; $i++){
                $rs=mysqli_fetch_array($result);
                $chatid = $rs['chat_id'];
                $chatid = utf8_encode($chatid);
                $points[$i][0]=($chatid);
                
            }
            echo (json_encode($points));
        }
        else if(mysqli_num_rows($result) == 1){
            $rs=mysqli_fetch_array($result);
            $chatid = $rs['chat_id'];
            $chatid = utf8_encode($chatid);
            echo json_encode($chatid);
        }
        else{
            echo (0);
        }
    }
    else if($requestId == 2){
        $id = $conn->real_escape_string($_GET['userid']);
        $chatid = $conn->real_escape_string($_GET['chatid']);
        $sender = $conn->real_escape_string($_GET['sender']);
        $sql = "SELECT * FROM chatdb WHERE chat_id='$chatid' ORDER BY chat_time DESC LIMIT 1";
        $result = mysqli_query($conn,$sql);  
        $rows = mysqli_num_rows($result);
        if(mysqli_num_rows($result) > 1){
            for($i=0; $i < $rows; $i++){
                $rs=mysqli_fetch_array($result);
                $sender = $rs['account_id'];
                $reciever = $rs['counterpart'];
                $chattime = $rs['chat_time'];
                $text = $rs['text'];
                $chatid = $rs['chat_id'];
                $sender = utf8_encode($sender);
                $reciever = utf8_encode($reciever);
                $chattime = utf8_encode($chattime);
                $text = utf8_encode($text);
                $chatid = utf8_encode($chatid);
                $matchid = 1;
                $points[$i][0]=($matchid);
                $points[$i][1]=($sender);
                $points[$i][2]=($reciever);
                $points[$i][3]=($chattime);
                $points[$i][4]=($text);
                
            }
            echo (json_encode($points));
        }
        else if(mysqli_num_rows($result) == 1){
            $rs=mysqli_fetch_array($result);
            $sender = $rs['account_id'];
            $reciever = $rs['counterpart'];
            $chattime = $rs['chat_time'];
            $text = $rs['text'];
            $chatid = $rs['chat_id'];
            $sender = utf8_encode($sender);
            $reciever = utf8_encode($reciever);
            $chattime = utf8_encode($chattime);
            $text = utf8_encode($text);
            $chatid = utf8_encode($chatid);
            $matchid = 1;
            $points[0]=($sender);
            $points[1]=($reciever);
            $points[2]=($chattime);
            $points[3]=($text);
            echo json_encode($points);
        }
        else if(mysqli_num_rows($result) == 0){
            echo ("less than 1");
        }
    }
    else if($requestId == 3){
        $id = $conn->real_escape_string($_GET['userid']);
        $chatid = $conn->real_escape_string($_GET['chatid']);
        $sender = $conn->real_escape_string($_GET['sender']);
        $sender = $conn->real_escape_string($_GET['sender']);
        $sql = "SELECT * FROM Individuals WHERE accountId='$sender'";
        $result = mysqli_query($conn,$sql);
        $row = mysqli_fetch_array($result);
        if(mysqli_num_rows($result) == 1){
            $firstName = $row['firstname'];
            $lastName = $row['lastname'];
            $email = $row['email'];
            $personNumber = $row['personnumber'];
            $streetAdress = $row['streetadress'];
            $streetNumber = $row['streetnumber'];
            $zipCode = $row['zipcode'];
            //$img = $row['profilepicture'];
            //$img = base64_encode($img);
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
            echo json_encode("else");
        }
    }
    else if($requestId == 4){
        $id = $conn->real_escape_string($_GET['userid']);
        $chatid = $conn->real_escape_string($_GET['chatid']);
        $sender = $conn->real_escape_string($_GET['sender']);
        $sql = "SELECT * FROM chatdb WHERE chat_id='$chatid' ORDER BY chat_time ASC";
        $result = mysqli_query($conn,$sql);  
        $rows = mysqli_num_rows($result);
        if(mysqli_num_rows($result) > 1){
            for($i=0; $i < $rows; $i++){
                $rs=mysqli_fetch_array($result);
                $sender = $rs['account_id'];
                $reciever = $rs['counterpart'];
                $chattime = $rs['chat_time'];
                $text = $rs['text'];
                $chatid = $rs['chat_id'];
                $sender = utf8_encode($sender);
                $reciever = utf8_encode($reciever);
                $chattime = utf8_encode($chattime);
                $text = utf8_encode($text);
                $chatid = utf8_encode($chatid);
                $matchid = 1;
                $points[$i][0]=($matchid);
                $points[$i][1]=($sender);
                $points[$i][2]=($reciever);
                $points[$i][3]=($chattime);
                $points[$i][4]=($text);
                
            }
            echo (json_encode($points));
        }
    }
    else if($requestIdPost == 5){ //send text
        $chatid = $conn->real_escape_string($_POST['chatid']);
        $sender = $conn->real_escape_string($_POST['sender']);
        $reciever = $conn->real_escape_string($_POST['reciever']);
        $text = $conn->real_escape_string($_POST['text']);
        $date = $conn->real_escape_string($_POST['date']);
        $sql = "INSERT INTO chatdb (account_id,chat_time,counterpart,text,chat_id) VALUES ('$sender','$date','$reciever','$text','$chatid')";
        $result = mysqli_query($conn, $sql);
        if ($result) {
            echo json_encode("New record created successfully");
        } 
        else {
            echo json_encode("Unsuccessful request");
        }
    }

    mysqli_close($conn);
?>