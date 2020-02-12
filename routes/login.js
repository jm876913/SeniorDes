/*
*
*   Login Page Js
*   Filename: login.js
*
*
*/


const express = require('express');
/*  

    Express is a huge library used for many things
    In this file Express is used to create routes and 
    handle http requests.

*/
var db = require('./db');
//Require for database needs
const path = require('path');
//Require path to find the diretory name

const login_router = express.Router();
//Create a router to route the traffic
const login_app = express();
//Setup a variable for express
const passport = require('passport');
//Include Passport


/*

    PUG ENGINE

    This code allows us to convert the PUG files
    into viewable html with the addition of the
    replacement of variables with database information.

*/
login_app.set('view engine', 'pug');
login_app.use(express.static(path.join(__dirname, './views')));

/*
    This Code is used to let Expess
    know we are using some of its 
    packages.

*/



/*

    LOGIN BASIC GET REQUEST

*/


login_router.get('/', function (req, res) {
    res.render('login', {message: req.flash('loginMessage')});
});


/*

    LOGIN BASIC POST REQUEST

    FUNCTION: Grabs any submitted data from the user.
    It can pull information from textboxes submitted by the
    user.

    Description: It does this by using the body parser and
    pulling the data from the textbox name. It then passes it
    into the node js file and can be used about freely.

*/

login_router.post('/', 
    passport.authenticate('local-login', {
        failureRedirect: '/login',
        failureFlash: true
    }),
    function (request, response) {
        if (request.user.type == 'atype') {
            response.redirect('./houme');
            response.end();
        }
        else if (request.user.type == 'stype') {
            response.redirect('./student/programofstudy');
            response.end();
        }
        else if (request.user.type == 'admin') {
            response.redirect('./adminpage');
            response.end();
        }
        else {
            response.redirect('login/invalid');
        }
});


module.exports = login_router;
