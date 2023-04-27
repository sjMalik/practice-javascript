let arr = ["1", "Test User", "25", "Developer"];
let arr1 = [
    ["id", "1"],
    ["name", "Test User"],
    ["age", "25"],
    ["profession", "Developer"],
  ];

// Using Object.assign() method
console.log(Object.assign({}, arr));

// Using spread operator
console.log({...arr});

// Using Object.fromEntries()
console.log(Object.fromEntries(arr1))