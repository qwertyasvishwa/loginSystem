'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/select', function (req, res) {

    var mysql = require('mysql');
    var mydata = "";
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
                    res.render('select', { title: 'Select Code', mydata: mydata });
                }
            });

        });
    });
});

module.exports = router;
