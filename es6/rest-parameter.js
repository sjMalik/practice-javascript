// simple function
function fun(a,b){
    return a + b;
}
 
console.log(fun(1,2)); // 3
console.log(fun(1,2,3,4,5)); // 3


// ES6 rest parameter
function fun(...input){
    let sum = 0;
    for(let i of input){
        sum+=i;
    }
    return sum;
}
 
console.log(fun(1,2)); // 3
console.log(fun(1,2,3)); // 6
console.log(fun(1,2,3,4,5)); // 15