// function findMaxNum(){
//     return Math.max(...arguments);
// }
// console.log(findMaxNum.prototype)
// console.log(findMaxNum(1,2,3));

// const findMaxNum2 = (...args)=> {
//     console.log(Math.max(...arguments)); // NaN
//     return Math.max(...args);
// };
// console.log(findMaxNum2.prototype)
// console.log(findMaxNum2(1,2));

const user =  {
    name: 'Surajit',
    getUsername: function() {
        return this.name
    }
}
console.log(user.getUsername()); // Surajit

const user2 =  {
    name: 'Surajit',
    getUsername: () => {
        return this.name
    }
}
console.log(user2.getUsername()); // undefined
