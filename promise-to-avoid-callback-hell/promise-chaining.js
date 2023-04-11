const cart = ["Mobile", 'Tampered Glass', 'Back Cover'];

const createOrder = function(cart, flag){
    return new Promise((resolve, reject)=> {
        const orderId = 1234;
        if(flag){
            resolve(orderId)
        }else{
            const err = new Error('Cart is not valid');
            reject(err);
        }
    })
};

const proceedToPayment = function(orderId){
    return new Promise((resolve, reject)=> {
        resolve('Payment Successfull')
    })
};

// createOrder(cart, true)    // Payment Successfull
//     .then(function (orderid) {
//         return orderid;
//     })
//     .then(function(orderId){
//         return proceedToPayment(orderId)
//     })
//     .then(function (paymentInfo){
//         console.log(paymentInfo)
//     })
//     .catch((err)=> {
//         console.error(err.message)
//     });

// createOrder(cart, false)    // Cart is not valid
//     .then(function (orderid) {
//         return orderid;
//     })
//     .then(function(orderId){
//         return proceedToPayment(orderId)
//     })
//     .then(function (paymentInfo){
//         console.log(paymentInfo)
//     })
//     .catch((err)=> {
//         console.error(err.message)
//     });

// createOrder(cart, false)        // Cart is not valid
//     .then(function (orderid) {  // Payment Successfull
//         return orderid;
//     })
//     .catch((err)=> {
//         console.error(err.message)
//     })
//     .then(function(orderId){
//         return proceedToPayment(orderId)
//     })
//     .then(function (paymentInfo){
//         console.log(paymentInfo)
//     })
//     .catch((err)=> {
//         console.error(err.message)
//     })
//     .then(function (paymentInfo){
//         console.log('No matter what happens, I will definately be called')
//     });

(async ()=> {
    try{
        const orderId = await createOrder(cart, false);
        const paySuccess = await proceedToPayment(orderId);
        console.log(paySuccess);
    }catch(e){
        console.error(e);
    }
})();