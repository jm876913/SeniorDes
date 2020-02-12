/*
*
*   Houme Page Js
*   Filename: houme.js
*
*   This file handles all http requests made
*    to the houme webpage.
*
*/


const express = require('express');
/*  

    Express is a huge library used for many things
    In this file Express is used to create routes and 
    handle http requests.

*/
var db = require('./db');
//Require MySQL for database needs
const path = require('path');
//Require path to find the diretory name

const home_router = express.Router();
//Create a router to route the traffic
const home_app = express();
//Setup a variable for express

//Require Authentication
const { ensureAuthenticated } = require('../routes/auth');

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
home_app.set('view engine', 'pug');
home_app.use('/', express.static(path.join(__dirname, 'views')));


/*

    MySQL STATEMENTS

    These are used to grab information from the database.

*/

/*

    HOUME ID LOGIN GET REQUEST

    FUNCTION: Grabs the webpage houme. Can display information
    from the database.

    Description: It does this by grabbing the houme file.
    It replaces any variables in the pug file with data from
    the database.

*/

home_router.get('/', ensureAuthenticated, function(req, res) {
    var newid = req.user.username;

    var grabstudent = "SELECT * FROM etm.advises e, etm.student s WHERE e.pid = s.PID and e.advisorid = ? ORDER BY s.lname";
    var advisor_email = "SELECT accfname, acclname, email FROM etm.accounts a WHERE a.username = ?;";

    db.query(advisor_email, newid, (err, b) => {
        //console.log("This is b: \n" + b[0].email);
        
        if(err){
            console.log(err);
            return res.redirect('/errorpage_houme');
        }

        if(b.length < 1){
            console.log("Unknown Username");
            return res.redirect('/errorpage_houme');
        }
        db.query(grabstudent, b[0].email, (err, a) => {
            
            
            if(err){
                console.log(err);
                return res.redirect('/errorpage_houme');
            }
            res.render('houme', {students: a, id_advisor: newid, ad_fname: b[0].accfname, ad_lname: b[0].acclname}, function(err, html) {
                if(err) {
                    console.log(err);
                    res.redirect('/errorpage_houme');
                }
                else{
                    res.send(html);
                }
            });
        });
    });

});

home_router.get('/admin', ensureAuthenticated, function(req, res) {
    if(req.user.type != 'admin'){
        res.redirect('/errorpage_houme');
    }
    var grabstudent = "SELECT * FROM etm.advises e, etm.student s GROUP BY s.pid ORDER BY s.lname;";

        db.query(grabstudent, (err, a) => {
            if(err){
                console.log(err);
                return res.redirect('/admin_error');
            }
            res.render('houme2', {students: a}, function(err, html) {
                if(err) {
                    console.log(err);
                    res.redirect('/admin_error');
                }
                else{
                    res.send(html);
                }
            });
        });
});

home_router.get('/changepassword', ensureAuthenticated, function(req, res) {
    res.render('changepasswordhome', {identification: req.user.username});
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

home_router.post('/', ensureAuthenticated, function(req, res){  
    res.render('houme');
});


home_router.post('/changepassword', ensureAuthenticated, function (req, res) {

    if(req.body.password == req.body.password2){
        var username = req.user.username;
        
            bcrypt.genSalt(saltRounds, function(err, salt) {
                if(err){
                    console.log("1");
                    res.redirect('/errorpage_houme');
                }
                bcrypt.hash(req.body.password, salt, function(err, hash) {
                    if(err){
                        console.log("2");
                        res.redirect('/errorpage_houme');
                    }
                    db.query("UPDATE accounts SET password = ? WHERE username = ?", [hash, username], (err, abc) => {
                        if(err){
                            console.log("3");
                            res.redirect('/errorpage_houme');
                        }
                        else{
                            console.log("4");
                            res.redirect('/houme');
                        }
                    });
                }); 
            }); 
    }
    else{
        console.log("5");
        res.redirect('/errorpage_houme');
    }
});

module.exports = home_router;