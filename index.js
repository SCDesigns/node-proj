var server = require("./server");

server.start();

/*
Just like any internal module:
by requiring our server module's file and assigning
it to a variable, its exported functions become
available to us.

we now start the app w/ node index.js
*/
