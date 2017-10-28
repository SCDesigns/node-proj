var server = require("./server");
var router = require("./router");

server.start(router.route);

/*
Just like any internal module:
by requiring our server module's file and assigning
it to a variable, its exported functions become
available to us.

we now start the app w/ node index.js
*/
