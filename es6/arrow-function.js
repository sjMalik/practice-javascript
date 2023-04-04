// ES5
function printName(name){
    console.log('Hello '+name);
}
 
printName('Mukul'); // Hello Mukul

// ES6
const printName = name =>{
    return `Hi ${name}`; // using template literals
}
console.log(printName('Mukul')); // Hi Mukul