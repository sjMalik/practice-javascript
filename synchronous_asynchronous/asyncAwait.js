/**
 * Synchronous JavaScript: 
 * As the name suggests synchronous means to be in a sequence, i.e. every statement of the code gets executed one by one. 
 * So, basically a statement has to wait for the earlier statement to get executed.
 */

/**
 * Asynchronous JavaScript: 
 * Asynchronous code allows the program to be executed immediately where the synchronous code will block further execution of the remaining code until it finishes the current one. 
 * This may not look like a big problem but when you see it in a bigger picture you realize that it may lead to delaying the User Interface.
 */

let listOfFunctions = [
    () => {
        console.log("Synchronous function call")
    },

    async () => new Promise(resolve=> {
        setTimeout(()=> {
            console.log("Asynchronous function call");
            resolve(true);
        }, 100);
    })
];

let executeFunc = async(listOfFunctions) => {
    for(let func of listOfFunctions){
        await func();
    }
}

executeFunc(listOfFunctions);