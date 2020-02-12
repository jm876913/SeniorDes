/*
*
*   Change Password Page Js
*   Filename: changepassword.js
*
*
*/


var express = require('express');
/*  

    Express is a huge library used for many things
    In this file Express is used to create routes and 
    handle http requests.

*/
var db = require('./db');
//Require for database needs
var path = require('path');
//Require path to find the diretory name

var change_router = express.Router();
//Create a router to route the traffic
var change_app = express();
//Setup a variable for express

var bcrypt = require('bcrypt');
//Require BCRYPT for encrypting passwords
var saltRounds = 12;
//REV up the Salting to 10

/*

    PUG ENGINE

    This code allows us to convert the PUG files
    into viewable html with the addition of the
    replacement of variables with database information.

*/
change_app.set('view engine', 'pug');
change_app.use(express.static(path.join(__dirname, './views')));

/*

    CHANGE PASSWORD BASIC GET REQUEST

*/


change_router.get('/', function (req, res) {
    res.render('allchangepassword');
});


/*

    CHANGE PASSWORD POST REQUEST

*/



change_router.post('/', function (req, res) {
    if(req.body.password == req.body.password2){
        var username = req.body.usernamestuff;
        var passwordold = req.body.oldpassword;

        db.query('SELECT * FROM accounts WHERE username = ?', username, function (err, results) {
            if (err || results.length < 1) {
                console.log(err);
                res.redirect('/errorpage');
            }
            bcrypt.compare(passwordold, results[0].password, function(err, answer) {
                if(err){
                    res.redirect('/errorpage');
                }
                else if(answer == true){
                    if (results.length > 0) {
                        bcrypt.genSalt(saltRounds, function(err, salt) {
                            if(err){
                                console.log(err);
                                res.redirect('/errorpage');
                            }
                            bcrypt.hash(req.body.password, salt, function(err, hash) {
                                if(err){
                                    console.log(err);
                                    res.redirect('/errorpage');
                                }
                                db.query("UPDATE accounts SET password = ? WHERE username = ?", [hash, username], function (err, abc) {
                                    if(err){
                                        console.log(err);
                                        res.redirect('/errorpage');
                                    }
                                    else{
                                        res.redirect('./');
                                    }
                                });
                            }); 
                        }); 
                    }
                }
            });
        });
    }
    else{
        res.redirect('/errorpage');
    }
});



module.exports = change_router;