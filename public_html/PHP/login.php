<?php

    if(isset($_POST['login'])){
        $conn = new mysqli(
            'mysql44.unoeuro.com', 
            '3306',
            'rendex_se', 
            '3411bRendex', 
            'rendex_se_db',
        );

        $email = $conn->real_escape_string($_POST['email']);
        $password = $conn->real_escape_string($_POST['password']);

        $data = $conn->query("SELECT account_id FROM Accounts WHERE username='$email' AND password='$password'");
        if ($data->num_rows > 0){
            $_SESSION['loggedIN'] = '1';
            $_SESSION['email'] = $email;
            exit;
        } else {
            exit('failed to find');
        }
    }
/*
    require('config.php');

    // Get results
    $query = 'SELECT * FROM Accounts';
    $results = mysqli_query($conn, $query);

    //fetch data
    $posts = mysqli_fetch_all($results, MYSQLI_ASSOC);

    //free results
    mysqli_free_result($results);

    //close Connection
    mysqli_close($conn);
    */
?>