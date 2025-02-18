const mysql = require("mysql2");
const express = require("express");
const fs = require("fs");

const app = express();

const conn = mysql.createConnection({
    host: 'mysql-375594f0-ga-3701.b.aivencloud.com',
    password:process.env.db_pass,
    user: 'avnadmin',
    database:'defaultdb',
    port:13188,
    ssl: {ca: fs.readFileSync(__dirname + '/mysql-ca.crt')}
});




app.get("/", (req,res)=>{
    conn.query("SELECT * FROM numbers", (err, result)=>{
        res.json(result[0]);
    })
});

app.listen(3000);