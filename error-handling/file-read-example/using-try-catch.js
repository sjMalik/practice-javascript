/**
 * In the try…catch method, the try block surrounds the code where the error can occur. 
 * In other words, we wrap the code for which we want to check errors; the catch block handles exceptions in this block.
 */
const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'text.txt');

try{
    const data = fs.readFileSync(filepath);
    console.log(data);
}catch(err){
    console.error(err)
}