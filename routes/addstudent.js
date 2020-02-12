/*
*
*   Add Student Js
*   Filename: addstudent.js
*
*   This file handles the Add Student Feature for the
*   Advisor View
*
*/


var express = require('express');
/*  

    Express is a huge library used for many things
    In this file Express is used to create routes and 
    handle http requests.

*/

var path = require('path'); /* Require path to find the diretory name */
var formidable = require('formidable'); /* Require File Upload Framework */
var dars_router = express.Router(); /* Create a router to route the traffic */
var dars_app = express(); /* Setup a variable for express */
var shell = require('shelljs'); /* Shell used to run Python programs through Node.js */
var multer = require('multer'); /* Require multer for file upload */
var { PythonShell } = require('python-shell'); /* Require a Python Execute Framework */
var { ensureAuthenticated } = require('../routes/auth'); /* Requires the Authentication Code */

/*

    FILE UPLOAD SETUP

    This code is used to create a 
    way to upload files to the server.

*/
var storage =   multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, './Dars'); /* This function sets the storage to a folder called Dars */
    },
    filename: function (req, file, callback) {
        //Append the Students PID to this
        //Possibly the date too.
      callback(null, file.originalname);
    }
  });
var upload = multer({ storage : storage}); /* This Code is used to define a store device */



/*

    PUG ENGINE

    This code allows us to convert the PUG files
    into viewable HTML with the addition of the
    replacement of variables with database information.

*/
dars_app.set('view engine', 'pug');
dars_app.use(express.static(path.join(__dirname, '../views')));


/*

    DARS ADD ADVISOR GET REQUEST

    Description: Render the Add Student Webpage for 
                  User viewing through the HTTP GET Request.

*/
dars_router.get('/', ensureAuthenticated,  function(req, res){
    res.render('addstudent');
    // if(error){
    //     console.log(error);
    //     return res.redirect('/errorpage_addstudent');
    // }
});

/*

    DARS ADD ADVISOR GET REQUEST

    Description: Render the Add Student Webpage for
                  User viewing through the HTTP GET Request.

*/

dars_router.get('/admin', ensureAuthenticated,  function(req, res){
    res.render('addstudent2');
    // if(error){
    //     console.log(error);
    //     return res.redirect('/errorpage_addstudent');
    // }
});

/*

    DARS ADD ADVIORS POST REQUEST

    Description: Once someone submits on the Add
                 Student page then it will be directed to
                 this function where it will recieve the POST
                 request and execute the python program on the 
                 files placed in the DARS folder.

*/

dars_router.post('/', upload.array('DarsReport'), ensureAuthenticated, function (req, res) {
    
    try {
        shell.cd('Dars');
        shell.exec('pipenv run python DP2.py');
        shell.exec('rm -rf *.pdf');

    } catch (error) {
        console.log(error);
        return res.redirect('/errorpage_addstudent');
    }
    return res.redirect('/houme');
    
});

/*

    DARS ADD ADMIN POST REQUEST

    Description: It does this by using the body parser and
    pulling the data from the textbox name. It then passes it
    into the node js file and can be used about freely.

*/

dars_router.post('/admin', upload.array('DarsReport'), ensureAuthenticated, function (req, res) {
    try{
        shell.cd('Dars');
        shell.exec('pipenv run python DP2.py');
        shell.exec('rm -rf *.pdf');
    
    } catch(error){
        console.log(error);
        return res.redirect('/errorpage_addstudent');
    }

    return res.redirect('/adminpage');
});


module.exports = dars_router;
