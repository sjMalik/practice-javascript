/**
 * substr() is similar to slice().
 * The difference is that the second parameter specifies the length of the extracted part.
 * slice() method takes 2 parameters start position(required), length of the extracted part(optional)
 * substr deprecated
 */

let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6);
console.log(part);