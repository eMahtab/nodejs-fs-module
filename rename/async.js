var fs = require('fs');


fs.rename('main.js','config.js',function(err){
  	if(err){
  		console.log("Error while renaming file "+err);
  	}
});

