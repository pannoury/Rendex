<?php
    $conn = mysqli_connect(
    'mysql44.unoeuro.com', 
    'rendex_se', 
    '3411bRendex', 
    'rendex_se_db'
    );
    if(mysqli_connect_errno()){
        echo 'Failed to Connect to server'
    }
?>