const age = 22;
const isFemale = true;
const firstName = "Bram"; // 'name' is deprecated melding. 
const driverStatus = "bob" ;
const totalAmount = 155;


// Deel 1
if (age > 18) {
    // document.write("Je bent ouder dan 18 jaar.")
    console.log("Je bent ouder dan 18 jaar, je mag naar binnen.")
} else {
    // document.write("Je bent niet ouder dan 18 jaar.")
    console.log("Sorry, je mag er niet in. ")
}

// Deel 1: 50% korting
if (age >= 18 && age <=25) {
    console.log("Je krijgt 50% korting!");
} else {
    console.log("Je betaald het volle tarief.")
}

// Deel 2
if (isFemale) {
    console.log("Welkom op LadiesNight")
} else {
    console.log("Helaas, tot de volgende MannenAvond")
}

// Deel 2: Ludieke actie!
if (firstName === "Bram" || firstName === "Sarah" || firstName === "Abraham") {
    console.log("Gefeliciteerd, je krijgt een gratis biertje van ons.")
} else {
    console.log("Fijne avond, maar je krijgt geen gratis drankje van ons.")
}

//Deel 3
if (driverStatus == "bob") {
    console.log("Je bent de bob, jij mag rijden vandaag.")
} else {
    console.log("Je mag een drankje doen, je hoeft niet te rijden vandaag.")
}

//Deel 3: Jubileum korting
if (totalAmount >= 100) {
    console.log("Je krijgt een gratis flesje champagne!")
} else if (totalAmount >= 50) {
    console.log("Je krijgt een gratis portie nachos!")
} else if (totalAmount >= 25) {
    console.log("Je krijgt een gratis portie (vega)bitterballen!")
} else {
    console.log("Bestel meer dan 25, 50 of 100 euro en krijg iets gratis!")
}

