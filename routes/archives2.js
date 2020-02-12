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

    MySQL STATEMENTS

    These are used to grab information from the database.

*/

/*

    HOUME ID LOGIN GET REQUEST

    FUNCTION: Grabs the webpage houme. Can display information
    from the database.

    Description: It does this by grabbing the houme file.
    It replaces any variables in the pug file with data from
    the database.

*/

home_router.get('/:student_id', ensureAuthenticated, function(req, res) {
    var id = req.params.student_id;

    if (!fs.existsSync('./TheArchives/' + id)){
        res.redirect('/houme/admin');
    }
    else{
        fs.readdir('./TheArchives/' + id, (err, files) => {
            if(err){
                console.log(err);
                return res.redirect('/errorpage');
            }
            res.render('archive2', {filenames: files, student_id: id});
        });
    }
});


/*

    HOUME BASIC POST REQUEST

    FUNCTION: Grabs any submitted data from the user.
    It can pull information from textboxes submitted by the
    user.

    Description: It does this by using the body parser and
    pulling the data from the textbox name. It then passes it
    into the node js file and can be used about freely.

*/

home_router.post('/', ensureAuthenticated, function(req, res){  
    console.log("Hello");
});


module.exports = home_router;