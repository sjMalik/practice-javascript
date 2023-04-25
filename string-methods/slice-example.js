/**
 * extract part of a string and return the extracted part
 * slice() method takes 2 parameters start position(required), end position(optional) ;
 * javascript counts postion from 0 so 1st postion is 0
 * If you omit the second parameter, the method will slice out the rest of the string
 * If a parameter is negative, the position is counted from the end of the string
 */

const fruits = "Apple, Banana, Kiwi";
const part = fruits.slice(7, 13);
console.log(part);                  // Banana
const another = fruits.slice(7);
console.log(another);               // Banana, Kiwi
const another2 = fruits.slice(-4);
console.log(another2)               // Kiwi