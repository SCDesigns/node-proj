var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);

/*
Just like any internal module:
by requiring our server module's file and assigning
it to a variable, its exported functions become
available to us.

we now start the app w/ node index.js
*/
