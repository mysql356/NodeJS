var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World <a href="http://localhost:8081/">Click Here</a> \n');
}).listen(8081);

console.log('Server running on port 8081.');

console.log("Hello World");
console.log(__dirname);


/*How to use
cmd
D:\wamp\www\nodeJs>node 2.js

http://localhost:8081/
*/