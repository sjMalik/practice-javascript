// Without spread
let arr1 = [1,2,3,-1];
 
console.log(Math.min(arr1)); // NaN

// Spread operator
let arr2 = [1,2,3,-1];
 
console.log(Math.min(...arr2)); // -1