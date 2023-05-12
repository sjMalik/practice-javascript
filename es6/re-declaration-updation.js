// var supports re-delaration and updation in the same scope
// Let and Const didnt support re-declaration in the same scope

function a(){
    var b = 'hello';
    var b = 'hello world'
}
a();

function x(){
    let y = 'hello';
    y = 'Hello';    // No error
    let y = 'Hello World'; // Error: cant redeclare block scoped variable y
}

function p(){
    const q = 'hello';
    q = 'Hello';    // No error
    const q = 'Hello World'; // Error: cant redeclare block scoped variable q
}