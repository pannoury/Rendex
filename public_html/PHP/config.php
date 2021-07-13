<?php
    session_start();
    $conn = mysqli_connect(
    'mysql44.unoeuro.com', 
    'rendex_se', 
    '3411bRendex', 
    'rendex_se_db',
    );
    if(!$conn){
        die("Connection failed: " . mysqli_connect_error());
    };
?>