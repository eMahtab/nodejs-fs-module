var fs = require('fs');

fs.readFile('../data/users.json',function(err,data){
	if(err){
		console.log("Error while reading file "+err);
	}else{
		fs.writeFile('users-backup.json',data,function(err){
			if(err){
				console.log("Error while writing file "+err);
			}        
		});
	}
});


