var nodemailer = require('nodemailer');

// Use Smtp Protocol to send Email
var transporter = nodemailer.createTransport({
	host: 'smtp.elasticemail.com',
	protocol: 'smtp',
	port: 2525,
	secure: true, // true for 465, false for other ports
    auth: {
		user: 'xxxxx@gmail.com',
		pass: 'xxxxxxxxxxxxxxxxxxxxxxxxxx'
    }
});


var mailOptions = {
  from: 'no-reply@orahi.com',
  to: 'manoj.mysql@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};



var http = require('http');
http.createServer(function (req, res) {
 transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
