var fs = require('fs');
 
// write
/*fs.writeFileSync('test.txt', 'Hello fs!');*/

// read

fs.readFile('users.json',function(err,data){

	console.log("Users "+data);
    var users = JSON.parse(data);
    console.log("Users "+users.results.length);

});

console.log("********************************");
//console.log(fs.readFileSync('test.txt').toString());

