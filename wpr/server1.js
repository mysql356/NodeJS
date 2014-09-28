var http = require("http");


var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end();
});


server.listen(8082);


console.log('Server running on port 8082.');

console.log("Hello World");
console.log(__filename);