/*
*
*   admin Page Js
*   Filename: admin.js
*
*
*/


var express = require('express');
/*  

    Express is a huge library used for many things
    In this file Express is used to create routes and 
    handle http requests.

*/
var db = require('./db');
//Require for database needs
var path = require('path');
//Require path to find the diretory name

var admin_router = express.Router();
//Create a router to route the traffic
var admin_app = express();
//Setup a variable for express

//Include Authentication
var { ensureAuthenticated } = require('../routes/auth');

/*

    PUG ENGINE

    This code allows us to convert the PUG files
    into viewable html with the addition of the
    replacement of variables with database information.

*/
admin_app.set('view engine', 'pug');
admin_app.use(express.static(path.join(__dirname, './views')));

/*
    This Code is used to let Expess
    know we are using some of its 
    packages.

*/


/*

    admin BASIC GET REQUEST

*/


admin_router.get('/', ensureAuthenticated, function (req, res) {
    if(req.user.type != 'admin'){
        res.redirect('/errorpage_administration');
    }
    var getaccounts = "SELECT accfname, acclname, username FROM accounts;";
    db.query(getaccounts, function (err, information) {
        if(err){
            res.redirect('/errorpage_administration');
        }
        res.render('administration', {accounts: information});
    });
});



module.exports = admin_router;
