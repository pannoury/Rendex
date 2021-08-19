<?php

    include "config.php";

    $image = $_POST['path'];

    echo json_encode($image);

    if(unlink($image)){
        echo ("image removed");
    }
    else{
        echo ("there was a problem deleting the file");
    }

    mysqli_close($conn);
?>