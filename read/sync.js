var fs = require('fs'); 

var data = fs.readFileSync('test.txt');

/* 
   If the encoding option is specified then readFileSync function returns a string. 
   Otherwise it returns a buffer.
*/

//var data = fs.readFileSync('test.txt','utf-8')

console.log(data)