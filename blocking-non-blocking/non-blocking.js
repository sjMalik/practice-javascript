const fs = require('fs');
const path = require('path');
const filepath = path.join(__dirname, 'text.txt');
fs.readFile(filepath, {encoding: 'utf8'}, (err, data) => {
    // Prints the content of file in a asynchronous and non-blocking way 
    console.log("data");
});
// This section calculates the sum of numbers from 1 to 10
// The sum will be calculated first and at the same time it also reads file
let sum = 0;
for(let i=1; i<=10; i++){
    sum = sum + i;
}
// Prints the sum
console.log('Sum: ', sum);