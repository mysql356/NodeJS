url = require('url'),
http = require('http'),
qs = require('querystring');

http.createServer(function (req, res) {

    if(req.method=='POST') {

            var body='';
            req.on('data', function (data) {

                body +=data;				 
            });

            req.on('end',function(){

                var POST =  qs.parse(body);

                console.log(POST);
            });
    }

    else if(req.method=='GET') {

        var url_parts = url.parse(req.url,true);

        console.log(url_parts.query);

    }

res.end("done");

}).listen(1337);
console.log("Server running at http://localhost:1337/");