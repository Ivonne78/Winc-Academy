console.log("Functions: three ways to write them: exercise")

// function declaration
function sum1(number1, number2) {
    multiply1 = number1 * number1; 
    mulitply2 = number2 * number2;
    total = multiply1 * mulitply2;
    return total;
};

console.log(sum1(2,5)) 
console.log(sum1(22,15)) 

// function expression
const sum2 = function (number1, number2) {
    multiply1 = number1 * number1; 
    mulitply2 = number2 * number2;
    total = multiply1 * mulitply2;
    return total;
};

console.log(sum2(2,5))
console.log(sum2(32,51))

// arrow function
const sum3 = (number1, number2) => {
    multiply1 = number1 * number1; 
    mulitply2 = number2 * number2;
    total = multiply1 * mulitply2;
    return total;
};

console.log(sum3(2,5))
console.log(sum3(22,45))

// take two numbers
// each number will be squared (multiplied with itself)
// the squared numbers will be added together
// this sum will be squared again
// the resulting value is returned