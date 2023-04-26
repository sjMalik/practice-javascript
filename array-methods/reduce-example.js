const numbers = [1,2,3,4,5];

const sum = (accm, curr)=> {
    return accm + curr;
};

const sumofElelemtns = numbers.reduce(sum);
console.log(sumofElelemtns)