const employee = {
    f_name: 'Surajit',
    age: 20
};

console.log({...employee, age: 29});
const {f_name, ...rest} = employee;
console.log(f_name);
console.log(rest);