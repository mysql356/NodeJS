var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  //res.end('Hello World\n');
   
	var mysql = require('mysql');
	var con = mysql.createConnection({
	  host: "localhost",
	  user: "root",
	  password: "",
	  database: "folksvagnfinal_new"
	});
	
	 con.connect(function(err) {
	  if (err) throw err;
		var s = "SELECT * FROM users where user_id in (25393,30567)";
	  con.query(s, function (err, result, fields) {
		if (err) throw err;
			console.info(result);
			 
			var s1 = JSON.stringify(result);
			res.write(s1);
			res.write('<br><br>');
			//res.write(s);
	
			res.write('' + result[0].user_id);
			res.end();
	  });
	});
	
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');