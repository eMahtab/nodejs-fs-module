var fs = require('fs');

try{
   fs.appendFileSync('file.txt','Line 1\n')
}catch(err){
   console.log("Error while writing data "+err)
}

try{
   fs.appendFileSync('file.txt','Line 2')
}catch(err){
   console.log("Error while writing data "+err)
}



/*
  try{
    fs.writeFileSync('file.txt','Line 1\n')
  }catch(err){
   console.log("Error while writing data "+err)
  }

  try{
   fs.writeFileSync('file.txt','Line 2')
  }catch(err){
   console.log("Error while writing data "+err)
  }

*/

