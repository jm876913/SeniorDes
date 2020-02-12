/*

    Server Js

    This Fille runs the server indefinetley.

*/

var forever = require('forever-monitor');
 
  var child = new (forever.Monitor)('setup.js', {
    max: 3,
    silent: true,
    args: []
  });
 
  child.on('exit', function () {
    console.log('setup.js has exited after 3 restarts');
  });
 
  child.start();
