/**
 * map method is used to iterate over an array. In each iteration it applies callback function to the current element and finally returns a new array
 * It manipulates the value of the elements of the array. The new array will have the same length as original
 */

const numbers = [1,2,3,4,5];
const mappedNums = numbers.map(num=> num*2);
console.log(mappedNums)