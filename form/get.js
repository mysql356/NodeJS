var http = require('http'),
    url = require('url');
	http.createServer(function (req, res) {
    var query = url.parse(req.url,true).query;

	//res.write('' + query.foo);
	//res.write('\n');

    res.end(JSON.stringify(query));
}).listen(1337);
console.log("Server running at http://localhost:1337/");