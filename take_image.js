/*

var dirname = '\\c:\\Program Files\\wkhtmltopdf'
var wkhtmltoimage = require('wkhtmltoimage').setCommand(dirname + '\\bin\\wkhtmltoimage');

wkhtmltoimage.generate('index.html', { output: 'current-state.jpeg' });
*/

var fs = require=('fs');

fs.readFile('README.md', 'utf8', function(err, contents) {
    console.log(contents);
});
 
console.log('after calling readFile');