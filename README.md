# Javascrpit & NodeJS Basics

## ES6 Concepts
 1. Let and Const
 2. Arrow Functiion
 3. Rest Parameter
 4. Spread Operator
 5. Class
 6. Template Literals
 7. Object and Array Destruction etc.
* Let and Const
    - Scope of Var
        - Before the advent of ES6, var declarations ruled. There are issues associated with variables declared with var. Scope essentially means where these variables are available for use. var declarations are globally scoped or function/locally scoped. The scope is global when a var variable is declared outside a function. This means that any variable that is declared with var outside a function block is available for use in the whole window.var is function scoped when it is declared within a function. This means that it is available and can be accessed only within that function.
    - var variables can be re-declared and updated
    - Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. So var variables are hoisted to the top of their scope and initialized with a value of undefined.
    - Let and Const are block scoped
        - A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block. So a variable declared in a block with let  is only available for use within that block.
    - let can be updated but not re-declared
        - Just like var,  a variable declared with let can be updated within its scope. Unlike var, a let variable cannot be re-declared within its scope. 
    - Hoisting of let and const
        - Just like  var, let & const declarations are hoisted to the top. Unlike var which is initialized as undefined, the let and const keyword is not initialized. So if you try to use a let variable before declaration, you'll get a Reference Error.
    - const cannot be updated or re-declared
        - This means that the value of a variable declared with const remains the same within its scope. It cannot be updated or re-declared. So if we declare a variable with const
* Arrow Functiion
    - It is a new feature introduced in ES6 that is a more concise syntax for writing function expressions. It allows you to create functions more cleanly compared to regular functions. There is no declaration approach here, we can write by using Function expressions only.
* Rest Parameters
    - The rest parameter syntax allows us to represent an indefinite number of arguments as an array. With the help of a rest parameter a function can be called with any number of arguments, no matter how it was defined. 
    ```
    function add(...nums) {
        let sum = 0;
        for(let num of nums){
            sum+= Number(num);
        }
        retutn sum
    }
    ```
* Spread Operator
    - The spread operator (...) helps you expand iterables into individual elements.
    ```
    const a = [1,2,3];
    const b = [4,5,6];
    console.log([...a, ...b]); // [1,2,3, 4,5,6]
    ```
* Example
```
const employee = {
    first_name: 'Surajit',
    age: 20
};

console.log({...employee, age: 29});
const {first_name, ...rest} = employee;
console.log(first_name);
console.log(rest);
```
* Class
    - ES6 introduced classes in javascript. Classes in javascript can be used to create new Objects with the help of a constructor, each class can only have one constructor inside it. 
    ```
    class Vehicle {
        constructor(name, engine){
            this.name = name;
            this.engine = engine;
        }
    }

    const bike = new Vehicle('Yamaha FZ', '149 cc');
    ```


Reference: https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/

## String Methods
Strings are immutable: Strings cannot be changed, only replaced. All string methods return a new string. They don't modify the original string.

### 1. String slice()
slice() extracts a part of a string and returns the extracted part in a new string.

The method takes 2 parameters: start position, and end position
```
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13); // Output: Banana
```
If you omit the second parameter, the method will slice out the rest of the string

If a parameter is negative, the position is counted from the end of the string

### 2. String substring()
substring() is similar to slice().

The difference is that start and end values less than 0 are treated as 0 in substring().

### 3. String substr()
substr() is similar to slice().

The difference is that the second parameter specifies the length of the extracted part.

### 4. Replacing String Content
The replace() method replaces a specified value with another value in a string
The replace() method replaces only the first match

If you want to replace all matches, use a regular expression with the /g flag set
```
let text = "Microsoft and Microsoft!";
console.log(text.replace("Microsoft", "W3Schools"))  // W3Schools and Microsoft!
console.log(text.replace(/Microsoft/g, "W3Schools")) // W3Schools and W3Schools!
```
By default, the replace() method is case sensitive. To replace case insensitive, use a regular expression with an /i flag (insensitive)
```
console.log(text.replace(/MICROSOFT/i, "W3Schools")) // // W3Schools and Microsoft!
```

### 5. String concat()
The concat() method can be used instead of the plus operator. These two lines do the same
```
text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!")
```

### 6. String trim()
The trim() method removes whitespace from both sides of a string
```
let text1 = "      Hello World!      ";
let text2 = text1.trim();
```
The trimStart() method works like trim(), but removes whitespace only from the start of a string

The trimEnd() method works like trim(), but removes whitespace only from the end of a string

### 7. String padStart()
The padStart() method pads a string from the start.

It pads a string with another string (multiple times) until it reaches a given length.
```
let text = "5";
let padded = text.padStart(4,"0");  // 0005
```
The padEnd() method pads a string from the end.

### 8. Converting a String to an Array : String split()
If the separator is omitted, the returned array will contain the whole string in index [0]
If the separator is "", the returned array will be an array of single characters
```
const text1 = 'A;B;C';
console.log('Split on commas ', text1.split(";"));   // [ 'A', 'B', 'C' ]

const text2 = 'A B C';
console.log('Split on spaces ', text2.split(" "));  // [ 'A', 'B', 'C' ]

const text3 = 'A | B | C';
console.log('Split on pipe ', text3.split(" | "));   // [ 'A', 'B', 'C' ]

const text4 = 'ABC'
console.log(text4.split(""))                        //  [ 'A', 'B', 'C' ]
console.log(text4.split())                          //  [ 'ABC' ]
```

