var fs = require('fs');
var path = require('path');

fs.readFile(path.join(path.dirname(__filename),'simple.txt'), 'utf8', function(error, contents) {
    console.log(contents);
});
console.log('End');