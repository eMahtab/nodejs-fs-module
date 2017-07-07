var fs = require('fs');
var data;

try{
   data = fs.readFileSync('../data/users.json');
}catch(err){
   console.log("Error while reading file "+err);
}
 

try{
   fs.writeFileSync('users-backup.json',data);
}catch(err){
   console.log("Error while writing file "+err)
}
