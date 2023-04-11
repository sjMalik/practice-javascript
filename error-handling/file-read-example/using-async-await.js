const fs = require('fs');
const path = require('path');
const util = require('util');

const filepath = path.join(__dirname, 'text.txt');
const readfile = util.promisify(fs.readFile);

(async ()=> {
    try{
        const data = await readfile(filepath);
        console.log(data);
    }catch(err){
        console.error(err)
    }
})()