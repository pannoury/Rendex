<?php
    include "config.php";

    $valid_extensions = array('jpeg', 'jpg', 'png', 'gif'); // valid extensions
    $path = '../Uploads/'; // upload directory
    
    if(!empty($_POST['name']) || !empty($_POST['email']) || $_FILES['profilepicture']){
    $img = $_FILES['profilepicture']['name'];
    $tmp = $_FILES['profilepicture']['tmp_name'];
    
    // get uploaded file's extension
    $ext = strtolower(pathinfo($img, PATHINFO_EXTENSION));
    
    // can upload same image using rand function
    $final_image = rand(1000,1000000).$img;
    
    // check's valid format
    if(in_array($ext, $valid_extensions)) { 
        $path = $path.strtolower($final_image); 
    
        if(move_uploaded_file($tmp,$path)) {
            echo json_encode($path);
            $name = $_POST['name'];
            $email = $_POST['email'];
        }
    //include database configuration file
    //include_once 'db.php';
    
    //insert form data in the database
    //$insert = $db->query("INSERT uploading (name,email,file_name) VALUES ('".$name."','".$email."','".$path."')");
    
    //echo $insert?'ok':'err';
    } 
    else {
        echo 'invalid';
    }}

    mysqli_close($conn);

?>