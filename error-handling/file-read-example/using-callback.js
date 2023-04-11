const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'text.txt');

fs.readFile(filepath, function(err, data) {
    if(err){
        console.error(err);
        return;
    }
    console.log(data);
})