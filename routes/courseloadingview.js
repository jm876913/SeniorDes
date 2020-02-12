/*
*
*   Course Loading View Js
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

    COURSE LOADING VIEW BASIC ADVISOR GET REQUEST

*/

crouter.get('/', ensureAuthenticated, function (req, res) {
    var getsemester = "Year:";
    var courselist = "SELECT DISTINCT shortName, longName, semester FROM etm.course c, etm.enrolled_in e WHERE shortname regexp '^etm' AND c.shortName = e.courseName;";
    var semesters = "SELECT DISTINCT year FROM etm.catalog;";
    db.query(courselist, function (err, a) {
        db.query(semesters, function (err, b) {
            if (err || a.length == 0 || b.length == 0) {
                console.log(err);
                return res.render('errorpage', { error_data: err });
            } else {
                res.render('courseloadingview01', { courselist: a, semesterlist: b, cur_year: getsemester});
            }
        });
    });
});


crouter.get('/admin', ensureAuthenticated, function (req, res) {
    var getsemester = "Year:";
    var advisor_id = req.user.username;
    var courselist = "SELECT DISTINCT shortName, longName, semester FROM etm.course c, etm.enrolled_in e WHERE shortname regexp '^etm' AND c.shortName = e.courseName;";
    var semesters = "SELECT DISTINCT year FROM etm.catalog;";
    db.query(courselist, function (err, a) {
        db.query(semesters, function (err, b) {
            if (err || a.length == 0 || b.length == 0) {
                console.log(err);
                return res.render('admin_error', { error_data: err });
            } else {
                res.render('courseloadingview02', { courselist: a, semesterlist: b, id_advisor: advisor_id, cur_year: getsemester});
            }
        });
    });
});

crouter.get('/:student_url_id', ensureAuthenticated, function (req, res) {
    var getsemester = "Year:";
    var advisor_id = req.user.username;
    var student_id = req.params.student_url_id;
    var courselist = "SELECT DISTINCT shortName, longName, semester FROM etm.course c, etm.enrolled_in e WHERE shortname regexp '^etm' AND c.shortName = e.courseName;";
    var semesters = "SELECT DISTINCT year FROM etm.catalog;";
    db.query(courselist, function (err, a) {
        db.query(semesters, function (err, b) {
            if (err || a.length == 0 || b.length == 0) {
                console.log(err);
                return res.render('errorpage', { error_data: err });
            } else {
                res.render('courseloadingview', { courselist: a, semesterlist: b, id_advisor: advisor_id, id_student: student_id, cur_year: getsemester});
            }
        });
    });
});

crouter.get('/admin/:student_url_id', ensureAuthenticated, function (req, res) {
    var student_id = req.params.student_url_id;
    var getsemester = "Year:";
    var courselist = "SELECT DISTINCT shortName, longName, semester FROM etm.course c, etm.enrolled_in e WHERE shortname regexp '^etm' AND c.shortName = e.courseName;";
    var semesters = "SELECT DISTINCT year FROM etm.catalog;";
    db.query(courselist, function (err, a) {
        db.query(semesters, function (err, b) {
            if (err || a.length == 0 || b.length == 0) {
                console.log(err);
                return res.render('admin_error', { error_data: err });
            } else {
                res.render('courseloadingview2', { courselist: a, semesterlist: b, id_student: student_id, cur_year: getsemester});
            }
        });
    });
});

crouter.get('/basic/:semester_year', ensureAuthenticated, function (req, res) {
    var getsemester = req.params.semester_year;
    console.log(getsemester);
    var courselist = "SELECT DISTINCT a.courseName, b.shortName, b.longName, (SELECT COUNT(PID) FROM etm.enrolled_in WHERE semester = ? AND courseName = a.courseName) as 'Fall', (SELECT COUNT(PID) FROM etm.enrolled_in WHERE semester = ? AND courseName = a.courseName) as 'Spring',  (SELECT COUNT(PID) FROM etm.enrolled_in WHERE semester = ? AND courseName = a.courseName) AS 'Summer' FROM ( SELECT courseName FROM etm.enrolled_in WHERE courseName regexp '^etm') a, (SELECT DISTINCT shortName, longName FROM etm.course) b WHERE  a.courseName = b.shortName;";
    var semesters = "SELECT DISTINCT year FROM etm.catalog;";
    var semList = ['Fa' + getsemester.substring(2, 4), 'Sp' + getsemester.substring(5, 7), 'Su' + getsemester.substring(5, 7)];
    db.query(courselist, [semList[0], semList[1], semList[2]], function (err, a) {
        db.query(semesters, function (err, b) {
            if (err || a.length == 0 || b.length == 0) {
                return res.render('errorpage', { error_data: "There are currently NO classes in this semester!" });
            }
            else {
                res.render('courseloadingview01', { courselist: a, semesterlist: b, cur_year: getsemester});
            }
        });
    });
});

