/*
*
*   Delete Page Js
*   Filename: delete.js
*
*
*/


const express = require('express');
/*  

    Express is a huge library used for many things
    In this file Express is used to create routes and 
    handle http requests.

*/
var db = require('./db2');
//Require for database needs
const path = require('path');
//Require path to find the diretory name

const submit_router = express.Router();
//Create a router to route the traffic
const submit_app = express();
//Setup a variable for express

//Require Authentication
const { ensureAuthenticated } = require('../routes/auth');

/*

    PUG ENGINE

    This code allows us to convert the PUG files
    into viewable html with the addition of the
    replacement of variables with database information.

*/
submit_app.set('view engine', 'pug');
submit_app.use(express.static(path.join(__dirname, 'views')));

/*

    SUBMIT WAIT FUNCTION

*/

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }


/*

    SUBMIT BASIC GET REQUEST

    FUNCTION: Grabs the webpage houme. Can display information
    from the database.

    Description: It does this by grabbing the houme file.
    It replaces any variables in the pug file with data from
    the database.

*/

submit_router.get('/:student_pid', ensureAuthenticated, function(req, res) {
    var deletestudent = req.params.student_pid;
    if(deletestudent == '0'){
        return res.redirect('/errorpage_deleteStudent');
    }
    else{
        db.query("DELETE FROM etm.advises WHERE pid = ?;", deletestudent, (err, data1) => {
                if(err){
                    console.log(err);
                    return res.redirect('/errorpage_deleteStudent', { error_data: "That Student cannot be removed"});
                }
            db.query("DELETE FROM etm.enrolled_in WHERE PID = ?;  DELETE FROM etm.working_towards WHERE PID = ?; DELETE FROM etm.advises WHERE pid = ?; DELETE FROM etm.student WHERE PID = ?;", [deletestudent, deletestudent, deletestudent, deletestudent], (err, data2) => {
                if(err){
                    console.log(err);
                    return res.redirect('/errorpage_deleteStudent');
                }
                res.render('./subdelete', function(err, html) {
                    if(err) {
                        console.log(err);
                        res.redirect('/errorpage_deleteStudent');
                    }
                    else{
                        res.send(html);
                    }
                });
            });
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

submit_router.post('/', ensureAuthenticated, function(req, res){
    res.render('loaddelete');
});




module.exports = submit_router;