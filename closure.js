function closureExample() {
    let a = "hello";
    return function innerFunction() {
        return a;
    }
}

let print = closureExample();
console.log(print)