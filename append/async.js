var fs = require('fs');

function handleError(err){
  console.log("Error while writing the data "+err);
}

fs.appendFile('file.txt','Line 1\n',function(err){
   if(err){
    handleError(err);
   }
   else{
     fs.appendFile('file.txt','Line 2',function(err){
        if(err){
         handleError(err);
         }
     });
   }
});




