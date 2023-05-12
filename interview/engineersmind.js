/**
 * Q1. Write code in logic form convert number to 2 significant digits
        0.00003456 = 0.000034
        0.003123 = 0.0031
        0.1232 = 0.12
 */

// let callMe = (num)=> {
    console.log(Number( 0.00003456.toPrecision(2) ))
    // }
    
    
    /**
     * Q2. What will be output?
     */
    var X = { Foo : 1}; 
    var Output = (function() 
    { 
    delete X.foo; 
    return X.foo; 
    } 
    )(); 
    console.log(Output); // undefined
    
    /**
     * Q3. What will be output?
     */
    var y = 1;
    if (function f() {}) {
        y += typeof f; 
    }
    console.log(y);  // 1undefined
    
    /**
     * Q4. What will be output?
     */
    var output = (function(x) {
        delete x;
        return x;
    })(0);
    
    console.log(output); // 0