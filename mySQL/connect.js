var mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "43129108ta"
})

con.connect(function(err) {
    if(err) throw err;
    console.log("connected")
})