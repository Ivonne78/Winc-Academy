// Functions calling functions: exercise
// Hey kiddo

const checkOlderThan18 = function (number) {
    console.log("Entering checkOlderThan18..");
    console.log("Input: ", number)
    if (number >= 18) {
        respons = "true";
    } else {
        respons = "false";
    }
    console.log("Output: ", respons);
    return respons;
   
}

const dubbelCheckAge = function (number) {
    console.log("Entering dubbelCheckAge..");
    console.log("Input: ", number)
    if (number >= 18) {
        respons = "Hello there";
    } else {
        respons = "Hey kiddo";
    }
    console.log("Output: ", respons);
    return respons;
} 

const greetings = function (number) {
    console.log("Entering greetings..");
    const age = checkOlderThan18 (number);
    const greets = dubbelCheckAge (number);
    console.log("Finaloutput: ", greets)
    return greets;
}

greetings(36);