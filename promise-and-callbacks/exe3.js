/**
 * First, the first four lines of code are the same as before, 1 is printed in the console, and the state of promise1 is resolved.
 * Then execute const promise2 = promise1.then(...), res => {console.log(res)} is added to the microtask queue. At the same time, promise1.then() will return a new pending promise object.
 * Then execute console.log(‘promise1:', promise1);, and the console prints out the string 'promise1' and the promise1 in the resolved state.
 * Then execute console.log(‘promise2:', promise2);, and the console prints out the string ‘promise2' and the promise2 in the pending state.
 * At this point, all the synchronized code, the current macrotask, is executed. Then the JavaScript engine checks the queue of microtasks and executes them in turn.
 * res => {console.log(res)} is the only task in the microtask queue, and it will be executed now. And then the console will print 'reslove1'.
 */

const promise1 = new Promise((resolve, reject) => {
    console.log(1)
    resolve('resolve1')
  })
  
  const promise2 = promise1.then(res => {
    console.log(res)
  })
  
  console.log('promise1:', promise1);
  console.log('promise2:', promise2);
  
  /**Output
   * 1
   * promise1: Promise { 'resolve1' }
   * promise2: Promise { <pending> }
   * resolve1
   */