
const fs = require('fs');
const path = require('path');
const filepath = path.join(__dirname, 'text.txt');
// Reads a file in a synchronous and blocking way 
const data = fs.readFileSync(filepath, {encoding: 'utf8'}); 
// This section calculates the sum of numbers from 1 to 10
// After finishing reading file it will calculate sum
let sum = 0;
for(let i=1; i<=10; i++){
    sum = sum + i;
}
// Prints the sum
console.log('Print Second Sum: ', sum);