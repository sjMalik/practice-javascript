function test() {
    return func1()
    .then(v1 => {
        return func2(v1);
    })
    .then(v2 => {
        return func3(v1, v2);
    });
}

async function test() {
    let v1 = await func1();
    let v2 = await func2(v1); 
    return await func3(v1, v2);  
}