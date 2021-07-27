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
    
/*
    session_start();
    $conn = mysqli_connect(
    '127.0.0.1:3306',
    'root', 
    "", 
    'rendex',
    '3306',
    );
    if(!$conn){
        die("Connection failed: " . mysqli_connect_error());
    };
    */
?>