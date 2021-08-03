var mysql = require('mysql');

var con = mysql.createConnection({
    host: "mysql44.unoeuro.com",
    port: "3306",
    user: "rendex_se",
    password: "3411bRendex",
    database: "rendex_se_db",

});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
});