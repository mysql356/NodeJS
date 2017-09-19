const dns = require('dns');

dns.lookup('nodejs.org', (err, addresses, family) => {
console.log('error:', err);
console.log('addresses:', addresses);
console.log('family:', family);
});
// address: "192.0.43.8" family: IPv4
