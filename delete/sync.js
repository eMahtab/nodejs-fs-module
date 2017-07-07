var fs = require('fs');

try{
   fs.unlinkSync('sample.txt');
}catch(err){
   console.log("Error while deleting the file "+err);
}
