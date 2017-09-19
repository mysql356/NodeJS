var fs = require('fs');
 

fs.rename('mynewfile_write.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
}); 