console.log(a);
var a = 2; // undefined (not an error)


// console.log(a);
// let a; // Uncaught ReferenceError: a is not defined

// console.log(a);
// a = 20;
// let a;

x = {a:10};
console.log(x.a);   // 10
var x;

// Actual
// var x;
// x = {a:10};
// console.log(x.a)

// Hoisting is a javascript mechanism where variable and function declaration are moved to the top of their scope before execution
// Just like  var, let declarations are hoisted to the top. Unlike var which is initialized as undefined, the let keyword is not initialized. 
// So if you try to use a let variable before declaration, you'll get a Reference Error.

// console.log(a); // undefined
// var a = 'Hello'

// console.log(b);
// let b = 'Hello'; // Reference Error, Cannot access 'b' before initialization

// console.log(c);
// const c = 'Hello'; // Reference Error, Cannot access 'c' before initialization