var fs = require('fs');
 
// write
//fs.writeFileSync('test.txt', 'Hello fs!');

// read
//console.log(fs.readFileSync('test.txt').toString());

fs.readFile('users.json',function(err,data){
	if(err){
		console.log(err);
	}else{
		fs.writeFile('users-backup.json',data,function(err){
			if(err){
				console.log(err);
			}        
		});
	}
});


