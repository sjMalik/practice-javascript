// You can change the element of an constant object
const obj = {
    name: 'surajit'
};

obj.name = 'sjmalik';
console.log(obj);

// You can change the element of a constant array
const arr = [2,3];
arr[0] = 1;
arr[1] = 2;
console.log(arr);

// You cant reassigned constant element
const num = 1;
num = 2;