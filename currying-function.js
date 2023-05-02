function calculateVoulme(length){
    return function(breadth){
        return function(height){
            return length * breadth * height;
        }
    }
}

console.log(calculateVoulme(4)(5)(6)) // 120