/**
 * Write a function that would allow you to do this.
    var addSix = createBase(6);
    addSix(10); // returns 16
    addSix(21); // returns 27
 */

function createBase(base){
    return (numberInput)=> {
        return numberInput + base
    }
}

var addSix = createBase(6);
    console.log(addSix(10)); // returns 16
    console.log(addSix(21)); // returns 27

