function closureExample() {
    let a = "hello";
    return function innerFunction() {
        return a;
    }
}

// let print = closureExample();
console.log(closureExample()());


// Another example
function x(){
    let a = 7;

    function y(){
        console.log(a);
    }
    return y;
}

const z = x();
z();