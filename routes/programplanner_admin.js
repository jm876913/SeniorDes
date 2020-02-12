/*
*
*   Program Planner Js
*   Filename: programplanner.js
*
*   This file handles all http requests made
*   to the program planner webpage.
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

const pprouter = express.Router();
//Create a router to route the traffic
const ppapp = express();
//Setup a variable for express

//Include Authentication
const { ensureAuthenticated } = require('../routes/auth');

/*

    PUG ENGINE

    This code allows us to convert the PUG files
    into viewable html with the addition of the
    replacement of variables with database information.

*/
ppapp.set('view engine', 'pug');
ppapp.use(express.static(path.join(__dirname, 'views')));

/*
    PROGRAM OF STUDY BASIC STUDENT GET REQUEST

Grabs the webpage programofstudy. 
Can display information from the database onto the webpage.

Description: It does this by grabbing the programofstudy file.
It replaces any variables in the pug file with data from
the database.

This allows for us to post all the needed information
about the student and their current grades, ect.

*/

// pprouter.get('/student', function (req, res) {
//     res.render('programplanner_student');
// });


/*

    PROGRAM PLANNER ADVISOR BASIC GET REQUEST

*/

//query that goes with program planner logic
//TODO update to go with current backend
pprouter.get('/', ensureAuthenticated, function (req, res) {
    var classes_taken = [];
    var student = "SELECT * FROM student WHERE PID = 'P100244529'";
    db.query("select shortName, hours, semester from etm.course, etm.enrolled_in, etm.student where student.PID = enrolled_in.PID and course.shortName = enrolled_in.courseName and student.PID = 'P100254081'", function (err, rows, fields) {
        db.query(student, function (err, a) {
            if (err || rows.length == 0 || a.length == 0) {
                console.log(err);
                res.redirect('/errorpage_admin_progPlanner');
            } else {
                // Loop check on each row
                for (var i = 0; i < rows.length; i++) {
                    console.log(rows[i]);
                    var course = {
                        'courseName': rows[i].shortName,
                        'hours': rows[i].hours,
                        'semester': rows[i].semester
                    }
                    // Add to array
                    classes_taken.push(course);
                }

                res.render('programplanner_admin', {
                    classes_taken: JSON.stringify(classes_taken),
                    students: a[0]
                });
                // Render index.pug page using array 
                // res.render('programplanner', {"classes_taken": classes_taken});
            }
        });
    });
});


pprouter.get('/:student_url_id', ensureAuthenticated, function (req, res) {
    var student_id = req.params.student_url_id;
    var advisor_id = req.user.username;
    var classes_taken = [];
    var student = "SELECT * FROM student WHERE PID = ?";
    var coursedata = "SELECT shortName, hours, semester from etm.course, etm.enrolled_in, etm.student where student.PID = enrolled_in.PID and course.shortName = enrolled_in.courseName and student.PID = ?"
    db.query(coursedata, student_id, function (err, rows, fields) {
        db.query(student, student_id, function (err, a) {
            if (err) {
                console.log(err);
                res.redirect('/errorpage_admin_progPlanner');
            } else {
                // Loop check on each row
                for (var i = 0; i < rows.length; i++) {
                    //console.log(rows[i]);
                    var course = {
                        'courseName': rows[i].shortName,
                        'hours': rows[i].hours,
                        'semester': rows[i].semester
                    }
                    // Add to array
                    classes_taken.push(course);
                }

                res.render('programplanner_admin', {
                    classes_taken: JSON.stringify(classes_taken),
                    students: a[0],
                    id_advisor: advisor_id,
		    stu_id: JSON.stringify(student_id),
                    id_student: student_id
                });
                // Render index.pug page using array 
                // res.render('programplanner', {"classes_taken": classes_taken});
            }
        });
    });
});

/*

    PROGRAM PLANNER BASIC POST REQUEST

*/

pprouter.post('/', ensureAuthenticated, function (req, res) {
    console.log(req.body);
	if(req.body.classy.length != req.body.sems.length){
		//there are not the same amount of classes as lengths
        console.log("There are " + req.body.classy.length + " classes & " + console.log.sems.length + " semesters");
        return res.render('errorpage_prog_planner');
	}else{
		var update = 'INSERT INTO etm.enrolled_in (PID, courseName, semester) VALUES (?, ?, ?) ON duplicate key update semester = ?';
		//otherwise we put it in the database
		for(var i = 0; i < req.body.classy.length; i++){
			 db.query(update, [req.body.PID[0], req.body.classy[i], req.body.sems[i], req.body.sems[i]], (err, data) => {
				 if(err){    
					 console.log(err);
					 return res.redirect('/errorpage_prog_planner');
				 }
			 });
			 
		}//end for loop
		
	}//end else

    res.redirect('/houme')
});


module.exports = pprouter;
