/*
*
*  Program of Study
*  Filename: programofstudy.js
* 
*  This file handles all http requests made
*  to the program of study file.
*/

/*
NODE JS MODULES
These node modules are used to
help develop the web applciation.
*/

const express = require('express');
/*  Express is a huge library used for many things
In this file Express is used to create routes and 
handle http requests.
*/
const bodyParser = require('body-parser')

const db = require('./db2');
//Require for database needs
const path = require('path');
//Require path to find the diretory name

const fs = require('fs');
//Require File System

const psapp = express();
//Create a variable to use with express
const psrouter = express.Router();
//Create a router to route traffic to the main node file

//Include Authentication
const { ensureAuthenticated } = require('../routes/auth');

/*
PUG ENGINE
This code allows us to convert the PUG files
into viewable html with the addition of the
replacement of variables with database information.
*/
psapp.set('view engine', 'pug');
psapp.use(express.static(path.join(__dirname, 'views')));

psapp.use(bodyParser.json())
psapp.use(bodyParser.urlencoded({ extended: false }))

/*
PROGRAM OF STUDY GET REQUEST
Grabs the webpage programofstudy. 
Can display information from the database onto the webpage.
Description: It does this by grabbing the programofstudy file.
It replaces any variables in the pug file with data from
the database.
This allows for us to post all the needed information
about the student and their current grades, ect.
*/

