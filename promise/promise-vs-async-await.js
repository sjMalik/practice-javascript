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

getPromise1(false).then(data=> console.log(data)).catch(e=> console.log(e))

const getPromise2 = async (flag)=> {
    if(flag){
        return true
    }else{
        throw new Error(false)
    }
}

(async ()=> {
    try{
        let data = await getPromise2(false);
        console.log(data)
    }catch(e){
        console.log(e)
    }
})();