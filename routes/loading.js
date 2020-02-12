/*
*
*   Loading Page Js
*   Filename: loading.js
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

const load_router = express.Router();
//Create a router to route the traffic
const load_app = express();
//Setup a variable for express

/*

    PUG ENGINE

    This code allows us to convert the PUG files
    into viewable html with the addition of the
    replacement of variables with database information.

*/
load_app.set('view engine', 'pug');
load_app.use(express.static(path.join(__dirname, 'views')));


//Include Authentication
const { ensureAuthenticated } = require('../routes/auth');

/*

    LOADING WAIT FUNCTION

*/

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }

 function get(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err))
  })
}

/*

    LOADING BASIC GET REQUEST


*/


load_router.get('/', ensureAuthenticated, function(req, res) {
 
    res.render('loading2');
});

load_router.get('/', ensureAuthenticated, function(req, res) {
    var advisor_url_id = req.user.username;
    res.render('loading', {
        id_advisor: advisor_url_id
    });
});

/*

    LOADING BASIC POST REQUEST


*/

load_router.post('/admin', ensureAuthenticated, function(req, res){

    res.render('/adminpage');
});

load_router.post('/', ensureAuthenticated, function(req, res){
    var advisor_url_id = req.user.username;
    res.render('houme', {
        id_advisor: advisor_url_id
    });
});

module.exports = load_router;