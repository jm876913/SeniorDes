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
//Require MySQL for database needs
const path = require('path');
//Require path to find the diretory name

const error_router = express.Router();
//Create a router to route the traffic
const error_app = express();
//Setup a variable for express

/*

    PUG ENGINE

    This code allows us to convert the PUG files
    into viewable html with the addition of the
    replacement of variables with database information.

*/
error_app.set('view engine', 'pug');
error_app.use(express.static(path.join(__dirname, 'views')));

/*

    ERROR PAGE BASIC GET REQUEST

    FUNCTION: Grabs the webpage houme. Can display information
    from the database.

    Description: It does this by grabbing the houme file.
    It replaces any variables in the pug file with data from
    the database.

*/

// error_router.get('/:student_id/:catalog_year', function(req, res){
//     res.render('errorpage_prog_study');
// });
// renders error page for delete student page
error_router.get('/', function(req, res) {
   res.render('errorpage_deleteStudent');
});

// error_router.get('/apchange', function(req, res) {
//     res.render('errorpageapchange');
//  });


// error_router.get('/student', function(req, res) {
//     res.render('errorpage2');
//  });
/*

    ERROR PAGE BASIC POST REQUEST

    FUNCTION: Grabs any submitted data from the user.
    It can pull information from textboxes submitted by the
    user.

    Description: It does this by using the body parser and
    pulling the data from the textbox name. It then passes it
    into the node js file and can be used about freely.

*/

error_router.post('/', function(req, res){
    res.render('errorpage_deleteStudent');
});


module.exports = error_router;