// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

let names = require('./names');
let sayHello = require('./utils');

sayHello(names.john);
sayHello(names.peter);
