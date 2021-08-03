<?php

    include 'config.php';
    
    $requestId = $conn->real_escape_string($_GET['requestid']);

    if($requestId == 1){
        $region = $conn->real_escape_string($_GET['region']);
        if($region == "Hela Sverige"){ //Hela Sverige
            $sql = "SELECT * FROM Articles ORDER BY created_at DESC";
            $result = mysqli_query($conn,$sql);  
            $rows = mysqli_num_rows($result);
            if(mysqli_num_rows($result) > 1){
                for($i=0; $i < $rows; $i++){
                    $rs=mysqli_fetch_array($result);
                    $accountid = $rs['account_id'];
                    $articleid = $rs['articleid'];
                    $city = $rs['city'];
                    $region = $rs['region'];
                    $articletext = $rs['articletext'];
                    $type = $rs['type'];
                    $articleCue = $rs['articlecue'];
                    $price = $rs['price'];
                    $date = $rs['created_at'];
                    $accountid = utf8_encode($accountid);
                    $articleid = utf8_encode($articleid);
                    $city = utf8_encode($city);
                    $region = utf8_encode($region);
                    $articletext = utf8_encode($articletext);
                    $type = utf8_encode($type);
                    $articleCue = utf8_encode($articleCue);
                    $price = utf8_encode($price);
                    $date = utf8_encode($date);
                    $matchid = 1;
                    $points[$i][0]=($accountid);
                    $points[$i][1]=($articleid);
                    $points[$i][2]=($city);
                    $points[$i][3]=($region);
                    $points[$i][4]=($articletext);
                    $points[$i][5]=($type);
                    $points[$i][6]=($articleCue);
                    $points[$i][7]=($price);
                    $points[$i][7]=($date);
                }
                echo (json_encode($points));
            }
            else if(mysqli_num_rows($result) == 1){
                $rs=mysqli_fetch_array($result);
                $accountid = $rs['account_id'];
                $articleid = $rs['articleid'];
                $city = $rs['city'];
                $region = $rs['region'];
                $articletext = $rs['articletext'];
                $type = $rs['type'];
                $articleCue = $rs['articlecue'];
                $price = $rs['price'];
                $date = $rs['created_at'];
                $accountid = utf8_encode($accountid);
                $articleid = utf8_encode($articleid);
                $city = utf8_encode($city);
                $region = utf8_encode($region);
                $articletext = utf8_encode($articletext);
                $type = utf8_encode($type);
                $articleCue = utf8_encode($articleCue);
                $price = utf8_encode($price);
                $date = utf8_encode($date);
                $matchid = 1;
                $results = array(
                    0 => $accountid,
                    1 => $articleid,
                    2 => $city,
                    3 => $region,
                    4 => $articletext,
                    5 => $type,
                    6 => $articleCue,
                    7 => $price,
                    8 => $date,
                );
    
                echo (json_encode($results));
            }
            else{
                echo (0);
            }
        }
        else{ //Specific Region
            $sql = "SELECT * FROM Articles WHERE region='$region' ORDER BY created_at DESC";
            $result = mysqli_query($conn,$sql);  
            $rows = mysqli_num_rows($result);
            if(mysqli_num_rows($result) > 1){
                for($i=0; $i < $rows; $i++){
                    $rs=mysqli_fetch_array($result);
                    $accountid = $rs['account_id'];
                    $articleid = $rs['articleid'];
                    $city = $rs['city'];
                    $region = $rs['region'];
                    $articletext = $rs['articletext'];
                    $type = $rs['type'];
                    $articleCue = $rs['articlecue'];
                    $price = $rs['price'];
                    $date = $rs['created_at'];
                    $accountid = utf8_encode($accountid);
                    $articleid = utf8_encode($articleid);
                    $city = utf8_encode($city);
                    $region = utf8_encode($region);
                    $articletext = utf8_encode($articletext);
                    $type = utf8_encode($type);
                    $articleCue = utf8_encode($articleCue);
                    $price = utf8_encode($price);
                    $date = utf8_encode($date);
                    $matchid = 1;
                    $points[$i][0]=($accountid);
                    $points[$i][1]=($articleid);
                    $points[$i][2]=($city);
                    $points[$i][3]=($region);
                    $points[$i][4]=($articletext);
                    $points[$i][5]=($type);
                    $points[$i][6]=($articleCue);
                    $points[$i][7]=($price);
                    $points[$i][7]=($date);
                }
                echo (json_encode($points));
            }
            else if(mysqli_num_rows($result) == 1){
                $rs=mysqli_fetch_array($result);
                $accountid = $rs['account_id'];
                $articleid = $rs['articleid'];
                $city = $rs['city'];
                $region = $rs['region'];
                $articletext = $rs['articletext'];
                $type = $rs['type'];
                $articleCue = $rs['articlecue'];
                $price = $rs['price'];
                $date = $rs['created_at'];
                $accountid = utf8_encode($accountid);
                $articleid = utf8_encode($articleid);
                $city = utf8_encode($city);
                $region = utf8_encode($region);
                $articletext = utf8_encode($articletext);
                $type = utf8_encode($type);
                $articleCue = utf8_encode($articleCue);
                $price = utf8_encode($price);
                $date = utf8_encode($date);
                $matchid = 1;
                $results = array(
                    0 => $accountid,
                    1 => $articleid,
                    2 => $city,
                    3 => $region,
                    4 => $articletext,
                    5 => $type,
                    6 => $articleCue,
                    7 => $price,
                    8 => $date,
                );
    
                echo (json_encode($results));
            }
            else{
                echo (0);
            }
        }
    }
    else if($requestId == 2){
        $accountid = $conn->real_escape_string($_GET['accountid']);
        $sql = "SELECT * FROM Accounts WHERE accountId='$accountid'";
        $result = mysqli_query($conn,$sql);  
        $rows = mysqli_num_rows($result);
        if($rows == 1){
            $rs=mysqli_fetch_array($result);
            $accountid = $rs['accountId'];
            $role = $rs['role'];
            $accountid = utf8_encode($accountid);
            $role = utf8_encode($role);
            $matchid = 1;
            $results = array(
                0 => $matchid,
                1 => $accountid,
                2 => $role,
            );
            echo json_encode($results);
        }
        else{
            echo (0);
        }

    }
    else if($requestId == 3){
        $role = $conn->real_escape_string($_GET['role']);
        if($role == 1){ //individual
            $accountid = $conn->real_escape_string($_GET['accountid']);
            $sql = "SELECT * FROM Individuals WHERE accountId='$accountid'";
            $result = mysqli_query($conn,$sql);  
            $rows = mysqli_num_rows($result);
            if($rows == 1){
                $rs=mysqli_fetch_array($result);
                $accountid = $rs['accountId'];
                $firstname = $rs['firstname'];
                $lastname = $rs['lastname'];
                //$profilepicture = $rs['profilepicture'];
                $accountid = utf8_encode($accountid);
                $firstname = utf8_encode($firstname);
                $lastname = utf8_encode($lastname);
                $matchid = 1;
                $results = array(
                    0 => $matchid,
                    1 => $accountid,
                    2 => $firstname,
                    3 => $lastname,
                );
                echo json_encode($results);
            }
            else{
                echo (0);
            }
        }
        else if($role == 2){
            $accountid = $conn->real_escape_string($_GET['accountid']);
            $sql = "SELECT * FROM organisation WHERE accountId='$accountid'";
            $result = mysqli_query($conn,$sql);  
            $rows = mysqli_num_rows($result);
            if($rows == 1){
                $rs=mysqli_fetch_array($result);
                $accountid = $rs['accountId'];
                $role = $rs['role'];
                $accountid = utf8_encode($accountid);
                $role = utf8_encode($role);
                $matchid = 1;
                $results = array(
                    0 => $matchid,
                    1 => $accountid,
                    2 => $role,
                );
                echo json_encode($results);
            }
            else{
                echo (0);
            }
        }
        else{
            echo ("no role selected");
        }

    }
    else if($requestId == 4){
        $role = $conn->real_escape_string($_GET['role']);
        if($role == 1){ //individual
            $accountid = $conn->real_escape_string($_GET['accountid']);
            $sql = "SELECT * FROM Individuals WHERE accountId='$accountid'";
            $result = mysqli_query($conn,$sql);  
            $rows = mysqli_num_rows($result);
            if($rows == 1){
                $rs=mysqli_fetch_array($result);
                $accountid = $rs['accountId'];
                $firstname = $rs['firstname'];
                $lastname = $rs['lastname'];
                //$profilepicture = $rs['profilepicture'];
                $accountid = utf8_encode($accountid);
                $firstname = utf8_encode($firstname);
                $lastname = utf8_encode($lastname);
                $matchid = 1;
                $results = array(
                    0 => $matchid,
                    1 => $accountid,
                    2 => $firstname,
                    3 => $lastname,
                );
                echo json_encode($results);
            }
            else{
                echo (0);
            }
        }
        else if($role == 2){
            $accountid = $conn->real_escape_string($_GET['accountid']);
            $sql = "SELECT * FROM organisation WHERE accountId='$accountid'";
            $result = mysqli_query($conn,$sql);  
            $rows = mysqli_num_rows($result);
            if($rows == 1){
                $rs=mysqli_fetch_array($result);
                $accountid = $rs['accountId'];
                $role = $rs['role'];
                $accountid = utf8_encode($accountid);
                $role = utf8_encode($role);
                $matchid = 1;
                $results = array(
                    0 => $matchid,
                    1 => $accountid,
                    2 => $role,
                );
                echo json_encode($results);
            }
            else{
                echo (0);
            }
        }
        else{
            echo ("no role selected");
        }

    }
    else{
        echo ("error in fetching data");
    }

    mysqli_close($conn);
?>