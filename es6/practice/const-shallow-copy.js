// both the object are pointing to same reference.
const a = { x: 1, y: 2 };
const b = a;
b.x = 3;
console.log(a); // { x: 3, y: 2 }
console.log(b); // { x: 3, y: 2 }