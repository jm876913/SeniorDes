/*
*
*   Login Page Js
*   Filename: login.js
*
*
*/


var express = require('express');
/*  

    Express is a huge library used for many things
    In this file Express is used to create routes and 
    handle http requests.

*/
var db = require('./db');
//Require for database needs
var path = require('path');
//Require path to find the diretory name

var change_router = express.Router();
//Create a router to route the traffic
var change_app = express();
//Setup a variable for express


//Include Authentication
var { ensureAuthenticated } = require('../routes/auth');

/*

    PUG ENGINE

    This code allows us to convert the PUG files
    into viewable html with the addition of the
    replacement of variables with database information.

*/
change_app.set('view engine', 'pug');
change_app.use(express.static(path.join(__dirname, './views')));

/*
    This Code is used to let Expess
    know we are using some of its 
    packages.

*/

/*

    Course Edit Index Page

*/

change_router.get('/index', ensureAuthenticated, function(req,res){

    res.render('courseeditindex');
});

/*

    Add A new Course GET Request

*/


change_router.get('/add', ensureAuthenticated, function (req, res) {
    
    var courselist = "SELECT distinct heading FROM etm.heading;";
    db.query(courselist, function (err, b) {
        if (err || b.length == 0) {
            console.log(err);
            return res.render('errorpage', { error_data: err });
        } else {
            res.render('editcourseadd', { thehead: b });
        }
    });
});

/*

    Add A new Heading GET Request

*/


change_router.get('/hadd', ensureAuthenticated, function (req, res) {

    res.render('addheading');
});

/*

    Add a New Place Holder

*/


change_router.get('/pset', ensureAuthenticated, function (req, res) {
    var courselist = "SELECT distinct heading FROM etm.heading;";
    db.query(courselist, function (err, b) {
        if (err || b.length == 0) {
            console.log(err);
            return res.render('errorpage', { error_data: err });
        } else {
            res.render('placeholderadd', { thehead: b });
        }
    });
});

/*

    Remove A Course

*/


change_router.get('/remove', ensureAuthenticated, function (req, res) {

    var courselist = "SELECT DISTINCT shortName, longName FROM etm.course t1 LEFT JOIN etm.offered_in t2 ON t1.shortName = t2.courseName UNION SELECT shortName, longName FROM etm.course t1 RIGHT JOIN etm.offered_in t2 ON t1.shortName = t2.courseName UNION SELECT shortName, longName FROM etm.course t1 LEFT JOIN etm.enrolled_in t2 ON t1.shortName = t2.courseName UNION SELECT shortName, longName FROM etm.course t1 RIGHT JOIN etm.enrolled_in t2 ON t1.shortName = t2.courseName;";
    db.query(courselist, function(err, b){
        if(err || b.length == 0){
        console.log(err);
        return res.render('errorpage', { error_data: err });
        } else {
            res.render('editcourseremove', {courselist: b});
        }
    });
});

/*

    Remove A Placeholder

*/


change_router.get('/premove', ensureAuthenticated, function (req, res) {

    var courselist = "SELECT distinct courseName, courseCode, catalog FROM etm.placeholder ORDER BY catalog DESC, courseName ASC;";
    db.query(courselist, function (err, b) {
        if (err || b.length == 0) {
            console.log(err);
            return res.render('errorpage', { error_data: err });
        } else {
            res.render('placeholderremove', { courselist: b });
        }
    });
});


/*

    Set the Headings for a Catalog
*/

change_router.get('/heading', ensureAuthenticated, function (req, res) {

    var courselist = "SELECT * FROM etm.heading ORDER BY catalogyear DESC, position ASC;";
    db.query(courselist, function (err, b) {
        if (err || b.length == 0) {
            console.log(err);
            return res.render('errorpage', { error_data: err });
        } else {
            res.render('setheading', { headings: b });
        }
    });
});

/*

    Course Catalog Set Course Position

*/


change_router.get('/set', ensureAuthenticated, function (req, res) {

    var year = "SELECT * FROM etm.catalog;";
    var courselist = "SELECT DISTINCT * FROM etm.offered_in ORDER BY heading ASC, position ASC;";
    var headings = "SELECT DISTINCT heading FROM etm.offered_in;";
    
    db.query(courselist, function (err, a) {
            if (err || a.length == 0) {
                return res.render('errorpage', { error_data: err });
            }
                db.query(year, function(err, b){
                    if(err || b.length == 0){
                        console.log(err);
                        return res.render('errorpage', { error_data: err });
                    } 
                    else {
                        db.query(headings, function(err, c){
                            if(err || c.length == 0){
                                console.log(err);
                                return res.render('errorpage', { error_data: err });
                            } else {
                                res.render('setcourse', {courselist: a, year : b, headings: c});
                            }
                        });
                    }
                });
        });
});

//Get Course Catalog based on Year

