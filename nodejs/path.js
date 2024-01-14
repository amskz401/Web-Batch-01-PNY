const path = require('node:path');

console.log(path.basename('/foo/bar/baz/asdf/quux.html'));

console.log(path.extname('quux.jpg'));

console.log(__dirname, 'mysite/index.html');