crouter.get('/admin/basic/:semester_year', ensureAuthenticated, function (req, res) {
    var getsemester = req.params.semester_year;
    console.log(getsemester);
    var courselist = "SELECT DISTINCT a.courseName, b.shortName, b.longName, (SELECT COUNT(PID) FROM etm.enrolled_in WHERE semester = ? AND courseName = a.courseName) as 'Fall', (SELECT COUNT(PID) FROM etm.enrolled_in WHERE semester = ? AND courseName = a.courseName) as 'Spring',  (SELECT COUNT(PID) FROM etm.enrolled_in WHERE semester = ? AND courseName = a.courseName) AS 'Summer' FROM ( SELECT courseName FROM etm.enrolled_in WHERE courseName regexp '^etm') a, (SELECT DISTINCT shortName, longName FROM etm.course) b WHERE  a.courseName = b.shortName;";
    var semesters = "SELECT DISTINCT year FROM etm.catalog;";
    var semList = ['Fa' + getsemester.substring(2, 4), 'Sp' + getsemester.substring(5, 7), 'Su' + getsemester.substring(5, 7)];
    db.query(courselist, [semList[0], semList[1], semList[2]], function (err, a) {
        db.query(semesters, function (err, b) {
            if (err || a.length == 0 || b.length == 0) {
                return res.render('errorpage', { error_data: "There are currently NO classes in this semester!" });
            }
            else {
                res.render('courseloadingview02', { courselist: a, semesterlist: b, cur_year: getsemester});
            }
        });
    });
});

/*

    COURSE LOADING VIEW BASIC ADVISOR GET REQUEST

*/
crouter.get('/:student_url_id/:semester_year', ensureAuthenticated, function (req, res) {
    var getsemester = req.params.semester_year;
    var advisor_id = req.user.username;
    var student_id = req.params.student_url_id;
    var courselist = "SELECT DISTINCT a.courseName, b.shortName, b.longName, (SELECT COUNT(PID) FROM etm.enrolled_in WHERE semester = ? AND courseName = a.courseName) as 'Fall', (SELECT COUNT(PID) FROM etm.enrolled_in WHERE semester = ? AND courseName = a.courseName) as 'Spring',  (SELECT COUNT(PID) FROM etm.enrolled_in WHERE semester = ? AND courseName = a.courseName) AS 'Summer' FROM ( SELECT courseName FROM etm.enrolled_in WHERE courseName regexp '^etm') a, (SELECT DISTINCT shortName, longName FROM etm.course) b WHERE  a.courseName = b.shortName;";
    var semesters = "SELECT DISTINCT year FROM etm.catalog;";
    var semList = ['Fa' + getsemester.substring(2, 4), 'Sp' + getsemester.substring(5, 7), 'Su' + getsemester.substring(5, 7)];
    db.query(courselist, [semList[0], semList[1], semList[2]], function (err, a) {
        db.query(semesters, function (err, b) {
            if (err || a.length == 0 || b.length == 0) {
                console.log(err);
                return res.render('errorpage', { error_data: err });
            } else {
                res.render('courseloadingview', { courselist: a, semesterlist: b, id_advisor: advisor_id, id_student: student_id, cur_year: getsemester });
            }
        });
    });
});

/*

    COURSE LOADING VIEW BASIC ADVISOR GET REQUEST

*/

crouter.get('/admin/:student_url_id/:semester_year', ensureAuthenticated, function (req, res) {
    var getsemester = req.params.semester_year;
    var advisor_id = req.user.username;
    var student_id = req.params.student_url_id;
    var courselist = "SELECT DISTINCT a.courseName, b.shortName, b.longName, (SELECT COUNT(PID) FROM etm.enrolled_in WHERE semester = ? AND courseName = a.courseName) as 'Fall', (SELECT COUNT(PID) FROM etm.enrolled_in WHERE semester = ? AND courseName = a.courseName) as 'Spring',  (SELECT COUNT(PID) FROM etm.enrolled_in WHERE semester = ? AND courseName = a.courseName) AS 'Summer' FROM ( SELECT courseName FROM etm.enrolled_in WHERE courseName regexp '^etm') a, (SELECT DISTINCT shortName, longName FROM etm.course) b WHERE  a.courseName = b.shortName;";
    var semesters = "SELECT DISTINCT year FROM etm.catalog;";
    var semList = ['Fa' + getsemester.substring(2, 4), 'Sp' + getsemester.substring(5, 7), 'Su' + getsemester.substring(5, 7)];
    db.query(courselist, [semList[0], semList[1], semList[2]], function (err, a) {
        db.query(semesters, function (err, b) {
            if (err || a.length == 0 || b.length == 0) {
                console.log(err);
                return res.render('admin_error', { error_data: err });
            } else {
                res.render('courseloadingview2', { courselist: a, semesterlist: b, id_advisor: advisor_id, id_student: student_id, cur_year: getsemester });
            }
        });
    });
});


module.exports = crouter;