var fs = require('fs');
 
try{
	fs.writeFileSync('demo.txt', 'Lets write something!');
}catch(err){
	console.log('Error while writing to file '+err)
}

