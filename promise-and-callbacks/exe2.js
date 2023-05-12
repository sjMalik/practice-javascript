/**
 * This example is very similar to the previous one, except that in this one, 
 * promise1 will always be in a pending state, 
 * so () => {console.log(3);} won't be executed and the console won't print 3.
 */

const promise1 = new Promise((resolve, reject) => {
    console.log(1);
});
  
promise1.then(() => {
console.log(3);
});
  
console.log(4);