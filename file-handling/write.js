var fs = require('fs');

fs.writeFile('mynewfile_write.txt', 'Hello content...!', function (err) {
  if (err) throw err;
  console.log('Saved!');
}); 