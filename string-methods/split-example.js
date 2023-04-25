/**
 * A string can be converted to an array with the split() method
 * If the separator is omitted, the returned array will contain the whole string in index [0].
 * If the separator is "", the returned array will be an array of single characters
 */

const text1 = 'A;B;C';
console.log('Split on commas ', text1.split(";"));   // [ 'A', 'B', 'C' ]

const text2 = 'A B C';
console.log('Split on spaces ', text2.split(" "));  // [ 'A', 'B', 'C' ]

const text3 = 'A | B | C';
console.log('Split on pipe ', text3.split(" | "));   // [ 'A', 'B', 'C' ]

const text4 = 'ABC'
console.log('If the separator is "", the returned array will be an array of single character', text4.split(""));
console.log('If the separator is omitted, the returned array will contain the whole string in index [0] ', text4.split());