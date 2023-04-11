const promise1 = function(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            resolve('one')
        }, 600);
    })
};

const promise2 = function() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            resolve('two')
        }, 200)
    })
};

const promise3 = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        reject(new Error('three'))
    }, 700);
})

Promise.all([promise1(), promise2()]).then((response)=> {
    console.log('Promise all', response);
});
Promise.race([promise1(), promise2()]).then((response)=> {
    console.log('Promise race', response)
})

Promise.all([promise1(), promise2(), promise3]).then(result=> {
    console.log('Promise all result', result)
}).catch(err=> console.log('Promise all error', err));

Promise.race([promise1(), promise2(), promise3]).then(result=> {
    console.log('Promise race result', result)
}).catch(err=> console.log('Promise race error', err))