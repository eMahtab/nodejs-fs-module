var fs = require('fs');

try{
  fs.renameSync('entry.js','main.js');
}catch(err){
  console.log("Error while renaming file "+err);
}


