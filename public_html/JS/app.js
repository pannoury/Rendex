
var mysql = require('mysql');

var conn = mysql.createConnection({
    host: "mysql44.unoeuro.com",
    port: "3306",
    user: "rendex_se",
    password: "3411bRendex",
    database: "rendex_se_db",

});

conn.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
});

con.query('SELECT * FROM Accounts WHERE username = ? AND password = ?')