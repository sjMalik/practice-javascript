let arr = [1, 2, 5, 10, 20];

const sum = (accm, curr)=> {
    return accm + curr;
};

console.log(arr.reduce(sum));