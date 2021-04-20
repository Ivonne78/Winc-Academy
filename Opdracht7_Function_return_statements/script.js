//Function return statements: exercise

//Checking if a number is big
// We're going to write a function that checks if a number is bigger than 100.

console.log("Function return statements: exercise - Checking if a number is big")

const biggerThan100 = function (numberChecker){
   if (numberChecker > 100) {
        return "true";
   } else {
        return "false";
   }
};

console.log(biggerThan100(190));
console.log(biggerThan100(90));
console.log(biggerThan100(110));

//This is a function that does something. 


// Bouncer at a club
console.log("Function return statements: exercise - Bouncer at a club")

const bouncerReply = function (
    maxPeople,
    currentNumber,
    agePerson) {
    if (agePerson < 18) {
        return "this is a club for adults";
    } if (maxPeople > currentNumber) {
        return "it's too busy now, come back later";
        } else {
            return "come in";
        }
    };

console.log(bouncerReply(1000, 1190, 15)); //this is a club for adults
console.log(bouncerReply(1000, 990, 18)); //it's too busy now, come back later
console.log(bouncerReply(1000, 1990, 28)); //come in


// //Calculating the average
console.log("Function return statements: exercise - Calculating the average")

const calculateAverage = function (
    number1,
    number2,
    number3,
    number4,
    number5) {
    const total = number1 + number2 + number3 + number4 + number5;
    const average = total / 5;
    const averageRounded = Math.round(average);
    return averageRounded;
};


console.log(calculateAverage(30, 10, 20, 40, 50));
