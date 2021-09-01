const http = requre("http");
const express = require('express');
const app = express();

const HOSTNAME = process.env.HOSTNAME || "mysql44.unoeuro.com"
const PORT = process.env.PORT


const mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'mysql44.unoeuro.com', 
    user: 'rendex_se', 
    password: '3411bRendex', 
    databse: 'rendex_se_db',
});

conn.connect(function(err)){
    if(err) throw err;
    console.log("Connected");
}