const getPromise1 = (flag)=> {
    return new Promise((resolve, reject)=> {
        if(flag){
            resolve(true)
        }else{
            const error = new Error(false);
            reject(error)
        }
    })
}

// getPromise1(false).then(data=> console.log(data)).catch(e=> console.log(e))

const getPromise2 = async (flag)=> {
    if(flag){
        return true
    }else{
        throw new Error(false)
    }
}

(async ()=> {
    try{
        let data = await getPromise2(true);
        console.log(data)
    }catch(e){
        console.log(e)
    }
})();

const to = require('await-to-js');

(async () => {
    const [err, data] = await to(getPromise2(false));
})();

console.log('Important code to execute');

