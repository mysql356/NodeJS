var dns = require('dns');
var w3 = dns.lookup('www.orahi.com', function (err, addresses, family) {
  console.log(addresses);
});