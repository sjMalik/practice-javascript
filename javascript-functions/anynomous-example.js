(function() {
    var a = b = 5;
  })();
  
//   b is not declared anywhere in the function with var so it is set equal to 5 in the global scope.
console.log(b); // 5