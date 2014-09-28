var http = require("http");
var url = require("url");

function route(pathname) {
  console.log("About to route a request for " + pathname);
}


http.createServer(function(request, response) {
var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    route(pathname);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();

}).listen(8888);