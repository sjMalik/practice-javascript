const user = {
    username: 'Surajit',
    getUserName: function(){
        return this.username
    }
};

console.log(user.getUserName());

/**
 * arrow functions don’t have their own this binding. If we access this in the arrow function it will return the this of the closest non-arrow parent function.
 */
const user2 = {
    username: 'Malik',
    getUserName: ()=> {
        // Here this refers to the window object instead of user2 object
        return this.username
    }
};

console.log(user2.getUserName());