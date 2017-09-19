var str_dec = require('string_decoder').StringDecoder;
var d = new str_dec('utf8');
var b = Buffer('manoj kumar');

console.log(b); //write buffer
console.log(d.write(b)); // write decoded buffer