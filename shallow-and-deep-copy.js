// Shallow Copy with Var Hoisting - Using Assignment
obj1 = {a: 10};
var obj2 = obj1;    // Shallow Copy
obj2.a = 20;
var obj1;
console.log(obj1.a, obj2.a);    // 20, 20


// Deep Copy - Using JSON.stringify and JSON.parse
var obj3 = {a: 10};
var obj4 = JSON.parse(JSON.stringify(obj3));
obj4.a = 20;
console.log(obj3.a, obj4.a);    // 10, 20

// Deep Copy - Using Spread Operator
var obj5 = {a:10};
var obj6 = {...obj5};
obj6.a = 20;
console.log(obj5.a, obj6.a);    // 10, 20

// Deep Copy - Using Object.assign operator
// But the problem of working with Object.assign operator is that it doesn’t work perfectly in the case of nested object
var obj7 = {a:10};
var obj8 = Object.assign({}, obj7);
obj8.a = 20;
console.log(obj7.a, obj8.a);    // 10, 20