psrouter.get('/:student_id', ensureAuthenticated, function (req, res) {
    var student_id = req.params.student_id;
    var advisor_url_id = req.user.username;


    async function getprog(student_id, advisor_url_id){
        const connection = await db;
        try{

            iddata = await connection.query("SELECT DISTINCT * FROM etm.student s, etm.advises a, etm.advisor ad WHERE ad.ID = a.advisorid and s.PID = a.pid and s.PID = ?;", student_id, (err, studentdata) => {
                if(err){
                    console.log(err);
                    return res.redirect('/errorpage_admin_progStudy');
                }
                return studentdata[0];
            });
            var givemecat = iddata[0][0].current_catalog;
            coursedata = await connection.query("SELECT PID, grade, shortName, semester, hours, tier, CatalogYear, position, heading, longName, hours, reqCourseName FROM `etm`.`enrolled_in` e,`etm`.`offered_in` o, etm.course LEFT JOIN etm.courseREQS ON `etm`.`course`.shortName = `etm`.`courseREQS`.courseName WHERE o.catalogYear = ? AND e.courseName = etm.course.shortName AND o.courseName = e.courseName AND PID = ? ORDER BY SUBSTRING(semester, 3, 4), SUBSTRING(semester, 1, 2) ASC;", [givemecat, student_id], (err, coursedata) => {
                if (err) {
                    console.log(err);
                    return res.redirect('/errorpage_admin_progStudy');
                }
                return coursedata[0];
            });

            placeholderdata = await connection.query("SELECT * FROM `etm`.`placeholder` WHERE catalog = ?; SELECT * FROM `etm`.`catalog`; SELECT * FROM etm.course; SELECT * FROM etm.advisor; SELECT * FROM etm.heading where catalogYear = ? ORDER BY position; SELECT distinct semester FROM etm.enrolled_in WHERE TRIM(semester) <> '' ORDER BY substring(semester, 3, 4) DESC, substring(semester, 1, 2) ASC;", [givemecat, givemecat], (err, placing) => {
                if(err){
                    console.log(err);
                    return res.redirect('/errorpage_admin_progStudy');
                }
                return placing[0];
            });

            //Use Placeholderdata to pull courses and catalogs
            catalogs = placeholderdata[0][1];
            courseraw = placeholderdata[0][2];
            advisor_list = placeholderdata[0][3];
            headingnames = placeholderdata[0][4];
            semis = placeholderdata[0][5];
            placeholderdata = placeholderdata[0];

            var t1 = [], t2 = [], t3 = [], t4 = [], t5 = [], t6 = [], t7 = [];
            var i = 0;
            for(i; i <= coursedata[0].length - 1; i++){
                if(coursedata[0][i].position >= 1 && coursedata[0][i].position <= 4 && coursedata[0][i].heading == headingnames[0].heading){
                    t1[coursedata[0][i].position - 1]
                        = ({
                            sem: coursedata[0][i].semester,
                            grad: coursedata[0][i].grade,
                            code: coursedata[0][i].shortName,
                            name: coursedata[0][i].longName,
                            hour: coursedata[0][i].hours,
                            tier: coursedata[0][i].tier,
                            prereq: coursedata[0][i].reqCourseName
                        });
                }
                else if (coursedata[0][i].position > 4 && coursedata[0][i].heading == headingnames[0].heading){
                    t2[coursedata[0][i].position - 5]
                        = ({
                            sem: coursedata[0][i].semester,
                            grad: coursedata[0][i].grade,
                            code: coursedata[0][i].shortName,
                            name: coursedata[0][i].longName,
                            hour: coursedata[0][i].hours,
                            tier: coursedata[0][i].tier,
                            prereq: coursedata[0][i].reqCourseName
                        });
                }
                else if (coursedata[0][i].heading == headingnames[1].heading){
                    t3[coursedata[0][i].position - 1]
                        = ({
                            sem: coursedata[0][i].semester,
                            grad: coursedata[0][i].grade,
                            code: coursedata[0][i].shortName,
                            name: coursedata[0][i].longName,
                            hour: coursedata[0][i].hours,
                            tier: coursedata[0][i].tier,
                            prereq: coursedata[0][i].reqCourseName
                        });
                }
                else if (coursedata[0][i].heading == headingnames[2].heading){
                    t4[coursedata[0][i].position - 1]
                        = ({
                            sem: coursedata[0][i].semester,
                            grad: coursedata[0][i].grade,
                            code: coursedata[0][i].shortName,
                            name: coursedata[0][i].longName,
                            hour: coursedata[0][i].hours,
                            tier: coursedata[0][i].tier,
                            prereq: coursedata[0][i].reqCourseName
                        });
                }
                else if (coursedata[0][i].heading == headingnames[3].heading){
                    t5[coursedata[0][i].position - 1]
                        = ({
                            sem: coursedata[0][i].semester,
                            grad: coursedata[0][i].grade,
                            code: coursedata[0][i].shortName,
                            name: coursedata[0][i].longName,
                            hour: coursedata[0][i].hours,
                            tier: coursedata[0][i].tier,
                            prereq: coursedata[0][i].reqCourseName
                        });
                }
                else if (coursedata[0][i].heading == headingnames[5].heading){
                    t7[coursedata[0][i].position - 1]
                        = ({
                            sem: coursedata[0][i].semester,
                            grad: coursedata[0][i].grade,
                            code: coursedata[0][i].shortName,
                            name: coursedata[0][i].longName,
                            hour: coursedata[0][i].hours,
                            tier: coursedata[0][i].tier,
                            prereq: coursedata[0][i].reqCourseName
                        });
                }
                else{
                    t6.push({
                        sem: coursedata[0][i].semester,
                        grad: coursedata[0][i].grade,
                        code: coursedata[0][i].shortName,
                        name: coursedata[0][i].longName,
                        hour: coursedata[0][i].hours,
                        tier: coursedata[0][i].tier,
                        prereq: coursedata[0][i].reqCourseName
                    });
                }

            }

            var k = 0;
            for(k; k <= placeholderdata[0].length - 1; k++){
                if (placeholderdata[0][k].position >= 1 && placeholderdata[0][k].position <= 4 && placeholderdata[0][k].heading == headingnames[0].heading){
                    if(t1[placeholderdata[0][k].position - 1] == null){
                        t1[placeholderdata[0][k].position - 1]
                            = ({
                                pcode: placeholderdata[0][k].courseCode,
                                pname: placeholderdata[0][k].courseName,
                                phour: placeholderdata[0][k].courseHours,
                                ptier: placeholderdata[0][k].courseTier,
                                preq: placeholderdata[0][k].prereq
                            });
                    }
                    else{
                        Object.assign(t1[placeholderdata[0][k].position - 1],
                            {
                                pcode: placeholderdata[0][k].courseCode,
                                pname: placeholderdata[0][k].courseName,
                                phour: placeholderdata[0][k].courseHours,
                                ptier: placeholderdata[0][k].courseTier,
                                preq: placeholderdata[0][k].prereq
                            });
                    }
                }
                else if (placeholderdata[0][k].position > 4 && placeholderdata[0][k].heading == headingnames[0].heading){
                    if(t2[placeholderdata[0][k].position - 5] == null){
                        t2[placeholderdata[0][k].position - 5]
                            = ({
                                pcode: placeholderdata[0][k].courseCode,
                                pname: placeholderdata[0][k].courseName,
                                phour: placeholderdata[0][k].courseHours,
                                ptier: placeholderdata[0][k].courseTier,
                                preq: placeholderdata[0][k].prereq
                            });
                    }
                    else{
                        Object.assign(t2[placeholderdata[0][k].position - 5],
                            {
                                pcode: placeholderdata[0][k].courseCode,
                                pname: placeholderdata[0][k].courseName,
                                phour: placeholderdata[0][k].courseHours,
                                ptier: placeholderdata[0][k].courseTier,
                                preq: placeholderdata[0][k].prereq
                            });
                    }
                }
                else if (placeholderdata[0][k].heading == headingnames[1].heading){
                    if(t3[placeholderdata[0][k].position - 1] == null){
                        t3[placeholderdata[0][k].position - 1]
                            = ({
                                pcode: placeholderdata[0][k].courseCode,
                                pname: placeholderdata[0][k].courseName,
                                phour: placeholderdata[0][k].courseHours,
                                ptier: placeholderdata[0][k].courseTier,
                                preq: placeholderdata[0][k].prereq
                            });
                    }
                    else{
                        Object.assign(t3[placeholderdata[0][k].position - 1],
                            {
                                pcode: placeholderdata[0][k].courseCode,
                                pname: placeholderdata[0][k].courseName,
                                phour: placeholderdata[0][k].courseHours,
                                ptier: placeholderdata[0][k].courseTier,
                                preq: placeholderdata[0][k].prereq
                            });
                    }
                }
                else if (placeholderdata[0][k].heading == headingnames[2].heading){
                    if(t4[placeholderdata[0][k].position - 1] == null){
                        t4[placeholderdata[0][k].position - 1]
                            = ({
                                pcode: placeholderdata[0][k].courseCode,
                                pname: placeholderdata[0][k].courseName,
                                phour: placeholderdata[0][k].courseHours,
                                ptier: placeholderdata[0][k].courseTier,
                                preq: placeholderdata[0][k].prereq
                            });
                    }
                    else{
                        Object.assign(t4[placeholderdata[0][k].position - 1],
                            {
                                pcode: placeholderdata[0][k].courseCode,
                                pname: placeholderdata[0][k].courseName,
                                phour: placeholderdata[0][k].courseHours,
                                ptier: placeholderdata[0][k].courseTier,
                                preq: placeholderdata[0][k].prereq
                            });
                    }
                }
                else if (placeholderdata[0][k].heading == headingnames[3].heading){
                    if(t5[placeholderdata[0][k].position - 1] == null){
                        t5[placeholderdata[0][k].position - 1]
                            = ({
                                pcode: placeholderdata[0][k].courseCode,
                                pname: placeholderdata[0][k].courseName,
                                phour: placeholderdata[0][k].courseHours,
                                ptier: placeholderdata[0][k].courseTier,
                                preq: placeholderdata[0][k].prereq
                            });
                    }
                    else{
                        Object.assign(t5[placeholderdata[0][k].position - 1],
                            {
                                pcode: placeholderdata[0][k].courseCode,
                                pname: placeholderdata[0][k].courseName,
                                phour: placeholderdata[0][k].courseHours,
                                ptier: placeholderdata[0][k].courseTier,
                                preq: placeholderdata[0][k].prereq
                            });
                    }
                }
                else if (placeholderdata[0][k].heading == headingnames[5].heading){
                    if(t7[placeholderdata[0][k].position - 1] == null){
                        t7[placeholderdata[0][k].position - 1]
                            = ({
                                pcode: placeholderdata[0][k].courseCode,
                                pname: placeholderdata[0][k].courseName,
                                phour: placeholderdata[0][k].courseHours,
                            ptier: placeholderdata[0][k].courseTier,
                            preq: placeholderdata[0][k].prereq
                            });
                    }
                    else{
                        Object.assign(t7[placeholderdata[0][k].position - 1],
                            {
                                pcode: placeholderdata[0][k].courseCode,
                                pname: placeholderdata[0][k].courseName,
                                phour: placeholderdata[0][k].courseHours,
                                ptier: placeholderdata[0][k].courseTier,
                                preq: placeholderdata[0][k].prereq
                            });
                    }
                }
                else{
                    if (t6[placeholderdata[0][k].position - 1] == null) {
                        t6[placeholderdata[0][k].position - 1]
                            = ({
                                pcode: placeholderdata[0][k].courseCode,
                                pname: placeholderdata[0][k].courseName,
                                phour: placeholderdata[0][k].courseHours,
                                ptier: placeholderdata[0][k].courseTier,
                                preq: placeholderdata[0][k].prereq
                            });
                    }
                    else {
                        Object.assign(t6[placeholderdata[0][k].position - 1],
                            {
                                pcode: placeholderdata[0][k].courseCode,
                                pname: placeholderdata[0][k].courseName,
                                phour: placeholderdata[0][k].courseHours,
                                ptier: placeholderdata[0][k].courseTier,
                                preq: placeholderdata[0][k].prereq
                            });
                    }
                }
            }


            res.render('programofstudy_admin', {
                advisor_ID: iddata[0][0].ID,
                advisor_fname: iddata[0][0].afname,
                advisor_lname: iddata[0][0].alname,
                student_fname: iddata[0][0].fname,
                student_lname: iddata[0][0].lname,
                student_standing: iddata[0][0].advanced_standing,
                catalog_num: iddata[0][0].current_catalog,
                id_student: iddata[0][0].PID,
                id_advisor: advisor_url_id,
                adlist: advisor_list,
                cata: catalogs,
                headme: headingnames,
                rawcoursedata: courseraw,
                semies: semis,
                table1: t1,
                table2: t2,
                table3: t3,
                table4: t4,
                table5: t5,
                table6: t6,
                table7: t7
            });

        } catch(error){
            console.log(error);
            return res.redirect('/errorpage_admin_progStudy');
        }
    }
    getprog(student_id, advisor_url_id);

    /*
    PROGRAM OF STUDY GET REQUEST
    Grabs the webpage programofstudy. 
    Can display information from the database onto the webpage.
    Description: It does this by grabbing the programofstudy file.
    It replaces any variables in the pug file with data from
    the database.
    This allows for us to post all the needed information
    about the student and their current grades, ect.
    */

});

