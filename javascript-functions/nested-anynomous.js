function mul(num){
    return function mul2(num2){
        return function mul3(num3){
            return num * num2 * num3;
        }
    }
};

console.log(mul(1)(2)(3));
const x = mul(1);
const y = x(2);
const z = y(3);
console.log(z)