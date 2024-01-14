const url = require('node:url');

console.log(url.parse("https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash"));

const myURL = new URL('https://example.org/foo#bar');

console.log(myURL.hash);
