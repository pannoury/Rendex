<?php

    include 'config.php';
    
    $requestId = $conn->real_escape_string($_GET['requestid']);
    $id = $conn->real_escape_string($_GET['userid']);

    if($requestId == 1){
        $sql = "SELECT * FROM chatdb WHERE account_id='$id' OR counterpart='$id' ORDER BY chat_time ASC";
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
                $points[$i][5]=($chatid);
                
            }
            echo (json_encode($points));
        }
        else if(mysqli_num_rows($result) == 1){
            echo json_encode(0);
        }
        else{
            echo (0);
        }
    }

    mysqli_close($conn);
?>