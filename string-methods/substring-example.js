// substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().

const fruits = "Apple, Banana, Kiwi";
const part = fruits.substring(7, 13);
console.log(part);                  // Banana
const another = fruits.substring(-4);
console.log(another)                // Apple, Banana, Kiwi