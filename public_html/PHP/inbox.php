<?php

    include 'config.php';
    
    $requestId = $conn->real_escape_string($_GET['requestid']);
    $requestIdPost = $conn->real_escape_string($_POST['requestid']);

    if($requestId == 1){ //Find all unique chat_id's
        $id = $conn->real_escape_string($_GET['userid']);
        $chatid = $conn->real_escape_string($_GET['chatid']);
        $sender = $conn->real_escape_string($_GET['sender']);
        $sql = "SELECT DISTINCT chat_id FROM chatdb WHERE account_id='$id' OR counterpart='$id' ORDER BY chat_time DESC";
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
        $img = $row['profilepicture'];
        if(mysqli_num_rows($result) == 1){
            if($img == ""){
                $firstName = $row['firstname'];
                $lastName = $row['lastname'];
                $email = $row['email'];
                $personNumber = $row['personnumber'];
                $streetAdress = $row['streetadress'];
                $streetNumber = $row['streetnumber'];
                $zipCode = $row['zipcode'];
                $img = $row['profilepicture'];
                $img = utf8_encode($img);
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
                    //8 => $img,
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
                $img = utf8_encode($img);
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
                    8 => $img
                );
                echo (json_encode($results));
            }
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
        else{
            $row = mysqli_fetch_array($result);
            $sender = $row['account_id'];
            $reciever = $row['counterpart'];
            $chattime = $row['chat_time'];
            $text = $row['text'];
            $chatid = $row['chat_id'];
            $sender = utf8_encode($sender);
            $reciever = utf8_encode($reciever);
            $chattime = utf8_encode($chattime);
            $text = utf8_encode($text);
            $chatid = utf8_encode($chatid);
            $matchid = 1;
            $results = array(
                0 => $matchid,
                1 => $sender,
                2 => $reciever,
                3 => $chattime,
                4 => $text,
            );
            echo (json_encode($results));
        }
    }
    else if($requestIdPost == 5){ //send text
        $chatid = $conn->real_escape_string($_POST['chatid']);
        $sender = $conn->real_escape_string($_POST['sender']);
        $reciever = $conn->real_escape_string($_POST['reciever']);
        $text = $conn->real_escape_string($_POST['text']);
        $date = $conn->real_escape_string($_POST['date']);
        $text = utf8_decode($text);
        $sql = "INSERT INTO chatdb (account_id,chat_time,counterpart,text,chat_id) VALUES ('$sender','$date','$reciever','$text','$chatid')";
        $result = mysqli_query($conn, $sql);
        if ($result) {
            echo json_encode("1");
        } 
        else {
            echo json_encode("Unsuccessful request");
        }
    }
    else if($requestId == 6){ //update and include latest text (When you send a text)
        $chatid = $conn->real_escape_string($_GET['chatid']);
        $sender = $conn->real_escape_string($_GET['sender']);
        $sql = "SELECT * FROM chatdb WHERE chat_id='$chatid' ORDER BY chat_time DESC LIMIT 1";
        $result = mysqli_query($conn,$sql);  
        $rows = mysqli_num_rows($result);
        if(mysqli_num_rows($result) == 1){
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
    else if($requestId == 7){ //counts new texts live
        $chatid = $conn->real_escape_string($_GET['chatid']);
        $sender = $conn->real_escape_string($_GET['sender']);
        $chatRows = $conn->real_escape_string($_GET['chatRows']);
        $sql = "SELECT * FROM chatdb WHERE chat_id='$chatid' AND account_id=$sender ORDER BY chat_time DESC";
        $result = mysqli_query($conn,$sql);  
        $rows = mysqli_num_rows($result);
        if(mysqli_num_rows($result) > $chatRows){
            $newChats = ($rows - $chatRows);
            echo (json_encode($newChats));
        }
        else if(mysqli_num_rows($result) == $chatRows){ //no new chats
            echo (json_encode("0"));
        }
        else if(mysqli_num_rows($result) < $chatRows){
            echo (json_encode("0"));
        }
    }
    else if($requestId == 8){ //update and include latest text sent by someone else (only one)
        $chatid = $conn->real_escape_string($_GET['chatid']);
        $limit = $conn->real_escape_string($_GET['limit']);
        $sender = $conn->real_escape_string($_GET['sender']);
        $sql = "SELECT * FROM chatdb WHERE chat_id='$chatid' AND account_id=$sender ORDER BY chat_time DESC LIMIT $limit";
        $result = mysqli_query($conn,$sql);  
        $rows = mysqli_num_rows($result);
        if(mysqli_num_rows($result) > 0){
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
        else{ //no new chats
            echo (json_encode("2"));
        }
    }
    /*************Archaic Code */
    else if($requestId == 9){ //multiple chats has been written
        $chatid = $conn->real_escape_string($_GET['chatid']);
        $limit = $conn->real_escape_string($_GET['limit']);
        $offset = $conn->real_escape_string($_GET['offset']);
        $sql = "SELECT * FROM chatdb WHERE chat_id='$chatid' ORDER BY chat_time ASC LIMIT $limit OFFSET $offset";
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

    mysqli_close($conn);
?>