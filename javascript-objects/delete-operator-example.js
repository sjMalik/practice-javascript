/**
 * delete operator is used to delete a property from an object. Here x is not an object it's local variable. delete operator doesn't affect local variable.
 */
var output = (function(x) {
    delete x;
    return x;
  })(0);
  
  console.log(output); // 0