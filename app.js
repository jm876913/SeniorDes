/*** 
 * 
 *  Node JS Application
 *  Filename: app.js
 * 
 * Description: This file is used to run the back-end.
 * This progrma will create the server and provide a way
 * to display the webpages. It will also act as the middle-ware 
 * providing a way to display database information and pulling
 * information from the user.
 * 
*/

//Require Express
var express = require('express');
//Setup the express route
var app = express();
//Require UUID for unique Secrets
var uuid = require('uuid/v4');
//Require Express Sessions for Auth
var session = require('express-session');
//Require Passport
var passport = require('passport');
//Require Helmet for Node JS security vulnerabilites
var helmet = require('helmet');
//Require Path
var path = require('path');
//Log what is going on. This is used for testing
var morgan = require('morgan');
//Include Body Parser
var bodyParser = require('body-parser');
//Require the MySQL
var mysql = require('mysql');
//Require URl
var url = require('url');
//Require Flash
var flash = require('connect-flash');

//Require the Passport Setup
require('./routes/passport')(passport); // pass passport for configuration

//Turn on the Security Features
app.use(helmet());

//Define the Viewing for Pug
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, '/views')));

/*
    This code allows for the program to extract date from
    the body of the html.
    It also allows the 'next' function to operate.
*/
app.use(morgan('dev'));
//Use body parser fucntions to grab data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


