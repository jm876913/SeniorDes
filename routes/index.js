/*
*
*   Index Page Js
*   Filename: index.js
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

const index_router = express.Router();
//Create a router to route the traffic
const index_app = express();
//Setup a variable for express

/*

    PUG ENGINE

    This code allows us to convert the PUG files
    into viewable html with the addition of the
    replacement of variables with database information.

*/
index_app.set('view engine', 'pug');
index_app.use(express.static(path.join(__dirname, 'views')));


/*

    HOUME BASIC GET REQUEST

    FUNCTION: Grabs the webpage houme. Can display information
    from the database.

    Description: It does this by grabbing the houme file.
    It replaces any variables in the pug file with data from
    the database.

*/


index_router.get('/', function(req, res) {
    res.render('index');
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

index_router.post('/', function(req, res){

    res.render('index');
});


module.exports = index_router;