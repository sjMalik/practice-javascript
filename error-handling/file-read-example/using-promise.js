const fs = require('fs');
const path = require('path');
const util = require('util');

const filepath = path.join(__dirname, 'text.txt');
const readfile = util.promisify(fs.readFile);

readfile(filepath)
.then(data=> console.log(data))
.catch(err=> console.error(err))