change_router.get('/set/:catalogyear', ensureAuthenticated, function (req, res) {
    var currentyear = req.params.catalogyear;

    var year = "SELECT * FROM etm.catalog;";
    var courselist = "SELECT * FROM etm.offered_in ORDER BY heading ASC, position ASC;";
    var headings = "SELECT DISTINCT heading FROM etm.offered_in;";

    db.query(courselist, currentyear, function (err, a) {
            if (err || a.length == 0) {
                return res.render('errorpage', { error_data: err });
            }
                db.query(year, function(err, b){
                    if(err || b.length == 0){
                        console.log(err);
                        return res.render('errorpage', { error_data: err });
                    } 
                    else {
                        db.query(headings, function(err, c){
                            if(err || c.length == 0){
                                console.log(err);
                                return res.render('errorpage', { error_data: err });
                            } else {
                                res.render('setcourse', {courselist: a, year : b, headings: c});
                            }
                        });
                    }
                });
                
        });
});
//Add Catalog Year (Read Only)

/*

    Placeholder Set Position

*/


change_router.get('/placeholder', ensureAuthenticated, function (req, res) {

    var year = "SELECT * FROM etm.catalog;";
    var courselist = "SELECT courseCode, heading, position, catalog FROM etm.placeholder ORDER BY heading ASC, position;";
    var headings = "SELECT DISTINCT heading FROM etm.placeholder;";

    db.query(courselist, function (err, a) {
            if (err || a.length == 0) {
                return res.render('errorpage', { error_data: err });
            }
                db.query(year, function(err, b){
                    if(err || b.length == 0){
                    console.log(err);
                    return res.render('errorpage', { error_data: err });
                    } else {
                        db.query(headings, function(err, c){
                            if(err || c.length == 0){
                                console.log(err);
                                return res.render('errorpage', { error_data: err });
                            } else {
                                res.render('setplaceholder', {courselist: a, year : b, headings: c});
                            }
                        });
                    }
                });
        });
});

//Set position for a certain year

change_router.get('/placeholder/:catalogyear', ensureAuthenticated, function (req, res) {
    var currentyear = req.params.catalogyear;

    var year = "SELECT * FROM etm.catalog;";
    var courselist = "SELECT courseCode, heading, position, catalog FROM etm.placeholder WHERE catalog = ? ORDER BY heading ASC, position ASC;";
    var headings = "SELECT DISTINCT heading FROM etm.placeholder;";

    db.query(courselist, currentyear, function (err, a) {
            if (err || a.length == 0) {
                return res.render('errorpage', { error_data: err });
            }
                db.query(year, function(err, b){
                    if(err || b.length == 0){
                    console.log(err);
                    return res.render('errorpage', { error_data: err });
                    } 
                    else {
                        db.query(headings, function(err, c){
                            if(err || c.length == 0){
                                console.log(err);
                                return res.render('errorpage', { error_data: err });
                            } 
                            else {
                                console.log(a);
                                res.render('setplaceholder', {courselist: a, year : b, headings: c});
                            }
                        });
                    }
                });
                
        });
});

/*

    Course set Position in Program of Study
    Post Request

*/

change_router.post('/set', ensureAuthenticated, function (req, res) {
    /*
        POST FUNCTION - COURSE UPDATE/INSERT
        In this For Loop we run through all of the course data
        and update new grades and semesters
    */

    var catpost = "INSERT INTO etm.offered_in (catalogYear, courseName, position, heading) VALUES(?, ?, ?, ?) ON DUPLICATE KEY UPDATE position = ?, heading = ?;";
    var i = 0;
    for (i; i <= req.body.code.length - 1; i++) {
        const j = i;
       //Catch Queries without primary keys
       //If the data has an empty courseName don't execute
       if(req.body.position[j] != ''){
           var k = j;
           db.query(catpost, [req.body.catalog[k], req.body.code[k], req.body.position[k], req.body.heading[k], req.body.position[k], req.body.heading[k]], function (err, data) {
               if(err){    
                   console.log(err);
                   return res.redirect('/errorpage');
               }
           });
       }   
   }
    res.redirect('/courseedit/set');
});

/*

    Update Headings
*/

change_router.post('/heading', ensureAuthenticated, function (req, res) {
    var i = 0;
    var heading_update = "INSERT INTO etm.heading (catalogyear, heading, position) VALUES(?, ?, ?) ON DUPLICATE KEY UPDATE heading = ?, position = ?;";
    for (i; i <= req.body.heading.length - 1; i++) {
        //Catch Queries without primary keys
        //If the data has an empty courseName don't execute
        db.query(heading_update, [req.body.catalog[i], req.body.heading[i], req.body.position[i], req.body.heading[i], req.body.position[i]], (err, data) => {
            if (err) {
                console.log(err);
                return res.redirect('/errorpage');
            }
        });
    }

    res.redirect('/courseedit/heading');
});

/*

    Add a Course Post Request

*/

