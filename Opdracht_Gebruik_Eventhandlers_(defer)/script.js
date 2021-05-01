//Opdracht 1: Een click event vastmaken aan een button

const btnAlert = document.querySelector ('#mybutton-alert');

const makeAlert = function () {
    alert ("button clicked");
}

btnAlert.addEventListener("click", makeAlert);

// Opdracht 2:

const btnBackground = document.querySelector ('#mybutton-background');
const bodyBackground = document.querySelector ('.blue-background');

// const colorBackground = function () {
//     bodyBackground.classList.remove("blue-background");
//     bodyBackground.classList.add("red-background");
// }

// btnBackground.addEventListener("click", colorBackground);

// Opdracht 3:

const tobbleColorBackground = function () {
    bodyBackground.classList.toggle("red-background");
}

btnBackground.addEventListener("click", tobbleColorBackground);