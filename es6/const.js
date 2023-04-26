// You can change the element of an constant object
// as object is non-primitive or derived type of javascript
const obj = {
    name: 'surajit'
};

obj.name = 'sjmalik';
console.log(obj);

// You can change the element of a constant array
// as object is non-primitive or derived type of javascript
const arr = [2,3];
arr[0] = 1;
arr[1] = 2;
console.log(arr);

// You cant reassigned constant element
const num = 1;
num = 2;