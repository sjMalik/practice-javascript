const reverseString = function(input) {
    // Convert the string into array
    input = input.split("");
    // Reverse the array
    input = input.reverse();
    // Convert the array into string
    input = input.join("");
    return input;
};

console.log(reverseString('Surajit'))