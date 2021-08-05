<?php

    include 'config.php';
    
    $requestId = $conn->real_escape_string($_GET['requestid']);

    if($requestId == 1){
        $region = $conn->real_escape_string($_GET['region']);
        $city = $conn->real_escape_string($_GET['city']);
        $purpose = $conn->real_escape_string($_GET['purpose']);
        $price = $conn->real_escape_string($_GET['price']);


        if(strpos($region, ',') == true){ //region is array
            $region = str_replace('"', "'", $region);
            $region = str_replace("\'", "'", $region);

            if(strpos($purpose, ',') == true){ //purpose is array
                $purpose = str_replace('"', "'", $purpose);
                $purpose = str_replace("\'", "'", $purpose);
                if(strpos($price, ',') == true){ //price == array, dont ignore
                    $price = str_replace('"', "'", $price);
                    $price = str_replace("\'", "'", $price);

                    $sql = "SELECT * FROM Articles WHERE region IN ($region) AND 
                    WHERE price IN ($price) AND WHERE type IN ($purpose)
                    ORDER BY created_at DESC LIMIT 40";

                    $result = mysqli_query($conn,$sql);  
                    $rows = mysqli_num_rows($result);
                    retrieveArticleInformation($result, $rows);
                }
                else if($price == "All"){ //ignore price
                    $sql = "SELECT * FROM Articles WHERE region IN ($region) 
                    AND WHERE type IN ($purpose)
                    ORDER BY created_at DESC LIMIT 40";

                    $result = mysqli_query($conn,$sql);  
                    $rows = mysqli_num_rows($result);
                    retrieveArticleInformation($result, $rows);
                }
                else{ //single price value, dont ignore
                    $sql = "SELECT * FROM Articles WHERE region IN ($region) AND 
                    WHERE price='$price' AND WHERE type IN ($purpose)
                    ORDER BY created_at DESC LIMIT 40";

                    $result = mysqli_query($conn,$sql);  
                    $rows = mysqli_num_rows($result);
                    retrieveArticleInformation($result, $rows);
                }
            }
            else if($purpose == "All"){ // ignore purpose
                if(strpos($price, ',') == true){ //price == array, dont ignore
                    $price = str_replace('"', "'", $price);
                    $price = str_replace("\'", "'", $price);
                    $sql = "SELECT * FROM Articles WHERE region IN ($region) AND 
                    WHERE price IN ($price) ORDER BY created_at DESC LIMIT 40";

                    $result = mysqli_query($conn,$sql);  
                    $rows = mysqli_num_rows($result);
                    retrieveArticleInformation($result, $rows);
                }
                else if($price == "All"){ //ignore price
                    $sql = "SELECT * FROM Articles WHERE region IN ($region) 
                    ORDER BY created_at DESC LIMIT 40";

                    $result = mysqli_query($conn,$sql);  
                    $rows = mysqli_num_rows($result);
                    retrieveArticleInformation($result, $rows);
                }
                else{ //single price value, dont ignore
                    $sql = "SELECT * FROM Articles WHERE region IN ($region) 
                    AND WHERE price='$price' ORDER BY created_at DESC LIMIT 40";

                    $result = mysqli_query($conn,$sql);  
                    $rows = mysqli_num_rows($result);
                    retrieveArticleInformation($result, $rows);
                }
            }
            else{ //not array, do not ignore PURPOSE
                if(strpos($price, ',') == true){ //PRICE = ARRAY
                    //REGION ARRAY, PURPOSE NA, PRICE ARRAY
                    $price = str_replace('"', "'", $price);
                    $price = str_replace("\'", "'", $price);
                    $sql = "SELECT * FROM Articles WHERE region IN ($region) 
                    AND WHERE type='$purpose' AND WHERE price IN ($price)
                    ORDER BY created_at DESC LIMIT 40";

                    $result = mysqli_query($conn,$sql);  
                    $rows = mysqli_num_rows($result);
                    retrieveArticleInformation($result, $rows);
                }
                else if($price == "All"){ //ignore price
                    $sql = "SELECT * FROM Articles WHERE region IN ($region) 
                    AND WHERE type='$purpose' ORDER BY created_at DESC LIMIT 40";

                    $result = mysqli_query($conn,$sql);  
                    $rows = mysqli_num_rows($result);
                    retrieveArticleInformation($result, $rows);
                }
                else{ //single price value, dont ignore
                    $sql = "SELECT * FROM Articles WHERE region IN ($region) 
                    AND WHERE type='$purpose' AND WHERE price='$price'
                    ORDER BY created_at DESC LIMIT 40";

                    $result = mysqli_query($conn,$sql);  
                    $rows = mysqli_num_rows($result);
                    retrieveArticleInformation($result, $rows);
                }
            }
        }
        else if(strpos($region, ',') == false && 
        strpos($city, ',') == false){ //region not array nor city
            if($region == "Hela Sverige"){ //continue with region, but ignore in SQL
                if(strpos($purpose, ',') == true){ //purpose is array
                    $purpose = str_replace('"', "'", $purpose);
                    $purpose = str_replace("\'", "'", $purpose);
                    if(strpos($price, ',') == true){ //price == array, dont ignore
                        $price = str_replace('"', "'", $price);
                        $price = str_replace("\'", "'", $price);
                        $sql = "SELECT * FROM Articles WHERE region='$region' 
                        AND WHERE type IN ($purpose) AND WHERE price IN ($price)
                        ORDER BY created_at DESC LIMIT 40";
    
                        $result = mysqli_query($conn,$sql);  
                        $rows = mysqli_num_rows($result);
                        retrieveArticleInformation($result, $rows);
                    }
                    else if($price == "All"){ //ignore price
                        $sql = "SELECT * FROM Articles WHERE region='$region' 
                        AND WHERE type IN ($purpose) 
                        ORDER BY created_at DESC LIMIT 40";
    
                        $result = mysqli_query($conn,$sql);  
                        $rows = mysqli_num_rows($result);
                        retrieveArticleInformation($result, $rows);
                    }
                    else{ //single price value, dont ignore
                        $sql = "SELECT * FROM Articles WHERE region='$region' 
                        AND WHERE type IN ($purpose) AND WHERE price='$price'
                        ORDER BY created_at DESC LIMIT 40";
    
                        $result = mysqli_query($conn,$sql);  
                        $rows = mysqli_num_rows($result);
                        retrieveArticleInformation($result, $rows);
                    }
                }
                else if($purpose == "All"){ // ignore purpose
                    if(strpos($price, ',') == true){ //price == array, dont ignore
                        $price = str_replace('"', "'", $price);
                        $price = str_replace("\'", "'", $price);
                        $sql = "SELECT * FROM Articles WHERE price IN ($price)
                        ORDER BY created_at DESC LIMIT 40";
    
                        $result = mysqli_query($conn,$sql);  
                        $rows = mysqli_num_rows($result);
                        retrieveArticleInformation($result, $rows);
                    }
                    else if($price == "All"){ //ignore price
                        $sql = "SELECT * FROM Articles 
                        ORDER BY created_at DESC LIMIT 40";
    
                        $result = mysqli_query($conn,$sql);  
                        $rows = mysqli_num_rows($result);
                        retrieveArticleInformation($result, $rows);
                    }
                    else{ //single price value, dont ignore price
                        $sql = "SELECT * FROM Articles WHERE price='$price'
                        ORDER BY created_at DESC LIMIT 40";
    
                        $result = mysqli_query($conn,$sql);  
                        $rows = mysqli_num_rows($result);
                        retrieveArticleInformation($result, $rows);
                    }
                }
                else{ //not array, do not ignore purpose
                    if(strpos($price, ',') == true){ //price == array, dont ignore
                        $price = str_replace('"', "'", $price);
                        $price = str_replace("\'", "'", $price);
                        $sql = "SELECT * FROM Articles WHERE type='$purpose' 
                        AND WHERE price IN ($price)
                        ORDER BY created_at DESC LIMIT 40";
    
                        $result = mysqli_query($conn,$sql);  
                        $rows = mysqli_num_rows($result);
                        retrieveArticleInformation($result, $rows);
                    }
                    else if($price == "All"){ //ignore price
                        $sql = "SELECT * FROM Articles WHERE type='$purpose' 
                        ORDER BY created_at DESC LIMIT 40";
    
                        $result = mysqli_query($conn,$sql);  
                        $rows = mysqli_num_rows($result);
                        retrieveArticleInformation($result, $rows);
                    }
                    else{ //single price value, dont ignore
                        $sql = "SELECT * FROM Articles WHERE type='$purpose' AND WHERE price='$price'
                        ORDER BY created_at DESC LIMIT 40";
    
                        $result = mysqli_query($conn,$sql);  
                        $rows = mysqli_num_rows($result);
                        retrieveArticleInformation($result, $rows);
                    }
                }
            }
            else if($region == $city){ //continue with region
                if(strpos($purpose, ',') == true){ //purpose is array
                    $purpose = str_replace('"', "'", $purpose);
                    $purpose = str_replace("\'", "'", $purpose);
                    if(strpos($price, ',') == true){ //price == array, dont ignore
                        $price = str_replace('"', "'", $price);
                        $price = str_replace("\'", "'", $price);
                        $sql = "SELECT * FROM Articles WHERE region='$region' 
                        AND WHERE type IN ($purpose) AND WHERE price IN ($price)
                        ORDER BY created_at DESC LIMIT 40";
    
                        $result = mysqli_query($conn,$sql);  
                        $rows = mysqli_num_rows($result);
                        retrieveArticleInformation($result, $rows);
                        
                    }
                    else if($price == "All"){ //ignore price
                        $sql = "SELECT * FROM Articles WHERE region='$region' 
                        AND WHERE type IN ($purpose) 
                        ORDER BY created_at DESC LIMIT 40";
    
                        $result = mysqli_query($conn,$sql);  
                        $rows = mysqli_num_rows($result);
                        retrieveArticleInformation($result, $rows);
                    }
                    else{ //single price value, dont ignore
                        $sql = "SELECT * FROM Articles WHERE region='$region' 
                        AND WHERE type IN ($purpose) AND WHERE price='$price'
                        ORDER BY created_at DESC LIMIT 40";
    
                        $result = mysqli_query($conn,$sql);  
                        $rows = mysqli_num_rows($result);
                        retrieveArticleInformation($result, $rows);
                    }
                }
                else if($purpose == "All"){ // ignore purpose
                    if(strpos($price, ',') == true){ //price == array, dont ignore
                        $price = str_replace('"', "'", $price);
                        $price = str_replace("\'", "'", $price);
                        $sql = "SELECT * FROM Articles WHERE region='$region' 
                        AND WHERE price IN ($price) 
                        ORDER BY created_at DESC LIMIT 40";
    
                        $result = mysqli_query($conn,$sql);  
                        $rows = mysqli_num_rows($result);
                        retrieveArticleInformation($result, $rows);
                    }
                    else if($price == "All"){ //ignore price
                        $sql = "SELECT * FROM Articles WHERE region='$region' 
                        ORDER BY created_at DESC LIMIT 40";
    
                        $result = mysqli_query($conn,$sql);  
                        $rows = mysqli_num_rows($result);
                        retrieveArticleInformation($result, $rows);
                    }
                    else{ //single price value, dont ignore
                        $sql = "SELECT * FROM Articles WHERE region='$region' 
                        AND WHERE price='$price' 
                        ORDER BY created_at DESC LIMIT 40";
    
                        $result = mysqli_query($conn,$sql);  
                        $rows = mysqli_num_rows($result);
                        retrieveArticleInformation($result, $rows);
                    }
                }
                else{ //not array, do not ignore purpose
                    if(strpos($price, ',') == true){ //price == array, dont ignore
                        $price = str_replace('"', "'", $price);
                        $price = str_replace("\'", "'", $price);
                        $sql = "SELECT * FROM Articles WHERE region='$region' 
                        AND WHERE price IN ($price) AND WHERE type='$purpose'
                        ORDER BY created_at DESC LIMIT 40";
    
                        $result = mysqli_query($conn,$sql);  
                        $rows = mysqli_num_rows($result);
                        retrieveArticleInformation($result, $rows);
                    }
                    else if($price == "All"){ //ignore price
                        $sql = "SELECT * FROM Articles WHERE region='$region' 
                        AND WHERE type='$purpose' 
                        ORDER BY created_at DESC LIMIT 40";
    
                        $result = mysqli_query($conn,$sql);  
                        $rows = mysqli_num_rows($result);
                        retrieveArticleInformation($result, $rows);
                    }
                    else{ //single price value, dont ignore
                        $sql = "SELECT * FROM Articles WHERE region='$region' 
                        AND WHERE type='$purpose' AND WHERE price='$price'
                        ORDER BY created_at DESC LIMIT 40";
    
                        $result = mysqli_query($conn,$sql);  
                        $rows = mysqli_num_rows($result);
                        retrieveArticleInformation($result, $rows);
                    }
                }
            }
            else{ //continue with city, city is different from region (e.g. R: Stockholm, C: Täby)
                if(strpos($purpose, ',') == true){ //purpose is array
                    $purpose = str_replace('"', "'", $purpose);
                    $purpose = str_replace("\'", "'", $purpose);
                    if(strpos($price, ',') == true){ //price == array, dont ignore
                        $price = str_replace('"', "'", $price);
                        $price = str_replace("\'", "'", $price);
                        $sql = "SELECT * FROM Articles WHERE city='$city' 
                        AND WHERE type IN ($purpose) AND WHERE price IN ($price)
                        ORDER BY created_at DESC LIMIT 40";
    
                        $result = mysqli_query($conn,$sql);  
                        $rows = mysqli_num_rows($result);
                        retrieveArticleInformation($result, $rows);
                        
                    }
                    else if($price == "All"){ //ignore price
                        $sql = "SELECT * FROM Articles WHERE city='$city' 
                        AND WHERE type IN ($purpose) 
                        ORDER BY created_at DESC LIMIT 40";
    
                        $result = mysqli_query($conn,$sql);  
                        $rows = mysqli_num_rows($result);
                        retrieveArticleInformation($result, $rows);
                    }
                    else{ //single price value, dont ignore
                        $sql = "SELECT * FROM Articles WHERE city='$city' 
                        AND WHERE type IN ($purpose) AND WHERE price='$price'
                        ORDER BY created_at DESC LIMIT 40";
    
                        $result = mysqli_query($conn,$sql);  
                        $rows = mysqli_num_rows($result);
                        retrieveArticleInformation($result, $rows);
                    }
                }
                else if($purpose == "All"){ // ignore purpose
                    if(strpos($price, ',') == true){ //price == array, dont ignore
                        $price = str_replace('"', "'", $price);
                        $price = str_replace("\'", "'", $price);
                        $sql = "SELECT * FROM Articles WHERE city='$city' 
                        AND WHERE price IN ($price) 
                        ORDER BY created_at DESC LIMIT 40";
    
                        $result = mysqli_query($conn,$sql);  
                        $rows = mysqli_num_rows($result);
                        retrieveArticleInformation($result, $rows);
                    }
                    else if($price == "All"){ //ignore price
                        $sql = "SELECT * FROM Articles WHERE city='$city' 
                        ORDER BY created_at DESC LIMIT 40";
    
                        $result = mysqli_query($conn,$sql);  
                        $rows = mysqli_num_rows($result);
                        retrieveArticleInformation($result, $rows);
                    }
                    else{ //single price value, dont ignore price
                        $sql = "SELECT * FROM Articles WHERE city='$city' 
                        AND WHERE price='$price'
                        ORDER BY created_at DESC LIMIT 40";
    
                        $result = mysqli_query($conn,$sql);  
                        $rows = mysqli_num_rows($result);
                        retrieveArticleInformation($result, $rows);
                    }
                }
                else{ //not array, do not ignore purpose
                    if(strpos($price, ',') == true){ //price == array, dont ignore
                        $price = str_replace('"', "'", $price);
                        $price = str_replace("\'", "'", $price);

                        $sql = "SELECT * FROM Articles WHERE city='$city' 
                        AND WHERE price IN ($price) AND WHERE type='$purpose'
                        ORDER BY created_at DESC LIMIT 40";
    
                        $result = mysqli_query($conn,$sql);  
                        $rows = mysqli_num_rows($result);
                        retrieveArticleInformation($result, $rows);
                    }
                    else if($price == "All"){ //ignore price
                        $sql = "SELECT * FROM Articles WHERE city='$city' 
                        AND WHERE type='$purpose'
                        ORDER BY created_at DESC LIMIT 40";
    
                        $result = mysqli_query($conn,$sql);  
                        $rows = mysqli_num_rows($result);
                        retrieveArticleInformation($result, $rows);
                    }
                    else{ //single price value, dont ignore
                        $sql = "SELECT * FROM Articles WHERE city='$city' 
                        AND WHERE type='$purpose' AND WHERE price='$price'
                        ORDER BY created_at DESC LIMIT 40";
    
                        $result = mysqli_query($conn,$sql);  
                        $rows = mysqli_num_rows($result);
                        retrieveArticleInformation($result, $rows);
                    }
                }
            }
        }
        else if(strpos($region, ',') == false && 
        strpos($city, ',') == true){ //city is array, continue with city
            $city = str_replace('"', "'", $city);
            $city = str_replace("\'", "'", $city);
            if(strpos($purpose, ',') == true){ //purpose is array
                $purpose = str_replace('"', "'", $purpose);
                $purpose = str_replace("\'", "'", $purpose);
                if(strpos($price, ',') == true){ //price == array, dont ignore
                    $price = str_replace('"', "'", $price);
                    $price = str_replace("\'", "'", $price);

                    $sql = "SELECT * FROM Articles WHERE city IN ($city) 
                    AND WHERE type IN ($purpose) AND WHERE price IN ($price)
                    ORDER BY created_at DESC LIMIT 40";

                    $result = mysqli_query($conn,$sql);  
                    $rows = mysqli_num_rows($result);
                    retrieveArticleInformation($result, $rows);
                }
                else if($price == "All"){ //ignore price
                    $sql = "SELECT * FROM Articles WHERE city IN ($city) 
                    AND WHERE type IN ($purpose) 
                    ORDER BY created_at DESC LIMIT 40";

                    $result = mysqli_query($conn,$sql);  
                    $rows = mysqli_num_rows($result);
                    retrieveArticleInformation($result, $rows);
                }
                else{ //single price value, dont ignore price
                    $sql = "SELECT * FROM Articles WHERE city IN ($city) 
                    AND WHERE type IN ($purpose) AND WHERE price='$price'
                    ORDER BY created_at DESC LIMIT 40";

                    $result = mysqli_query($conn,$sql);  
                    $rows = mysqli_num_rows($result);
                    retrieveArticleInformation($result, $rows);
                }
            }
            else if($purpose == "All"){ // ignore purpose
                if(strpos($price, ',') == true){ //price == array, dont ignore
                    $price = str_replace('"', "'", $price);
                    $price = str_replace("\'", "'", $price);

                    $sql = "SELECT * FROM Articles WHERE city IN ($city) 
                    AND WHERE price IN ($price)
                    ORDER BY created_at DESC LIMIT 40";

                    $result = mysqli_query($conn,$sql);  
                    $rows = mysqli_num_rows($result);
                    retrieveArticleInformation($result, $rows);
                }
                else if($price == "All"){ //ignore price
                    $sql = "SELECT * FROM Articles WHERE city IN ($city) 
                    ORDER BY created_at DESC LIMIT 40";

                    $result = mysqli_query($conn,$sql);  
                    $rows = mysqli_num_rows($result);
                    retrieveArticleInformation($result, $rows);
                }
                else{ //single price value, dont ignore
                    $sql = "SELECT * FROM Articles WHERE city IN ($city) 
                    AND WHERE price='$price'
                    ORDER BY created_at DESC LIMIT 40";

                    $result = mysqli_query($conn,$sql);  
                    $rows = mysqli_num_rows($result);
                    retrieveArticleInformation($result, $rows);
                }
            }
            else{ //not array, do not ignore purpose
                if(strpos($price, ',') == true){ //price == array, dont ignore
                    $price = str_replace('"', "'", $price);
                    $price = str_replace("\'", "'", $price);
                    $sql = "SELECT * FROM Articles WHERE city IN ($city) 
                    AND WHERE type='$purpose' AND WHERE price IN ($price)
                    ORDER BY created_at DESC LIMIT 40";

                    $result = mysqli_query($conn,$sql);  
                    $rows = mysqli_num_rows($result);
                    retrieveArticleInformation($result, $rows);
                }
                else if($price == "All"){ //ignore price
                    $sql = "SELECT * FROM Articles WHERE city IN ($city) 
                    AND WHERE type='$purpose'
                    ORDER BY created_at DESC LIMIT 40";

                    $result = mysqli_query($conn,$sql);  
                    $rows = mysqli_num_rows($result);
                    retrieveArticleInformation($result, $rows);
                }
                else{ //single price value, dont ignore
                    $sql = "SELECT * FROM Articles WHERE city IN ($city) 
                    AND WHERE type='$purpose' AND WHERE price='$price'
                    ORDER BY created_at DESC LIMIT 40";

                    $result = mysqli_query($conn,$sql);  
                    $rows = mysqli_num_rows($result);
                    retrieveArticleInformation($result, $rows);
                }
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
    else if($requestId == 5){
        $region = $conn->real_escape_string($_GET['region']);
        $city = $conn->real_escape_string($_GET['city']);
        $purpose = $conn->real_escape_string($_GET['purpose']);
        $role = $conn->real_escape_string($_GET['role']);
        $price = $conn->real_escape_string($_GET['price']);
    }
    else if($requestId == 6){
        $articleid = $conn->real_escape_string($_GET['articleId']);

        $sql = "SELECT * FROM Articles WHERE articleid='$articleid'";

        $result = mysqli_query($conn,$sql);  
        $rows = mysqli_num_rows($result);

        retrieveArticleInformation($result, $rows);
    }
    else if($requestId == 7){
        $accountid = $conn->real_escape_string($_GET['accountid']);

        $sql = "SELECT * FROM Accounts WHERE accountId='$accountid'";

        $result = mysqli_query($conn,$sql);  
        $rows = mysqli_num_rows($result);

        $rs=mysqli_fetch_array($result);
        $role = $rs['role'];
        $role = utf8_encode($role);

        echo (json_encode($role));
    }
    else{
        echo ("error in fetching data");
    }

    function retrieveArticleInformation($result, $rows){
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
                $points[$i][8]=($date);
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

    mysqli_close($conn);
?>