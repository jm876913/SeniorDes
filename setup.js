/*
*
*   Server Setup File
*   Filename: setup.js
*
*   This file is used to setup the server portion of the nodejs 
*   application.
*
*/


//Use http
var http = require('http');

//Require the application file
var app = require('./app');

//Find the port and if not found use 3000
var port = process.env.PORT || 80;

//Handle each request
var server = http.createServer(app);

//Listen to the port
let serv = server.listen(port);
module.exports = serv;