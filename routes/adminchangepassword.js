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
var db = require('./db'); /* Require for database needs */
var path = require('path'); /* Require path to find the diretory name */
var change_router = express.Router(); /* Create a router to route the traffic */
var change_app = express(); /* Setup a variable for express */
var bcrypt = require('bcrypt'); /* Require BCRYPT for encrypting passwords */
var saltRounds = 12; /* REV up the Salting to 10 */
var { ensureAuthenticated } = require('../routes/auth'); /* Require the Authentication Code */

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

    Description: This function is used to obtain the username
                  then allow the admin account to change the
                  password for that account.

*/


change_router.get('/:username', ensureAuthenticated, function (req, res) {
    res.render('changepassword', {
        identification: req.params.username
    });
});


/*

    CHANGE PASSWORD POST REQUEST

    Description: This function is used to actually change the
                 the password by checking that they are equal
                 then it will encrypt the passsword with bcrypt
                 then it will store it in the database.

*/



change_router.post('/:username', ensureAuthenticated, function (req, res) {
    if(req.body.password == req.body.password2){
        var username = req.params.username;
            bcrypt.genSalt(saltRounds, function(err, salt) {
                if(err){
                    console.log(err);
                    res.redirect('/admin_error');
                }
                bcrypt.hash(req.body.password, salt, function(err, hash) {
                    if(err){
                        console.log(err);
                        res.redirect('/admin_error');
                    }
                    console.log("here");
                    db.query("UPDATE accounts SET password = ? WHERE username = ?", [hash, username], function (err, abc) {
                        if(err){
                            console.log(err);
                            res.redirect('/admin_error');
                        }
                        else{
                            res.redirect('/admin_error');
                        }
                    });
                }); 
            }); 
    }
    else{
        res.redirect('/errorpage/apchange');
    }
});



module.exports = change_router;