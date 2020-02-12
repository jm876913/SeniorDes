/*
*
*   Logout Page Js
*   Filename: logout.js
*
*
*/


const express = require('express');
/*  

    Express is a huge library used for many things
    In this file Express is used to create routes and 
    handle http requests.

*/
const path = require('path');
//Require path to find the diretory name

const logout_router = express.Router();
//Create a router to route the traffic
const logout_app = express();
//Setup a variable for express
const passport = require('passport');
//Include Passport


/*

    PUG ENGINE

    This code allows us to convert the PUG files
    into viewable html with the addition of the
    replacement of variables with database information.

*/
logout_app.set('view engine', 'pug');
logout_app.use(express.static(path.join(__dirname, './views')));

/*
    This Code is used to let Expess
    know we are using some of its 
    packages.

*/

// Logout
logout_router.get('/logout', (req, res) => {
    req.logout();
    //req.flash('success_msg', 'You are logged out');
    res.redirect('/');
  });

module.exports = logout_router;