psrouter.get('/:student_id/:catalog_year', ensureAuthenticated, function (req, res) {
    var student_id = req.params.student_id;
    var advisor_url_id = req.user.username;
    var chosen_catalog = req.params.catalog_year;

    async function getprog(student_id, advisor_url_id){
        const connection = await db;
        try{

            iddata = await connection.query("SELECT * FROM etm.student s, etm.advises a, etm.advisor ad WHERE ad.ID = a.advisorid and s.PID = ? and a.pid =  ?;", [student_id, student_id], (err, studentdata) => {
                if(err){
                    console.log(err);
                    return res.redirect('/errorpage_admin_progStudy');
                }

                return studentdata[0];
            });

            coursedata = await connection.query("SELECT PID, grade, shortName, semester, hours, tier, CatalogYear, position, heading, longName, hours, reqCourseName FROM `etm`.`enrolled_in` e,`etm`.`offered_in` o, etm.course LEFT JOIN etm.courseREQS ON `etm`.`course`.shortName = `etm`.`courseREQS`.courseName WHERE o.catalogYear = ? AND e.courseName = etm.course.shortName AND o.courseName = e.courseName AND PID = ? ORDER BY SUBSTRING(semester, 3, 4), SUBSTRING(semester, 1, 2) ASC;", [iddata[0][0].current_catalog, student_id], (err, coursedata) => {
                if(err){
                    console.log(err);
                    return res.redirect('/errorpage_admin_progStudy');
                }
                return coursedata[0];
            });

            placeholderdata = await connection.query("SELECT * FROM `etm`.`placeholder` WHERE catalog = ?; SELECT * FROM `etm`.`catalog`; SELECT * FROM etm.course; SELECT * FROM etm.advisor; SELECT * FROM etm.heading where catalogYear = ? ORDER BY position; SELECT distinct semester FROM etm.enrolled_in WHERE TRIM(semester) <> '' ORDER BY substring(semester, 3, 4) DESC, substring(semester, 1, 2) ASC;", [chosen_catalog, chosen_catalog], (err, placing) => {
                if(err){
                    console.log(err);
                    return res.redirect('/errorpage_admin_progStudy');
                }
                return placing[0];
            });
            //Use Placeholderdata to pull courses and catalogs
            catalogs = placeholderdata[0][1];
            courseraw = placeholderdata[0][2];
            advisor_list = placeholderdata[0][3];
            headingnames = placeholderdata[0][4];
            semis = placeholderdata[0][5];
            placeholderdata = placeholderdata[0];


            var t1 = [], t2 = [], t3 = [], t4 = [], t5 = [], t6 = [], t7 = [];
            var i = 0;
            for(i; i <= coursedata[0].length - 1; i++){
                if (coursedata[0][i].position >= 1 && coursedata[0][i].position <= 4 && coursedata[0][i].heading == headingnames[0].heading){
                    t1[coursedata[0][i].position - 1]
                        = ({
                            sem: coursedata[0][i].semester,
                            grad: coursedata[0][i].grade,
                            code: coursedata[0][i].shortName,
                            name: coursedata[0][i].longName,
                            hour: coursedata[0][i].hours,
                            tier: coursedata[0][i].tier,
                            prereq: coursedata[0][i].reqCourseName
                        });
                }
                else if (coursedata[0][i].position > 4 && coursedata[0][i].heading == headingnames[0].heading){
                    t2[coursedata[0][i].position - 5]
                        = ({
                            sem: coursedata[0][i].semester,
                            grad: coursedata[0][i].grade,
                            code: coursedata[0][i].shortName,
                            name: coursedata[0][i].longName,
                            hour: coursedata[0][i].hours,
                            tier: coursedata[0][i].tier,
                            prereq: coursedata[0][i].reqCourseName
                        });
                }
                else if (coursedata[0][i].heading == headingnames[1].heading){
                    t3[coursedata[0][i].position - 1]
                        = ({
                            sem: coursedata[0][i].semester,
                            grad: coursedata[0][i].grade,
                            code: coursedata[0][i].shortName,
                            name: coursedata[0][i].longName,
                            hour: coursedata[0][i].hours,
                            tier: coursedata[0][i].tier,
                            prereq: coursedata[0][i].reqCourseName
                        });
                }
                else if (coursedata[0][i].heading == headingnames[2].heading){
                    t4[coursedata[0][i].position - 1]
                        = ({
                            sem: coursedata[0][i].semester,
                            grad: coursedata[0][i].grade,
                            code: coursedata[0][i].shortName,
                            name: coursedata[0][i].longName,
                            hour: coursedata[0][i].hours,
                            tier: coursedata[0][i].tier,
                            prereq: coursedata[0][i].reqCourseName
                        });
                }
                else if (coursedata[0][i].heading == headingnames[3].heading){
                    t5[coursedata[0][i].position - 1]
                        = ({
                            sem: coursedata[0][i].semester,
                            grad: coursedata[0][i].grade,
                            code: coursedata[0][i].shortName,
                            name: coursedata[0][i].longName,
                            hour: coursedata[0][i].hours,
                            tier: coursedata[0][i].tier,
                            prereq: coursedata[0][i].reqCourseName
                        });
                }
                else if (coursedata[0][i].heading == headingnames[5].heading){
                    t7[coursedata[0][i].position - 1]
                        = ({
                            sem: coursedata[0][i].semester,
                            grad: coursedata[0][i].grade,
                            code: coursedata[0][i].shortName,
                            name: coursedata[0][i].longName,
                            hour: coursedata[0][i].hours,
                            tier: coursedata[0][i].tier,
                            prereq: coursedata[0][i].reqCourseName
                        });
                }
                else{
                    t6.push({
                        sem: coursedata[0][i].semester,
                        grad: coursedata[0][i].grade,
                        code: coursedata[0][i].shortName,
                        name: coursedata[0][i].longName,
                        hour: coursedata[0][i].hours,
                        tier: coursedata[0][i].tier,
                        prereq: coursedata[0][i].reqCourseName
                    });
                }

            }

            var k = 0;
            for(k; k <= placeholderdata[0].length - 1; k++){
                if (placeholderdata[0][k].position >= 1 && placeholderdata[0][k].position <= 4 && placeholderdata[0][k].heading == headingnames[0].heading){
                    if(t1[placeholderdata[0][k].position - 1] == null){
                        t1[placeholderdata[0][k].position - 1]
                            = ({
                                pcode: placeholderdata[0][k].courseCode,
                                pname: placeholderdata[0][k].courseName,
                                phour: placeholderdata[0][k].courseHours,
                                ptier: placeholderdata[0][k].courseTier,
                                preq: placeholderdata[0][k].prereq
                            });
                    }
                    else{
                        Object.assign(t1[placeholderdata[0][k].position - 1],
                            {
                                pcode: placeholderdata[0][k].courseCode,
                                pname: placeholderdata[0][k].courseName,
                                phour: placeholderdata[0][k].courseHours,
                                ptier: placeholderdata[0][k].courseTier,
                                preq: placeholderdata[0][k].prereq
                            });
                    }
                }
                else if (placeholderdata[0][k].position > 4 && placeholderdata[0][k].heading == headingnames[0].heading){
                    if(t2[placeholderdata[0][k].position - 5] == null){
                        t2[placeholderdata[0][k].position - 5]
                            = ({
                                pcode: placeholderdata[0][k].courseCode,
                                pname: placeholderdata[0][k].courseName,
                                phour: placeholderdata[0][k].courseHours,
                                ptier: placeholderdata[0][k].courseTier,
                                preq: placeholderdata[0][k].prereq
                            });
                    }
                    else{
                        Object.assign(t2[placeholderdata[0][k].position - 5],
                            {
                                pcode: placeholderdata[0][k].courseCode,
                                pname: placeholderdata[0][k].courseName,
                                phour: placeholderdata[0][k].courseHours,
                                ptier: placeholderdata[0][k].courseTier,
                                preq: placeholderdata[0][k].prereq
                            });
                    }
                }
                else if (placeholderdata[0][k].heading == headingnames[1].heading){
                    if(t3[placeholderdata[0][k].position - 1] == null){
                        t3[placeholderdata[0][k].position - 1]
                            = ({
                                pcode: placeholderdata[0][k].courseCode,
                                pname: placeholderdata[0][k].courseName,
                                phour: placeholderdata[0][k].courseHours,
                                ptier: placeholderdata[0][k].courseTier,
                                preq: placeholderdata[0][k].prereq
                            });
                    }
                    else{
                        Object.assign(t3[placeholderdata[0][k].position - 1],
                            {
                                pcode: placeholderdata[0][k].courseCode,
                                pname: placeholderdata[0][k].courseName,
                                phour: placeholderdata[0][k].courseHours,
                                ptier: placeholderdata[0][k].courseTier,
                                preq: placeholderdata[0][k].prereq
                            });
                    }
                }
                else if (placeholderdata[0][k].heading == headingnames[2].heading){
                    if(t4[placeholderdata[0][k].position - 1] == null){
                        t4[placeholderdata[0][k].position - 1]
                            = ({
                                pcode: placeholderdata[0][k].courseCode,
                                pname: placeholderdata[0][k].courseName,
                                phour: placeholderdata[0][k].courseHours,
                                ptier: placeholderdata[0][k].courseTier,
                                preq: placeholderdata[0][k].prereq
                            });
                    }
                    else{
                        Object.assign(t4[placeholderdata[0][k].position - 1],
                            {
                                pcode: placeholderdata[0][k].courseCode,
                                pname: placeholderdata[0][k].courseName,
                                phour: placeholderdata[0][k].courseHours,
                                ptier: placeholderdata[0][k].courseTier,
                                preq: placeholderdata[0][k].prereq
                            });
                    }
                }
                else if (placeholderdata[0][k].heading == headingnames[3].heading){
                    if(t5[placeholderdata[0][k].position - 1] == null){
                        t5[placeholderdata[0][k].position - 1]
                            = ({
                                pcode: placeholderdata[0][k].courseCode,
                                pname: placeholderdata[0][k].courseName,
                                phour: placeholderdata[0][k].courseHours,
                                ptier: placeholderdata[0][k].courseTier,
                                preq: placeholderdata[0][k].prereq
                            });
                    }
                    else{
                        Object.assign(t5[placeholderdata[0][k].position - 1],
                            {
                                pcode: placeholderdata[0][k].courseCode,
                                pname: placeholderdata[0][k].courseName,
                                phour: placeholderdata[0][k].courseHours,
                                ptier: placeholderdata[0][k].courseTier,
                                preq: placeholderdata[0][k].prereq
                            });
                    }
                }
                else if (placeholderdata[0][k].heading == headingnames[5].heading){
                    if(t7[placeholderdata[0][k].position - 1] == null){
                        t7[placeholderdata[0][k].position - 1]
                            = ({
                                pcode: placeholderdata[0][k].courseCode,
                                pname: placeholderdata[0][k].courseName,
                                phour: placeholderdata[0][k].courseHours,
                                ptier: placeholderdata[0][k].courseTier,
                                preq: placeholderdata[0][k].prereq
                            });
                    }
                    else{
                        Object.assign(t7[placeholderdata[0][k].position - 1],
                            {
                                pcode: placeholderdata[0][k].courseCode,
                                pname: placeholderdata[0][k].courseName,
                                phour: placeholderdata[0][k].courseHours,
                                ptier: placeholderdata[0][k].courseTier,
                                preq: placeholderdata[0][k].prereq
                            });
                    }
                }
                else {
                    if (t6[placeholderdata[0][k].position - 1] == null) {
                        t6[placeholderdata[0][k].position - 1]
                            = ({
                                pcode: placeholderdata[0][k].courseCode,
                                pname: placeholderdata[0][k].courseName,
                                phour: placeholderdata[0][k].courseHours,
                                ptier: placeholderdata[0][k].courseTier,
                                preq: placeholderdata[0][k].prereq
                            });
                    }
                    else {
                        Object.assign(t6[placeholderdata[0][k].position - 1],
                            {
                                pcode: placeholderdata[0][k].courseCode,
                                pname: placeholderdata[0][k].courseName,
                                phour: placeholderdata[0][k].courseHours,
                                ptier: placeholderdata[0][k].courseTier,
                                preq: placeholderdata[0][k].prereq
                            });
                    }
                }
            }

            res.render('programofstudy_admin', {
                advisor_ID: iddata[0][0].ID,
                advisor_fname: iddata[0][0].afname,
                advisor_lname: iddata[0][0].alname,
                student_fname: iddata[0][0].fname,
                student_lname: iddata[0][0].lname,
                student_standing: iddata[0][0].advanced_standing,
                catalog_num: chosen_catalog,
                id_student: iddata[0][0].PID,
                id_advisor: advisor_url_id,
                adlist: advisor_list,
                cata: catalogs,
                semies: semis,
                rawcoursedata: courseraw,
                headme: headingnames,
                table1: t1,
                table2: t2,
                table3: t3,
                table4: t4,
                table5: t5,
                table6: t6,
                table7: t7
            });

        } catch(error){
            console.log(error);
            return res.redirect('/errorpage_admin_progStudy');
        }
    }
    getprog(student_id, advisor_url_id);

});