change_router.post('/add', ensureAuthenticated, function (req, res) {
    var offupdate = "INSERT INTO etm.offered_in (catalogYear, courseName, position, heading) VALUES(?, ?, ?, ?) ON DUPLICATE KEY UPDATE heading = ?;"
    var courseupdate = "INSERT INTO etm.course (longName, shortName, hours, tier) VALUES(?, ?, ?, ?) ON DUPLICATE KEY UPDATE longName = ?, hours = ?, tier = ?;";
    db.query(offupdate, [req.body.catalog, req.body.code, 0, 0, req.body.heading, req.body.heading], (err, data) => {
        if(err){
            console.log(err);
            return res.redirect('/errorpage');
        }
        db.query(courseupdate, [req.body.name, req.body.code, req.body.hours, req.body.tier, req.body.name, req.body.hours, req.body.tier], (err, data) => {
            if(err){    
                console.log(err);
                return res.redirect('/errorpage');
            }
        });
    });

    res.redirect('/courseedit/index');
});

/*

    Add A Placeholder Post Request

*/

change_router.post('/pset', ensureAuthenticated, function (req, res) {
    
    var addcourseq = "INSERT INTO etm.placeholder (catalog, courseCode, position, heading, courseTier, courseHours) VALUES(?, ?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE heading = ?, courseTier = ?, courseHours = ?;";
    db.query(addcourseq, [req.body.catalog, req.body.code, 0, req.body.heading, req.body.tier, req.body.hours, req.body.heading, req.body.tier, req.body.hours], (err, data) => {
        if(err){    
            console.log(err);
            return res.redirect('/errorpage');
        }
    });

    res.redirect('/courseedit/index');
});

/*

    Set a Placeholder Position Post Request

*/

change_router.post('/placeholder', ensureAuthenticated, function (req, res) {
    var catpost = "INSERT INTO etm.placeholder (catalog, courseCode, position, heading) VALUES(?, ?, ?, ?) ON DUPLICATE KEY UPDATE position = ?, heading = ?;";
    var i = 0;
    for (i; i <= req.body.code.length - 1; i++) {
       //Catch Queries without primary keys
       //If the data has an empty courseName don't execute
        db.query(catpost, [req.body.catalog[i], req.body.code[i], req.body.position[i], req.body.heading[i], req.body.position[i], req.body.heading[i]], (err, data) => {
            if(err){    
                console.log(err);
                return res.redirect('/errorpage');
            }
        }); 
   }

    res.redirect('/courseedit/placeholder');
});

/*

    Add Heading Post request

*/

change_router.post('/hadd', ensureAuthenticated, function (req, res) {
    var addheading = "INSERT INTO etm.heading (catalogyear, heading, position) VALUES(?, ?, ?) ON DUPLICATE KEY UPDATE position = ?;";
    db.query(addheading, [req.body.catalog, req.body.heading, req.body.position, req.body.position ], (err, data) => {
        if (err) {
            console.log(err);
            return res.redirect('/errorpage');
        }
    });

    res.redirect('/courseedit/index');
});



/*

    SUBMIT BASIC GET REQUEST

    FUNCTION: Grabs the webpage houme. Can display information
    from the database.

    Description: It does this by grabbing the houme file.
    It replaces any variables in the pug file with data from
    the database.

*/

/*

    Delete a Course

*/

change_router.get('/deletecourse/:course_code', ensureAuthenticated, function(req, res) {
    //var deleteusername = req.params.account_username;
    var course_code = req.params.course_code;
    console.log(course_code);

    //SELECT * FROM etm.enrolled_in WHERE SUBSTRING(semester, 3, 4) = '15';
    var courseremove = "DELETE FROM etm.course WHERE shortName = ?";
    var offeredinremove = "DELETE FROM etm.offered_in WHERE courseName = ?";
    var enrolledinremove = "DELETE FROM etm.enrolled_in WHERE courseName = ?";
    db.query(enrolledinremove, course_code, (err, data) => {
        if(err){
            console.log(err);
            return res.redirect('/errorpage');
        }
        db.query(offeredinremove, course_code, (err, data) => {
            if (err) {
                console.log(err);
                return res.redirect('/errorpage');
            }
            db.query(courseremove, course_code, (err, data) => {
                if (err) {
                    console.log(err);
                    return res.redirect('/errorpage');
                }
            });
        });
    });

    res.redirect('/courseedit/remove');
});

/*

    Delete a Placeholder

*/


change_router.get('/pdelete/:course_code/:catalogyear', ensureAuthenticated, function (req, res) {
    //var deleteusername = req.params.account_username;
    var course_code = req.params.course_code;
    var catalog_year = req.params.catalogyear;
    console.log(course_code);
    console.log(catalog_year);
    db.query("DELETE FROM placeholder WHERE courseCode = ? AND catalog = ?;", [course_code, catalog_year], (err, data) => {
        if(err){
            console.log(err);
            return res.redirect('/errorpage');
        }
    });

    res.redirect('/courseedit/premove');
});

module.exports = change_router;