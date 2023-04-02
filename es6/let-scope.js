function letScopeCheck(){
    let a = "hello";

    if(a === "hello"){
        let b = "world";
        console.log(a, b);  // Print - hello world
    }

    console.log(b); // Give error - ReferenceError: b is not defined
}

letScopeCheck();