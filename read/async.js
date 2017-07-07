var fs = require('fs'); 

fs.readFile('../data/users.json',function(err,data){
	if(err){
		console.log(err);
	}else{
		console.log(data)
	}
});


/* 
   If the encoding option is specified then readFile function returns a string. 
   Otherwise it returns a buffer.
*/


/*fs.readFile('../data/users.json','utf-8',function(err,data){
	if(err){
		console.log(err);
	}else{
		console.log(data)
	}
});*/