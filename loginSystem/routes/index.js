﻿'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
    var mysql = require('mysql');

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Windows@10",
        database: "vishwa_test"
    });

    con.connect(function (err) {
        if (err) throw err;
        con.query("SELECT * FROM user_details", function (err, results, fields) {
            if (err) throw err;
            results.forEach((element, i) => {
                // console.log(element.email);
                mydata = element.email;
                if (i == results.length - 1) {
                    res.render('index', { title: 'Routes Home', var1: c, mydata: mydata });
                }
            });

        });
    });
});

module.exports = router;
