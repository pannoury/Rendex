<?php
    include "config.php";

    if(isset($_POST['requestid'])){
        $requestidPost = $conn->real_escape_string($_POST['requestid']);

        if($requestidPost == 1 && isset($_POST['articleId'])){
            $articleId = $conn->real_escape_string($_POST['articleId']);

            $sql = "UPDATE Articles 
            SET article_views = article_views + 1 
            WHERE articleid='$articleId'";
            $result = mysqli_query($conn,$sql);

            $rows = mysqli_affected_rows($conn);

            if($rows > 0){
                echo (json_encode(1));
            }
            else{
                echo (json_encode(0));
            }
        }
    }
    else if(isset($_GET['requestid'])){
        $requestid = $conn->real_escape_string($_GET['requestid']);

        if($requestid == 1 && isset($_GET['articleId'])){
            $articleId = $conn->real_escape_string($_POST['articleId']);

            $sql = "SELECT Articles 
            SET article_views = article_views + 1 
            WHERE articleid='$articleId'";
            $result = mysqli_query($conn,$sql);

            if(mysqli_num_rows($result) > 0){
                echo (json_encode(1));
            }
            else{
                echo (json_encode(0));
            }
        }
    }


    mysqli_close($conn);

?>