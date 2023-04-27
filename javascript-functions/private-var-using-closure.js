// function func() {
//     var priv = "secret code";
//   }
  
//   console.log(priv); // throws error

function func() {
    var priv = "secret code";
    return function getPrivate(){
        return priv;
    }
}

const getPriv = func();
console.log(getPriv())