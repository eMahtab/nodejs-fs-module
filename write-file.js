var fs = require('fs');
 
// write
//fs.writeFileSync('test.txt', 'Hello fs!');

// read
//console.log(fs.readFileSync('test.txt').toString());

var data = fs.readFileSync('users.json');


fs.writeFileSync('users-backup.json',data);