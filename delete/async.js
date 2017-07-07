var fs = require('fs');


fs.unlink('sample.txt',function(err){
    if(err){
    	console.log("Error while deleting the file "+err);
    }
});
