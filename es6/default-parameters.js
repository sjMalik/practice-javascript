// ES5
function fun(a,b){
    return a+b;
}
 
console.log(fun(2,1)); // 3
console.log(fun(2)); // 2 + undefined is NaN(not-a-number)

// ES5(improved)
function fun(a,b){
    b = (typeof b!=='undefined')?b:1;
    return a + b;
}
 
console.log(fun(2,1)); // 3
console.log(fun(2)); // 3

// ES6
function fun(a,b=1){
    return a + b;
}
 
console.log(fun(2,1)); // 3
console.log(fun(2)); // 3