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

const privacy_router = express.Router();
//Create a router to route the traffic
const privacy_app = express();
//Setup a variable for express

/*

    PUG ENGINE

    This code allows us to convert the PUG files
    into viewable html with the addition of the
    replacement of variables with database information.

*/
privacy_app.set('view engine', 'pug');
privacy_app.use(express.static(path.join(__dirname, 'views')));


/*

    License BASIC GET REQUEST

*/


privacy_router.get('/', function(req, res) {
    res.render('privacypolicy');
});

/*

    License BASIC POST REQUEST


*/

privacy_router.post('/', function(req, res){
    res.render('privacypolicy');
});


module.exports = privacy_router;