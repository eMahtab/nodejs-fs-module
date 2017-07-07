var fs = require('fs'); 

var data;

try{
    data = fs.readFileSync('test.txt');
}catch(err){
    console.log("Error occured while reading data "+err)
}
 

/* 
   If the encoding option is specified then readFileSync function returns a string. 
   Otherwise it returns a buffer.
*/

/*try{
    data = fs.readFileSync('test.txt','utf8');
}catch(err){
    console.log("Error occured while reading data "+err)
}*/

console.log(data)