## What is currying function?
It is a technique in functional programming, transformation of the function of multiple arguments into several functions of a single argument in sequence. 

The translation of function happens something like this,
```
function simpleFunction(param1, param2, param3, .....) => function 
curriedFunction(param1)(param2)(param3)(....
```
We simply wrap a function inside a function, which means we are going to return a function from another function to obtain this kind of translation. The parent function takes the first provided argument and returns the function that takes the next argument and this keeps on repeating till the number of arguments ends. Hopefully, the function that receives the last argument returns the expected result.

Reference: https://www.geeksforgeeks.org/what-is-currying-function-in-javascript/

## Chai Documentation
### Expect
```
var expect = require('chai').expect
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.lengthOf(3);
expect(beverages).to.have.property('tea').with.lengthOf(3);
```
### Should
```
var should = require('chai').should() //actually call the function
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

foo.should.be.a('string');
foo.should.equal('bar');
foo.should.have.lengthOf(3);
beverages.should.have.property('tea').with.lengthOf(3);
beverages.should.have.property('tea').with.valueOf([ 'chai', 'matcha', 'oolong' ]);
```
```
var should = require('chai').should();
db.get(1234, function (err, doc) {
  should.not.exist(err);
  should.exist(doc);
  doc.should.be.an('object');
});
```


Reference: https://www.chaijs.com/guide/styles/

### describe() and it()
The it call identifies each individual tests but by itself it does not tell Mocha anything about how your test suite is structured. How you use the describe call is what gives structure to your test suite.

## Call, Apply and Bind
### apply()
The apply() method is an important method of the function prototype and is used to call other functions with a provided this keyword value and arguments provided in the form of array or an array like object.
```
function.apply(this, [argumentsArray])
```
### call()
The call() method is used to call a function with a given this and arguments provided to it individually. This is very similar to apply, the only difference being that apply takes arguments in the form of an array or array-like objects, and here the arguments are provided individually.
```
function.call(this, arg1, arg2,...)
```
### bind()
The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
The bind function is much like the call function, with the main difference being that bind returns a new function whereas call does not.
```
const otherFun = function.bind(this, arg1, arg2,...);
otherFun();
```
```
const employee = {
    name: "Surajit Malik"
}

// Dont use arrow function here as it dont have `this`
const invite = function (greetings1, greetings2) {
    console.log(`${greetings1} ${this.name} ${greetings2}`)
}

invite.call(employee, 'Hi', 'How are you?');
invite.apply(employee, ['Hi', 'How are you?']);
invite.bind(employee, 'Hi', 'How are you?')();
```

## What is Node.JS
Node.JS is an open-source as well as JavaScript runtime environment. As it supports cross-platform, you can run Node.JS anywhere, whether it is Windows, Linux, or macOS. Node.JS is a platform that runs on the JavaScript engine.

By using Node.JS, you can build dynamic page content. Also, you can open, close, read, write, modify, create and delete files on the server.

Know that all APIs of Node.JS are asynchronous. In other words, they are non-blocking APIs. Node.JS is an asynchronous event-driven runtime environment with which you can develop scalable network applications.

Node.JS uses a single-threaded model, but at the same time, they are highly scalable. What’s more! They don't buffer any data, but they release data in chunks.


## NodeJS Middleware
Middleware is nothing but a function that has access to response objects, request objects, and the next middleware function. It exists in between the request and response cycles of Node.JS execution. With middleware Node.JS, we can do a multitude of things. To begin with, we can run any codes with middleware functions. Also, we can make changes in response and request objects. We can end the request and response cycle in Node.JS execution. Further, we can call the next middleware function in the queue for Node.JS execution.

### Next() function
The next ( ) function plays a vital role in applications' request and response cycle. It is a middleware function that runs the next middleware function once it is invoked. In other words, the Next function is invoked if the current middleware function doesn’t end the request and response cycle. It is essential to note that no middleware function should be hanging in the queue.

There are many types of node.JS middleware, such as application-level, router-level, built-in, error-handling, and third-party middleware.

* application-level - Know that every GET and POST call needs authentication. So, if you need to authenticate GET and POST calls, you can develop authentication middleware. 
    ```
    router.use(middleware.isAuthenticated);
    ```
* router-level - By using the `express.Router()` function, this middleware supports creating and managing instances. 
* built-in
    - Static: They are functions that act as static assets to applications. HTML files and images are a few examples of static assets.
    ```
    app.use(express.static('public'));
    ```
    - JSON: This function processes incoming requests along with the JSON payloads.
    ```
    app.use(express.json());
    ```
    - Express.URL-encoded: This function processes incoming requests along with URL-encoded payloads.
    ```
    app.use(express.urlencoded({ extended: true }));
    ```
1. Morgan - Logger
    ```
    const logger = require('morgan');
    app.use(logger('dev'))
    ```
2. Cors - Cross Origin Resourse Sharing
3. Cookie Parser - Parse Cookie header and populate req.cookies with an object keyed by the cookie names. Optionally you may enable signed cookie support by passing a secret string, which assigns req.secret so it may be used by other middleware.
4. Cache - Caching the resposne
5. JSON - Allow json request body
6. URL-Encoded - Process incoming request along with URL-encoded payloads
7. Error Handling - Handle any error
    ```
    // error handler
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            message: err.message,
            error: req.app.get('env') === 'development' ? err : {}
        })
    });
    ```
8. Authorization
    ```
    app.use('/users', isLoggedIn, usersRouter);
    ```
9. Express Slowdown
10. Express Rate Limiter





