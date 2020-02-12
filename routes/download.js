/*
*
*   Houme Page Js
*   Filename: houme.js
*
*   This file handles all http requests made
*    to the houme webpage.
*
*/


const express = require('express');
/*  

    Express is a huge library used for many things
    In this file Express is used to create routes and 
    handle http requests.

*/
var db = require('./db');
//Require MySQL for database needs
const path = require('path');
//Require path to find the diretory name

const fs = require('fs');
//Require Filesystem

const home_router = express.Router();
//Create a router to route the traffic
const home_app = express();
//Setup a variable for express

//Require Authentication
const { ensureAuthenticated } = require('../routes/auth');

/*

    PUG ENGINE

    This code allows us to convert the PUG files
    into viewable html with the addition of the
    replacement of variables with database information.

*/
home_app.set('view engine', 'pug');
home_app.use('/', express.static(path.join(__dirname, 'views')));


/*

    HOUME ID LOGIN GET REQUEST

    FUNCTION: Grabs the webpage houme. Can display information
    from the database.

    Description: It does this by grabbing the houme file.
    It replaces any variables in the pug file with data from
    the database.

*/

home_router.get('/manual', ensureAuthenticated, function (req, res) {
    var file = './views/assets/manuals/Manual-basic.pdf';
    res.download(file); // Set disposition and send it.
    if(err){
        console.log(err);
        res.redirect('errorpage_download');
    }
    
});

home_router.get('/:student/:filename', ensureAuthenticated, function(req, res) {
    var thename = req.params.filename;
    var id = req.params.student;
    var file = './TheArchives/' + id + '/' + thename;
    res.download(file); // Set disposition and send it.
});


module.exports = home_router;