/*
PROGRAM OF STUDY POST REQUEST
Here we take the data from the body of the web page
and place the data back into the database and update
anything new or add new data.
*/

psrouter.post('/', ensureAuthenticated, (req, res, next) => {

    if (!fs.existsSync('./TheArchives/' + req.body.id_student)){
        fs.mkdirSync('./TheArchives/' + req.body.id_student);
    }

    var tempname = './TheArchives/' + req.body.id_student + '/' + req.body.id_student + '.' + req.body.meetingdate.substring(0, 8) + '.' + req.body.meetingdate.substring(9, 15) + '.csv';
    var filename = tempname.replace(/:/g, '-');
    fs.writeFile(filename, req.body.submit, (err) =>{
        if(err) {
            console.log(err);
            return res.redirect('/errorpage');
        }
    });

    /*

        SQL Statements for the Program Of Study Submission
        Update Tables:
            Enrolled_in - For class data they add or change.
            Course - For Tiers and Prerequisites they add or change

    */

    //Advises: Update Advisor ID and Meeting Date
    var new_advisor = 'UPDATE advises set advisorid = ?, set lastmeeting = ? WHERE pid = ?';
    //Possibly Make a second query for meeting date
    //Courses: Sem, Grade, code, name, hours, tier, prereq, AS

    //Enrolled_In : Pretty much the only table needed to be updated PID, courseName, grade, semester
    //Primary Keys: PID and courseName
    var courseupdate = 'INSERT INTO etm.enrolled_in (PID, courseName, grade, semester) VALUES (?, ?, ?, ?) ON duplicate key update grade = ?, semester = ?';
    //Course : 
    //This would only be applied if we need to update course names and codes and hours ect.
    //We could let advisors update the Prereqs and the Tiers for Courses

    //Offered In : This is only updated through the DARS and the course edit page.

    //Student : Advanced Standing Table PID, current_catalog, AS
    var studentstanding = 'UPDATE etm.student set advanced_standing = ? WHERE PID = ?;';

    /*
        POST FUNCTION - STUDENT STANDING
        Update student standing. If AS is 
        available set to true.

    */

    //Check if the body returned a AS value
    if (req.body.AS) {
        //If So then update the value to true
        db.query(studentstanding, ['true', req.body.id_student], (err, data) => {
            if (err) {
                console.log(err);
                return res.redirect('/errorpage_admin_progStudy');
            }
        });
    }
    else {
        //If not update the value to false
        db.query(studentstanding, ['false', req.body.id_student], (err, data) => {
            if (err) {
                console.log(err);
                return res.redirect('/errorpage_admin_progStudy');
            }
        });
    }



    /*
        POST FUNCTION - COURSE UPDATE/INSERT
        In this For Loop we run through all of the course data
        and update new grades and semesters
    */

    var i = 0;
    for (i; i <= req.body.code.length - 1; i++) {
        //Catch Queries without primary keys
        //If the data has an empty courseName don't execute
        if (req.body.code[i] != '') {
            db.query(courseupdate, [req.body.id_student, req.body.code[i], req.body.grade[i], req.body.sem[i], req.body.grade[i], req.body.sem[i]], (err, data) => {
                if (err) {
                    console.log(err);
                    return res.redirect('/errorpage_admin_progStudy');
                }
            });
        }
    }

    /*
        POST REQUEST - END OF POST OPERATION
        Send the User to a Thank You Submission Page.
    */
    res.render('submit2');

});

module.exports = psrouter;