/**
 * Streams and asynchronous nature are things that makes Node so special and efficient.
 * Synchronous-style HTTP requests are possible in Node with the use of Javascript Promises, along with the concepts of async and await
 * 
 * The await operator can be placed before a Promise and makes Javascript to wait till the time promise is resolved or rejected. 
 * await can only be used inside an async function.
 * 
 * Inside the async function the Promise will be "awaited" to get either resolved or rejected. Until this happens, code execution inside the async function will not move forward.
 */

const http = require("http");

// THIS FUNCTION RETURN PROMISE
function getPromise() {
    return new Promise((resolve, reject) => {
        http.get('http://api.publicapis.org/entries', (response) => {
            let chunks_of_data = [];

            response.on('data', (fragments) => {
                chunks_of_data.push(fragments);
            });

            response.on('end', () => {
                let response_body = Buffer.concat(chunks_of_data);
                resolve(response_body);
            });

            response.on('error', (error) => {
                reject(error)
            });
        });

    })
}

// ASYNC FUNCTION TO MAKE HTTP REQUEST
async function makeSynchronousRequest() {
    try {
        let responseBody = await getPromise();
        console.log(responseBody);
    } catch (e) {
        console.log(e);
    }
}

console.log(1);

// ANNONYMOUS ASYNC FUNCTION TO EXECUTE SOME CODE SYNCHROUNOUSLY AFTER HTTP REQUEST
(async function () {
    await makeSynchronousRequest();
    console.log(2);
})();

console.log(3);


