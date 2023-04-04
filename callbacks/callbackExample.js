const mainFunction = (callback) => {
    setTimeout(()=> {
        callback([2,3,4])
    }, 2000);
}

const add = (arr) => {
    let sum = arr.reduce((a,b)=> a+b);
    console.log(sum);
}

mainFunction(add);