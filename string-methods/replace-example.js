/**
 * The replace() method does not change the string it is called on.
 * The replace() method returns a new string.
 * The replace() method replaces only the first match
 * If you want to replace all matches, use a regular expression with the /g flag set
 */

let str = 'Please visit Microsoft and Microsoft!';
console.log(str.replace('Microsoft', 'W3School'));  // Please visit W3School and Microsoft!
// By default, the replace() method is case sensitive
console.log(str.replace('MICROSOFT', 'W3School'));  // Please visit Microsoft and Microsoft!
// To replace case insensitive, use a regular expression with an /i flag
console.log(str.replace(/MICROSOFT/i, 'W3School')); // Please visit W3School and Microsoft!
// To replace all matches, use a regular expression with a /g flag (global match)
console.log(str.replace(/MICROSOFT/ig, 'W3School')); // Please visit W3School and W3School!
// replaceAll() method
console.log(str.replaceAll('Microsoft', 'W3School')); // Please visit W3School and W3School!
