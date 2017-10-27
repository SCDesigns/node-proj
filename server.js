var http = require("http"); // Requires Node's built in HTTP module and makes it accessible through the var http

/* We then call one of the functions the http module offers: createServer. This returns an
object w/ a method named listen. It takes a numeric value which indicates the
port number our HTTP server is going to listen on. */
function start(){
  function onRequest(request, response) {
    console.log("Request received."); // This is printed twice upon navigating to localhost:8888 b/c most browsers attempt to load the favicon
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;

// by wrapping the server in the start() function and exporting it we can access it elsewhere, ex: index.js
