/*
*
*   License Page Js
*   Filename: license.js
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

const lrouter = express.Router();
//Create a router to route the traffic
const lapp = express();
//Setup a variable for express

/*

    PUG ENGINE

    This code allows us to convert the PUG files
    into viewable html with the addition of the
    replacement of variables with database information.

*/
lapp.set('view engine', 'pug');
lapp.use(express.static(path.join(__dirname, 'views')));


/*

    License BASIC GET REQUEST

*/


lrouter.get('/', function(req, res) {
    res.render('license');
});

/*

    License BASIC POST REQUEST


*/

lrouter.post('/', function(req, res){
    res.render('license');
});


module.exports = lrouter;