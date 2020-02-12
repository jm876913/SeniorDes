/*

    Server Js

    This Fille runs the server indefinetley.

*/


var express = require('express');
/*  

    Express is a huge library used for many things
    In this file Express is used to create routes and 
    handle http requests.

*/
var path = require('path');
//Require path to find the diretory name

var setserve_router = express.Router();
//Create a router to route the traffic
var setserve_app = express();
//Setup a variable for express
const passport = require('passport');
//Include Passport


//Require a Python Execute Framework
var { PythonShell } = require('python-shell');

/*

    PUG ENGINE

    This code allows us to convert the PUG files
    into viewable html with the addition of the
    replacement of variables with database information.

*/
setserve_app.set('view engine', 'pug');
setserve_app.use(express.static(path.join(__dirname, './views')));

/*
    This Code is used to let Expess
    know we are using some of its 
    packages.

*/



/*

    LOGIN BASIC GET REQUEST

*/



setserve_router.get('/', function (req, res){
  res.render('serve_login');
});


setserve_router.post('/', function (req, res) {

    if(req.body.password == 'Password!'){
     
      res.render('ServerSet'); 
    }
    else{
      res.render('errorpagemain', { error_data: "Invalid Login" });
    }
});


/*

    LOGIN BASIC POST REQUEST

    FUNCTION: Grabs any submitted data from the user.
    It can pull information from textboxes submitted by the
    user.

    Description: It does this by using the body parser and
    pulling the data from the textbox name. It then passes it
    into the node js file and can be used about freely.

*/

setserve_router.post('/set', function (req, res) {
  let options = {
    mode: 'text',
    pythonOptions: ['-u'],
    args: [req.body.host, req.body.dbusername, req.body.dbname, req.body.dbpassword]
  };

  PythonShell.run('./dbcreate.py', options, function (err, results) {
    if (err) {
      console.log(err);
    }
  });
  res.redirect('/');
});
module.exports = setserve_router;
