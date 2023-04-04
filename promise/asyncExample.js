/**
 * 
 * @returns Promise
 */
let getPromise = async ()=> {
    let data = "Hello World";
    return data;
}

console.log(getPromise());  // Promise { 'Hello World' }
getPromise().then(data=> {
    console.log(data);      // 'Hello World'
})