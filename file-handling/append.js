var fs = require('fs');

fs.appendFile('mynewfile_append.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
}); 