/*
    When another computer tries to access the server through their
    browser the browser does not allow the request to go through
    because its headers aren't align. So this app.use adds special
    headers so that we can allow other clients to access our server.
    It ensures we avoid CORS errors
*/
app.use( function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');

    //The Browswer is checking if it is able to make a request
    //You cannot avoid this
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

//Create an Express Session

// Express session
app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
app.use(flash()); // use connect-flash for flash messages stored in session

// Global variables
app.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

/*
    These paths lead to the separate files that handle the requests
    for each page in the website.
*/

var programofstudyRoute = require('./routes/programofstudy.js');
var adminprogramofstudyRoute = require('./routes/programofstudy_admin.js');
var houmeRoute = require('./routes/houme.js');
var programplannnerRoute = require('./routes/programplanner.js');
var programplannnerAdminRoute = require('./routes/programplanner_admin.js');
var courseloadingviewRoute = require('./routes/courseloadingview.js');
var addstudentRoute = require('./routes/addstudent.js');
var registerRoute = require('./routes/register.js');
var submitRoute = require('./routes/submit.js');
var loadingRoute = require('./routes/loading.js');
var indexRoute = require('./routes/index.js');
var loginRoute = require('./routes/login.js');
var changeRoute = require('./routes/changepassword.js');
var adminchangeRoute = require('./routes/adminchangepassword.js');
//var downloadRoute = require('./routes/download.js');
//error pages
var errorpageRoute = require('./routes/error_Routes/errorpage.js');
var errorpage_admin_editRoute = require('./routes/error_Routes/errorpage_admin_edit.js');
var errorpage_administrationRoute = require('./routes/error_Routes/errorpage_administration.js');
var errorpage_DownloadRoute = require('./routes/error_Routes/errorpage_download.js');
var errorpage_ArchiveRoute = require('./routes/error_Routes/errorpage_Archive.js');
var errorpage_prog_studyRoute = require('./routes/error_Routes/errorpage_prog_study.js');
var errorpage_admin_progStudyRoute = require('./routes/error_Routes/errorpage_admin_progStudy.js');
var errorpage_admin_progPlannerRoute = require('./routes/error_Routes/errorpage_admin_progPlanner.js');
var errorpage_course_loadingRoute = require('./routes/error_Routes/errorpage_course_loading.js');
var errorpage_prog_plannerRoute = require('./routes/error_Routes/errorpage_prog_planner.js');
var errorpage_prog_addstudentRoute = require('./routes/error_Routes/errorpage_addstudent.js');
var errorpageAdminRoute = require('./routes/error_Routes/errorpage_admin.js');
var errorpagehoumeRoute = require('./routes/error_Routes/errorpage_houme.js');
var errorpage_deleteStudentRoute = require('./routes/error_Routes/errorpage_deleteStudent.js');
var errorpage_deleteAccountRoute = require('./routes/error_Routes/errorpage_deleteAccount.js');
var errorpage_registerRoute = require('./routes/error_Routes/errorpage_register.js');
var aboutRoute = require('./routes/about.js');
var licenseRoute = require('./routes/license.js');
var privacypolicyRoute = require('./routes/privacypolicy.js');
var adminRoute = require('./routes/administration.js');
var editRoute = require('./routes/courseedits.js');
var admineditRoute = require('./routes/admincourseedit.js');
var deleteRoute = require('./routes/deletion.js');
var studentdeleteRoute = require('./routes/deletestudent.js');
var logoutRoute = require('./routes/logout.js');
var serveRoute = require('./setserver.js');
var infoRoute = require('./routes/info.js');
var archiveRoute = require('./routes/archives.js');
var archive2Route = require('./routes/archives2.js');
var downloadRoute = require('./routes/download.js');
var download2Route = require('./routes/download2.js');
var studentRoute = require('./routes/student.js');


/*
    These app.use's allow us to forward requests that are accessed at
    http://.../<webpage>
    or
    http://.../<webpage>/:id
*/


//Routes that can handle requests
app.use('/programofstudy', programofstudyRoute);
app.use('/programofstudyadmin', adminprogramofstudyRoute);
app.use('/houme', houmeRoute);
app.use('/programplanner', programplannnerRoute);
app.use('/programplanneradmin', programplannnerAdminRoute);
app.use('/courseloadingview', courseloadingviewRoute);
app.use('/addstudent', addstudentRoute);
app.use('/register', registerRoute);
app.use('/register/error', registerRoute);
app.use('/', indexRoute);
app.use('/submit', submitRoute);
app.use('/delete', deleteRoute);
app.use('/deletestudent', studentdeleteRoute);
app.use('/loading', loadingRoute);
app.use('/login', loginRoute);
app.use('/invalid', loginRoute);
app.use('/logout', logoutRoute);
app.use('/changepassword', changeRoute);
app.use('/adminpasswordchange', adminchangeRoute);
//error pages
app.use('/errorpage', errorpageRoute);
app.use('/errorpage_admin_edit', errorpage_admin_editRoute);
app.use('/errorpage_administration', errorpage_administrationRoute);
app.use('/errorpage_download', errorpage_DownloadRoute);
app.use('/errorpage_Archive', errorpage_ArchiveRoute);
app.use('/errorpage_prog_study', errorpage_prog_studyRoute);
app.use('/errorpage_admin_progStudy', errorpage_admin_progStudyRoute);
app.use('/errorpage_admin_progPlanner', errorpage_admin_progPlannerRoute);
app.use('/errorpage_course_loading', errorpage_course_loadingRoute);
app.use('/errorpage_prog_planner', errorpage_prog_plannerRoute);
app.use('/errorpage_addstudent', errorpage_prog_addstudentRoute);
app.use('/errorpage_houme', errorpagehoumeRoute);
app.use('/errorpage_deleteStudent', errorpage_deleteStudentRoute);
app.use('/errorpage_deleteAccount', errorpage_deleteAccountRoute);
app.use('/errorpage_register', errorpage_registerRoute);
app.use('/admin_error', errorpageAdminRoute);
app.use('/about', aboutRoute);
app.use('/license', licenseRoute);
app.use('/privacypolicy', privacypolicyRoute);
app.use('/adminpage', adminRoute);
app.use('/courseedit', editRoute);
app.use('/serve', serveRoute);
app.use('/admincourseedit', admineditRoute);
app.use('/info', infoRoute);
app.use('/archives', archiveRoute);
app.use('/adminarchives', archive2Route);
app.use('/download', downloadRoute);
app.use('/admindownload', download2Route);
app.use('/student', studentRoute);


/*
    The next set of app.use catches any errors we may recieve.
    For example if a url is incorreclty typed or if
    the webpage does not act properly.
*/

//I want to handle every request that reaches this line
app.use( function (req, res, next) {
    var error = new Error('Page Not Found');
    error.status = 404;
    //This will forward this request with the error
    next(error);
});

//This will handle Errors within the system
app.use( function (error, req, res, next) {
    res.status(error.status || 500);
    if(req.user.type == 'admin'){
        res.redirect('/admin_error');
    }
    if(req.user.type == 'atype'){
        //console.log(req.user.type);
        if(error){
        res.redirect('/errorpage');
        //res.redirect('/errorpage_addstudent');
        }
    }
    else{
        res.render('errorpagemain', { error_data: error });
    }
});

module.exports = app;