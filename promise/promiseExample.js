let promise = new Promise((resolve, reject)=> {
    const x = 'geeksforgeeks', y = 'geeksforgeek';

    if(x === y){
        resolve('success');
    }else {
        reject('errr');
    }
})

console.log(promise)    // Promise { 'success' } or Promise { <rejected> 'errr' }
promise.then((result)=> {
    console.log(result)
}).catch((e)=> {
    console.log(e)
})