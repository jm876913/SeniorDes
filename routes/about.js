/*
*
*   About Page Js
*   Filename: about.js
*
*
*/


var express = require('express');
/*  

    Express is a huge library used for many things
    In this file Express is used to create routes and 
    handle http requests.

*/
var path = require('path');
//Require path to find the diretory name

var router_about = express.Router();
//Create a router to route the traffic
var about_app = express();
//Setup a variable for express

/*

    PUG ENGINE

    This code allows us to convert the PUG files
    into viewable html with the addition of the
    replacement of variables with database information.

*/
about_app.set('view engine', 'pug');
about_app.use(express.static(path.join(__dirname, 'views')));


/*

    ABOUT GET REQUEST

    FUNCTION: Grabs the webpage houme. Can display information
    from the database.

    Description: It does this by grabbing the houme file.
    It replaces any variables in the pug file with data from
    the database.

*/


router_about.get('/', function(req, res){
    res.render('about');
});

/*

    ABOUT POST REQUEST

    FUNCTION: Grabs any submitted data from the user.
    It can pull information from textboxes submitted by the
    user.

    Description: It does this by using the body parser and
    pulling the data from the textbox name. It then passes it
    into the node js file and can be used about freely.

*/

router_about.post('/', function(req, res){
    res.render('about');
});


module.exports = router_about;