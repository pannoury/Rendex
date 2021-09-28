<?php

    include 'config.php';
    
    $requestId = $conn->real_escape_string($_GET['requestid']);

    if(isset($_GET['requestid']) && $requestId == 1){ //deprecated, archaic
        if(isset($_GET['region']) && isset($_GET['city']) && isset($_GET['purpose'])
        && isset($_GET['price']) && isset($_GET['rating']) && isset($_GET['role'])){
            $region = utf8_decode($_GET['region']);
            $city = (utf8_decode($_GET['city']));
            $category = ($_GET['purpose']);
            $price = ($_GET['price']);
            $rating = ($_GET['rating']);
            $role = ($_GET['role']);

            function createNull($value){
                if($value === "0" || $value === "undefined" || $value === 0){
                    return 'null';
                } 
                else{
                    return $value;
                }
            }

            $region = createNull($region);
            $city = createNull($city);
            $price = createNull($price);
            $category = createNull($category);



            $sql = "SELECT * 
            FROM Articles 
            WHERE ($region is null or ($region is not null and region in ($region)))
            AND ($city is null or ($city is not null and city IN ($city) ))
            AND ($price is null or ($price is not null and price IN ($price)))
            AND ($category is null or ($category is not null and category in ($category)))
            ORDER BY created_at DESC LIMIT 40";


            echo ($sql);

            $result = mysqli_query($conn,$sql);
            $rows = mysqli_num_rows($result);

            retrieveArticleInformation($result, $rows);
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
        //Empty??
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
    else if($requestId == 8){
        $region = $conn->real_escape_string($_GET['region']);
        $city = $conn->real_escape_string($_GET['city']);
        $purpose = $conn->real_escape_string($_GET['purpose']);
        $price = $conn->real_escape_string($_GET['price']);

        if($region == "Hela Sverige"){

        }
        $sql = "SELECT * FROM Articles WHERE region IN ($region) AND 
        price IN ($price) AND type IN ($purpose)
        ORDER BY created_at DESC LIMIT 40";

        $result = mysqli_query($conn,$sql);  
        $rows = mysqli_num_rows($result);

        retrieveArticleInformation($result, $rows);
    }
    else if(isset($_GET['requestid']) && isset($_GET['userid']) && $requestId == 9){
        $id = $conn->real_escape_string($_GET['userid']);

        $sql = "SELECT * FROM Articles 
        WHERE account_id='$id' 
        ORDER BY created_at DESC";

        $result = mysqli_query($conn,$sql);  
        $rows = mysqli_num_rows($result);

        retrieveArticleInformation($result, $rows);
    }
    else if(isset($_GET['requestid']) && $requestId == 9){
        if(isset($_GET['role'])){
            $role = $_GET['role'];
            if($role === "Uppdragsgivare" || $role === "0" || $role === null || $role === 0){
                $region = utf8_decode($_GET['region']);
                $city = utf8_decode($_GET['city']);
                $category = $_GET['purpose'];
                $price = $_GET['price'];
                $rating = $_GET['rating'];

                //Price Split in case priceLow & priceHigh Exists
                if(strpos($price, ',') == true && $price !== "0"){
                    $price = explode(",", $price, 2);
                    $price[1] = str_replace("'", "", $price[1]);
                }
                else{
                    $price === 0;
                }
                
                $sql = "SELECT * FROM Articles WHERE active='1'";
                
                //Region
                if(strpos($region, ',') == true && $region !== "0"){ //array
                    $sql .= " AND region IN ($region) ";
                }
                else if(strpos($region, ',') === false && $region !== "0"){
                    $sql .= " AND region='$region' ";
                }
                else if($region == "0" || $region === 0){
                }

                //City
                if(strpos($city, ',') === true && $city !== "0"){ //array
                    $sql .= " AND city IN ($city) ";
                }
                else if(strpos($city, ',') === false && $city !== "0"){
                    $sql .= " AND city='$city' ";
                }
                else if($city == 0 || $city === "0"){
                }

                //Category
                if(strpos($category, ',') === true && $category !== "0"){ //array
                    $sql .= " AND type IN ($category) ";
                }
                else if(strpos($category, ',') === false && $category !== "0"){
                    $sql .= " AND type='$category' ";
                }
                else if($category == "0"){
                }

                //Price
                if(!is_numeric($price[1]) && is_array($price)){
                    if($price[1] == "high"){
                        $priceHigh = str_replace("'", "", $price[0]);
                        $sql .= " AND price_high <= $priceHigh ";
                    }
                    else{
                        $priceLow = str_replace("'", "", $price[0]);
                        $sql .= " AND price_low >= $priceLow ";
                    }
                }
                else if(is_numeric($price[1])){
                    $priceLow = $price[0];
                    $priceHigh = $price[1];
                    $priceLow = str_replace("'", "", $priceLow);
                    $priceHigh = str_replace("'", "", $priceHigh);
                    $sql .= " AND price_low >= $priceLow ";
                    $sql .= " AND price_high <= $priceHigh ";
                }
                else{
                    //do nothing
                }
        
                $sql .= " ORDER BY created_at DESC LIMIT 40";

                if(isset($_GET['offset']) && $offset > 0){
                    $sql .= " OFFSET $offset";
                }
                
                //echo ($region);
                //echo ($sql);
        
                $result = mysqli_query($conn,$sql);
                $rows = mysqli_num_rows($result);
                
                if(isset($_GET['count'])){
                    echo ($rows);
                }
                else{
                    retrieveArticleInformation($result, $rows);
                }
                
            }
            else if($role === "Uppdragstagare"){

            }
        }
    }
    else if(isset($_GET['requestid']) && isset($_GET['articleid'])){
        if($requestId == 10){
            $id = $conn->real_escape_string($_GET['articleid']);

            $sql = "SELECT * FROM Articles WHERE articleid='$id' AND active='1'";
    
            $result = mysqli_query($conn,$sql);  
            $rows = mysqli_num_rows($result);

            retrieveArticleInformation($result, $rows);
        }

    }
    else{
        echo ("error in fetching data");
    }

    function retrieveArticleInformation($result, $rows){
        if(mysqli_num_rows($result) > 1){
            for($i=0; $i < $rows; $i++){
                $rs=mysqli_fetch_array($result);

                $accountid = utf8_encode($rs['account_id']);
                $articleid = utf8_encode($rs['articleid']);
                $city = utf8_encode($rs['city']);
                $region = utf8_encode($rs['region']);
                $articletext = utf8_encode($rs['articletext']);
                $type = utf8_encode($rs['type']);
                $articleCue = utf8_encode($rs['articlecue']);
                $priceLow = utf8_encode($rs['price_low']);
                $priceHigh = utf8_encode($rs['price_high']);
                $date = utf8_encode($rs['created_at']);
                $views = utf8_encode($rs['article_views']);

                $points[$i][0]=($accountid);
                $points[$i][1]=($articleid);
                $points[$i][2]=($city);
                $points[$i][3]=($region);
                $points[$i][4]=($articletext);
                $points[$i][5]=($type);
                $points[$i][6]=($articleCue);
                $points[$i][7]=($priceLow);
                $points[$i][8]=($priceHigh);
                $points[$i][9]=($date);
                $points[$i][10]=($views);
            }
            echo (json_encode($points));
        }
        else if(mysqli_num_rows($result) == 1){
            $rs=mysqli_fetch_array($result);

            $accountid = utf8_encode($rs['account_id']);
            $articleid = utf8_encode($rs['articleid']);
            $city = utf8_encode($rs['city']);
            $region = utf8_encode($rs['region']);
            $articletext = utf8_encode($rs['articletext']);
            $type = utf8_encode($rs['type']);
            $articleCue = utf8_encode($rs['articlecue']);
            $priceLow = utf8_encode($rs['price_low']);
            $priceHigh = utf8_encode($rs['price_high']);
            $date = utf8_encode($rs['created_at']);
            $views = utf8_encode($rs['article_views']);

            $results = array(
                0 => $accountid,
                1 => $articleid,
                2 => $city,
                3 => $region,
                4 => $articletext,
                5 => $type,
                6 => $articleCue,
                7 => $priceLow,
                8 => $priceHigh,
                9 => $date,
                10 => $views,
            );

            echo (json_encode($results));
        }
        else{
            echo (0);
        }
    }

    mysqli_close($conn);

?>