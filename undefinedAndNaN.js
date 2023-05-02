console.log(undefined+11);          // NaN
console.log((undefined+11) == NaN)  // false;
let a;
console.log(a === undefined);       // true


console.log(1 + +"2"+"2");      // 32
console.log(+ +"2"+1);          // 3 (2 will be converted to number here)
console.log(1 + -"1" + "2");    // 02
console.log(+"1" + "1" + "2");  // 112
console.log("A" - "B" + "2");   // NaN2
console.log("A" - "B" + 2);     // NaN