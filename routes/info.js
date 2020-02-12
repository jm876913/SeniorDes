/*
*
*   Information Pages Js
*   Filename: courseloadingview.js
*
*   This file handles all http requests made
*   to the course loading view webpage.
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

const crouter = express.Router();
//Create a router to route the traffic
const capp = express();
//Setup a variable for express

//Include Authentication
const { ensureAuthenticated } = require('../routes/auth');

/*

    PUG ENGINE

    This code allows us to convert the PUG files
    into viewable html with the addition of the
    replacement of variables with database information.

*/
capp.set('view engine', 'pug');
capp.use(express.static(path.join(__dirname, 'views')));


/*

    Advisor Information/Help Pages

*/


crouter.get('/programofstudy/:student_url_id', ensureAuthenticated, function (req, res) {
    var advisor_id = req.user.username;
    var student_id = req.params.student_url_id;
    res.render('info_programofstudy', { id_student: student_id });
});

crouter.get('/programplanner/:student_url_id', ensureAuthenticated, function (req, res) {
    var advisor_id = req.user.username;
    var student_id = req.params.student_url_id;
    res.render('info_programplanner', { id_student: student_id });
});

crouter.get('/home', ensureAuthenticated, function (req, res) {
    var advisor_id = req.user.username;
    res.render('info_home');
});

crouter.get('/addstudent', ensureAuthenticated, function (req, res) {
    var advisor_id = req.user.username;
    res.render('info_addstudent');
});

crouter.get('/courseloadingviewbasic', ensureAuthenticated, function (req, res) {
    var advisor_id = req.user.username;
    res.render('info_basic_courseloadingview');
});


crouter.get('/courseloadingview/:student_url_id', ensureAuthenticated, function (req, res) {
    var advisor_id = req.user.username;
    var student_id = req.params.student_url_id;
    res.render('info_courseloadingview', { id_student: student_id });
});


/*

    Admin Information/Help Pages

*/

/*
    Student Views
*/

crouter.get('/admin/programofstudy/:student_url_id', ensureAuthenticated, function (req, res) {
    var advisor_id = req.user.username;
    var student_id = req.params.student_url_id;
    res.render('info_admin_programofstudy', { id_student: student_id });
});

crouter.get('/admin/programplanner/:student_url_id', ensureAuthenticated, function (req, res) {
    var advisor_id = req.user.username;
    var student_id = req.params.student_url_id;
    res.render('info_admin_programplanner', { id_student: student_id });
});

crouter.get('/admin/home', ensureAuthenticated, function (req, res) {
    var advisor_id = req.user.username;
    res.render('info_admin_home');
});

/*
    Home Pages & CLV's
*/

crouter.get('/admin/adminpage', ensureAuthenticated, function (req, res) {
    var advisor_id = req.user.username;
    res.render('info_admin_administration');
});

crouter.get('/admin/addstudent', ensureAuthenticated, function (req, res) {
    var advisor_id = req.user.username;
    res.render('info_admin_addstudent');
});

crouter.get('/admin/courseloadingviewbasic', ensureAuthenticated, function (req, res) {
    var advisor_id = req.user.username;
    res.render('info_admin_basic_courseloadingview');
});

crouter.get('/admin/courseloadingview/:student_url_id', ensureAuthenticated, function (req, res) {
    var advisor_id = req.user.username;
    var student_id = req.params.student_url_id;
    res.render('info_admin_courseloadingview', { id_student: student_id });
});

/*
    Index & Layouts
*/

crouter.get('/coursedit/index', ensureAuthenticated, function (req, res) {
    res.render('info_admin_courseedit_index');
});

crouter.get('/coursedit/layout/courses', ensureAuthenticated, function (req, res) {
    res.render('info_admin_courseedit_layout_courses');
});

crouter.get('/coursedit/layout/placeholders', ensureAuthenticated, function (req, res) {
    res.render('info_admin_courseedit_layout_placeholders');
});

crouter.get('/coursedit/layout/headings', ensureAuthenticated, function (req, res) {
    res.render('info_admin_courseedit_layout_headings');
});

/*
    Updates & Additions
*/



crouter.get('/coursedit/update/courses', ensureAuthenticated, function (req, res) {
    res.render('info_admin_courseedit_update_courses');
});

crouter.get('/coursedit/update/placeholders', ensureAuthenticated, function (req, res) {
    res.render('info_admin_courseedit_update_placeholders');
});

crouter.get('/coursedit/update/headings', ensureAuthenticated, function (req, res) {
    res.render('info_admin_courseedit_update_headings');
});

/*
    Removals
*/

crouter.get('/coursedit/remove/courses', ensureAuthenticated, function (req, res) {
    res.render('info_admin_courseedit_remove_courses');
});

crouter.get('/coursedit/remove/placeholders', ensureAuthenticated, function (req, res) {
    res.render('info_admin_courseedit_remove_placeholders');
});



module.exports = crouter;