// Var is global and function/local scoped
// Let and Const are block scoped
var greeting = "say Hi";
if (true) {
    var greeting = "say Hello instead";
    console.log(greeting); // "say Hello instead"
}
console.log(greeting); // "say Hello instead"


let greeting2 = "say Hi";
if (true) {
    let greeting2 = "say Hello instead";
    console.log(greeting2); // "say Hello instead"
}
console.log(greeting2); // "say Hi"

const greeting3 = "say Hi";
if (true) {
    const greeting3 = "say Hello instead";
    console.log(greeting3); // "say Hello instead"
}
console.log(greeting3); // "say Hi"