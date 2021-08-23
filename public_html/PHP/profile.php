<?php
    include "config.php";

    if(isset($_GET['userid']) && isset($_GET['role'])){
        $id = $conn->real_escape_string($_GET['userid']);
        $role = $conn->real_escape_string($_GET['role']);

        if($role == 1){ //Individuals

            $sql = "SELECT * FROM Individuals WHERE accountId='$id'";

            $result = mysqli_query($conn,$sql);
            $row = mysqli_fetch_array($result);
            if(mysqli_num_rows($result) > 0){
                $matchid = utf8_encode(1);
                $firstName = utf8_encode($row['firstname']);
                $lastName = utf8_encode($row['lastname']);
                $email = utf8_encode($row['email']);
                $personNumber = utf8_encode($row['personnumber']);
                $streetAdress = utf8_encode($row['streetadress']);
                $streetNumber = utf8_encode($row['streetnumber']);
                $zipCode = utf8_encode($row['zipcode']);
                $phonenumber = utf8_encode($row['phonenumber']);
                $description = utf8_encode($row['description']);
                $website = utf8_encode($row['website']);
                $img = utf8_encode($row['profilepicture']);
                $results = array(
                    0 => $matchid,
                    1 => $firstName,
                    2 => $lastName,
                    3 => $email,
                    4 => $personNumber,
                    5 => $streetAdress,
                    6 => $streetNumber,
                    7 => $zipCode,
                    8 => $phonenumber,
                    9 => $img,
                    10 => $description,
                    11 => $website
                );

                echo (json_encode($results));
            }
            else{
                $matchid = 0;

                $results = array(
                    0 => $matchid,
                );

                echo (json_encode($results));
            }
        }
        else if($role == 2){ //organisations

        }
    }
    else if(isset($_GET['requestid'])){
        if(isset($_GET['userid'])){
            $requestid = $conn->real_escape_string($_GET['requestid']);
            if($requestid == 1){
                $id = $conn->real_escape_string($_GET['userid']);

                $sql = "SELECT * FROM Articles WHERE review_id='$id';";
    
                $result = mysqli_query($conn,$sql) or die(mysqli_error($conn, $sql));
                $row = mysqli_fetch_array($result);

                if(mysqli_num_rows($result) >= 1){
                    $resultAvg = mysqli_query($conn, $sql);
                    $matchid = utf8_encode(1);
                    $reviewText = utf8_encode($row['review_text']);
                    $reviewRating = utf8_encode($row['review_rating']);
                    $results = array(
                        0 => $matchid,
                        1 => $reviewText,
                        2 => $reviewRating,
                    );
    
                    echo json_encode($results);
                }
                else{
                    $matchid = 0;
    
                    $results = array(
                        0 => $matchid,
                    );
    
                    echo (json_encode($results));
                }
            }
            else if($requestid == 2){
                $id = $conn->real_escape_string($_GET['userid']);

                $sql = "SELECT AVG(review_rating) FROM Articles WHERE review_id='$id'";
    
                $result = mysqli_query($conn,$sql) or die(mysqli_error($conn, $sql));
                $row = mysqli_fetch_array($result);

                if(mysqli_num_rows($result) >= 1){
                    $results = array(
                        0 => $matchid,
                        1 => $reviewText,
                        2 => $reviewRating,
                        3 => $avg,
                    );
    
                    echo json_encode($results);
                }
                else{
                    $matchid = 0;
    
                    $results = array(
                        0 => $matchid,
                    );
    
                    echo (json_encode($results));
                }
            }
        }
    }
    else{
        echo json_encode(0);
    }

    mysqli_close($conn);
?>