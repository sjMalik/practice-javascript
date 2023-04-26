/**
 * Filter method is used to filter the elements from an array based on given condition
 * And return a new array
 */

const numbers = [1,2,3,4,5];
const evenNumbers = numbers.filter(num=> num % 2 === 0);
console.log(evenNumbers);