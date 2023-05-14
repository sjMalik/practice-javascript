# Javascrpit Basics

## ES6 Concepts
### 1. Let and Const
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
    name: 'Surajit'
};

function invite(greetings1, greetings2) {
    console.log(`${greetings1} ${this.name} ${greetings2}`)
};

invite.call(employee, 'Hi', 'How are you?');
invite.apply(employee, ['Hi', 'How are you?']);
invite.bind(employee, 'Hi', 'How are you?')();
```




