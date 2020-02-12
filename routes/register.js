/*
*
*   Registration Js
*   Filename: register.js
*
*/


const express = require('express');
/*  

    Express is a huge library used for many things
    In this file Express is used to create routes and 
    handle http requests.

*/
const db = require('./db');
//Require for database needs
const path = require('path');
//Require path to find the diretory name

const register_router = express.Router();
//Create a router to route the traffic
const register_app = express();
//Setup a variable for express

const bcrypt = require('bcrypt');
//Require BCRYPT for encrypting passwords
const saltRounds = 12;
//REV up the Salting to 10

/*

    PUG ENGINE

    This code allows us to convert the PUG files
    into viewable html with the addition of the
    replacement of variables with database information.

*/
register_app.set('view engine', 'pug');
register_app.use(express.static(path.join(__dirname, 'views')));


/*

    MySQL Connection

    This creates a connection to the database
    and creates an unlimited number of 
    connections.

*/

/*

    Register BASIC GET REQUEST

    FUNCTION: Grabs the webpage houme. Can display information
    from the database.

    Description: It does this by grabbing the houme file.
    It replaces any variables in the pug file with data from
    the database.

*/
register_router.get('/', function(req, res){
    res.render('register');
});


/*

    REGISTER BASIC GET REQUEST

*/
register_router.get('/error', function(req, res){
    res.render('register2');
});


/*

    Register BASIC POST REQUEST

    FUNCTION: Grabs any submitted data from the user.
    It can pull information from textboxes submitted by the
    user.

    Description: It does this by using the body parser and
    pulling the data from the textbox name. It then passes it
    into the node js file and can be used about freely.

*/

register_router.post('/', function (req, res) {
    //We need to deal with duplicate entries.
    if(req.body.password == req.body.password2){
        if (req.body.toggle == 'atype') {
            bcrypt.genSalt(saltRounds, function(err, salt) {
                bcrypt.hash(req.body.password, salt, function(err, hash) {
                    // Store hash in your password DB.
                    if(err){
                        res.redirect('/errorpage_register')
                    }
                    else{
                        const addadvisor = "INSERT INTO advisor VALUES( '" + req.body.email + "', '" + req.body.fname + "', '" + req.body.lname + "');";
                        const addaccount = "INSERT INTO accounts VALUES( '" + req.body.username + "', '" + hash + "', '" + req.body.email + "', '" + req.body.toggle + "', '" + req.body.fname + "', '" + req.body.lname + "');";
                        db.query(addadvisor, (err, advisoradd) => {
                            db.query(addaccount, (err, accountadd) => {
                                if (err) {
                                    console.log(err);
                                    return res.render('/errorpage_register', { error_data: err });
                                }
                                else {
                                    console.log("Successfully Added an Advisor");
                                    res.redirect('/login');
                                }
                            });
                        }); 
                    }
                });
            });
        }
        else if (req.body.toggle == 'stype') {
            bcrypt.genSalt(saltRounds, function(err, salt) {
                bcrypt.hash(req.body.password, salt, function(err, hash) {
                    // Store hash in your password DB.
                    if(err){
                        res.redirect('/errorpage_register')
                    }
                    else{
                        const addaccount = "INSERT INTO accounts VALUES( '" + req.body.username + "', '" + hash + "', '" + req.body.email + "', '" + req.body.toggle + "', '" + req.body.fname + "', '" + req.body.lname + "');";
                        db.query(addaccount, (err, accountadd) => {
                                if (err || accountadd.length == 0) {
                                    console.log(err);
                                    return res.render('/errorpage_register', { error_data: err });
                                }
                                else {
                                    console.log("Successfully Added a Student");
                                    res.redirect('/login');
                                }
                            });
                        }
                    });
                });
            }
        else {
            console.log("Something went wrong");
            return res.redirect('/errorpage', { error_data: 'Choose Advisor or student' });
        }
    }
    else{
        res.redirect('/register/error');
    }
});


module.exports = register_router;
