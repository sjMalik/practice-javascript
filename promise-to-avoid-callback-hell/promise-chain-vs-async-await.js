function resturent() {
    getCustomer()
    .then(customer=> {
        return getOrder(customer)
    })
    .then(order=> {
        return prepareFood(order)
    })
    .then(meal=> {
        serveMeal(meal)
    }).catch(showError);
}

async function resturent2() {
    try{
        let customer = await getCustomer();
        let order = await getOrder(customer);
        let meal = await prepareFood(order);
        await serveMeal(meal);
    }catch(e){
        // Show Error
    }
}
