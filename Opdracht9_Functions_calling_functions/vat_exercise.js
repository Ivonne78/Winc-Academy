console.log("VAT exercise 1")

const multiply = function (numberA, numberB) {
    const sum = numberA * numberB + numberA
    return sum;
}

const doCalculation1 = function () {
    const inclVAT = multiply (100, 0.21);
    console.log(inclVAT);
}

doCalculation1();


console.log("VAT exercise 2")

let VAT1 = [0, 1.09, 1.21]
let VAT2 = [0, 0.09, 0.21]

const baseprice = function (number) {
    console.log("Entering baseprice ..");
    console.log("Input: ", number);
    const sum1 = number / VAT1[2];
    console.log("Output: ", sum1);
    return sum1;
}

const vat = function (number) {
    console.log("Entering vat ..");
    console.log("Input: ", number);
    const sum2 = number * VAT2[2];
    console.log("Output: ", sum2)
    return sum2;
}

const doCalculation2 = function (number) {
    console.log("Entering doCalculation2 ..");
    console.log("Input: ", number)
    const sum1 = baseprice (number);
    const sum2 = vat (sum1);
    console.log("Finaloutput: ", sum1 + sum2)
    return sum1 + sum2;
}

doCalculation2(121);