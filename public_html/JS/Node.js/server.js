const http = require("http");
const express = require('express');
const app = express();

const mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'mysql44.unoeuro.com', 
    user: 'rendex_se', 
    password: '3411bRendex', 
    databse: 'rendex_se_db',
});

conn.connect(function(err){
    if(err) throw err;
    console.log("Connected");
});

app.get('/getposts', (req, response) => {
    let sql = 'SELECT * FROM chatdb WHERE active=1 GROUP BY chat_id ORDER BY chat_time DESC'; 
    let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
    })
})