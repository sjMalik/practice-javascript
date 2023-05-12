/**
 * First, the first four lines of this code are executed. The console will print out 1, and then promise1 will turn into a resolved state.
Then start executing the promise1.then(() => {console.log(3);}); snippet. Because promise1 is now in the resolved state, the () => {console.log(3);} will be added to the microtask queue immediately.
But we know () => {console.log(3);} is a microtask, so it is not immediately called.
Then the last line of code (console.log(4);) is executed and 4 is printed in the console.
At this point, all the synchronized code, the current macrotask, is executed. Then the JavaScript engine checks the queue of microtasks and executes them in turn.
() => {console.log(3);} is then executed and 4 is printed in the console.
 */

const promise1 = new Promise((resolve, reject) => {
    console.log(1);
    resolve('success')
  });
  
  promise1.then(() => {
    console.log(3);
  });
  
  console.log(4);