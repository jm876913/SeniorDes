const LocalStrategy = require('passport-local').Strategy;
var db = require('./db');
const bcrypt = require('bcrypt');

module.exports = function(passport) {

// passport.use(
//     'local-signup',
//     new LocalStrategy({
//         // by default, local strategy uses username and password, we will override with email
//         usernameField : 'username',
//         passwordField : 'password',
//         passReqToCallback : true // allows us to pass back the entire request to the callback
//     },
//     function(req, username, password, done) {
//         // find a user whose email is the same as the forms email
//         // we are checking to see if the user trying to login already exists
//         connection.query("SELECT * FROM accounts WHERE username = ?", [username], function(err, rows) {
//             if (err)
//                 return done(err);
//             if (rows.length) {
//                 return done(null, false, req.flash('signupMessage', 'That username is already taken.'));
//             } 
//             else {
//                 // if there is no user with that username
//                 // create the user
//                 var newUserMysql = {
//                     username: username,
//                     password: bcrypt.hashSync(password, null, null)  // use the generateHash function in our user model
//                 };

//                 var insertQuery = "INSERT INTO users ( username, password ) values (?,?)";

//                 connection.query(insertQuery,[newUserMysql.username, newUserMysql.password],function(err, rows) {
//                     newUserMysql.id = rows.insertId;

//                     return done(null, newUserMysql);
//                 });
//             }
//         });
//     })
// );
    
passport.use(
   'local-login',
    new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, username, password, done) { // callback with email and password from our form
        db.query("SELECT * FROM etm.accounts WHERE username = ? OR email = ?", [username, username], function(err, user){
            if (err)
                return done(err);
            if (!user.length) {
                return done(null, false, req.flash('loginMessage', 'Account does not exist')); // req.flash is the way to set flashdata using connect-flash
            }

            // if the user is found but the password is wrong
            if (!bcrypt.compareSync(password, user[0].password)){
                return done(null, false, req.flash('loginMessage', 'Invalid password')); // create the loginMessage and save it to session as flashdata
            }
            // all is well, return successful user
            return done(null, user[0]);
        });
    })
);

passport.serializeUser(function(user, done) {
    done(null, user.username);
});

passport.deserializeUser(function(id, done) {
    db.query("SELECT * FROM accounts WHERE username = ? ", [id], function(err, user){
        done(err, user[0]);
    });
});

};

