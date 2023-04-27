const reverseBySeparator = function(str, separator){
    return str.split(separator).reverse().join(separator);
};

const string = "Welcome to this Javascript Guide!";
console.log('Reverse by character', reverseBySeparator(string, ""));
console.log('Reverse by word', reverseBySeparator(string, " "));