const mysql = require("mysql2");
const express = require("express");

const app = express();

const conn = mysql.createConnection({
    host: 'sql.freedb.tech',
    password:'2$sZHGh8aXRKPrp',
    user: 'freedb_johan-admin2',
    database:'freedb_testfreedb',
});


app.get("/", (req,res)=>{
    conn.query("SELECT * FROM numbers", (err, result)=>{
        res.json(result[0]);
    })
});

app.listen(3000);