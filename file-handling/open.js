var fs = require('fs');

fs.open('mynewfile_open.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
}); 