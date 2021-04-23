// "Guess the number" - game
// cd Dropbox\Ivonne\Studie\Winc - JavaScript\Guess_the_number_Game
// node script.js

// Number between 1 and 25
var random = Math.floor(Math.random() *25) + 1;
console.log(random);

var firstName = window.prompt ("Welkom! Wat is je naam?");
alert ("Hey " + firstName);



var number = window.prompt ("Guess the number!");

while (number !== random) {    
    if (number == random) {
        alert ("Gefeliciteerd je hebt gewonnen. Het spel is nu af.");
        break;
        } else { 
            var number = window.prompt ("Jammer, dit is niet correct.");
        }
}      
           
alert ("Dag " + firstName + ". Tot de volgende keer.");