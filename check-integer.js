function isInt(num){
    console.log(typeof num)
    return num % 1 === 0 && (typeof num) === 'number';
};

console.log(isInt(1));
console.log(isInt('1'));
console.log(isInt(1.1));