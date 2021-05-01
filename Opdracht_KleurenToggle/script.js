// Hamburger icoon
// const menu = document.querySelector ('.hamburger-icoon');

// const menuSelectie = function () {
//     alert ("Hello World");
// }

// menu.addEventListener("click", menuSelectie)

// Show content dropdown
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Background color 
const home = document.querySelector ('.home');
const red = document.querySelector ('.red');
const orange = document.querySelector ('.orange');
const purple = document.querySelector ('.purple');
const green = document.querySelector ('.green');

const bodyBackground = document.querySelector ('body');

const backgroundGrey = function () {
    bodyBackground.classList.add("home");
    bodyBackground.classList.remove("red");
    bodyBackground.classList.remove("orange");
    bodyBackground.classList.remove("purple");
    bodyBackground.classList.remove("green");
    document.getElementById("myDropdown").classList.toggle("show");
}

const backgroundRed = function () {
    bodyBackground.classList.remove("home");
    bodyBackground.classList.add("red");
    bodyBackground.classList.remove("orange");
    bodyBackground.classList.remove("purple");
    bodyBackground.classList.remove("green");
    document.getElementById("myDropdown").classList.toggle("show");
}

const backgroundOrange= function () {
    bodyBackground.classList.remove("home");
    bodyBackground.classList.remove("red");
    bodyBackground.classList.add ("orange");
    bodyBackground.classList.remove("purple");
    bodyBackground.classList.remove("green");
    document.getElementById("myDropdown").classList.toggle("show");
}
const backgroundPurple = function () {
    bodyBackground.classList.remove("home");
    bodyBackground.classList.remove("red");
    bodyBackground.classList.remove("orange");
    bodyBackground.classList.add ("purple");
    bodyBackground.classList.remove("green");
    document.getElementById("myDropdown").classList.toggle("show");
}
const backgroundGreen = function () {
    bodyBackground.classList.remove("home");
    bodyBackground.classList.remove("red");
    bodyBackground.classList.remove("orange");
    bodyBackground.classList.remove("purple");
    bodyBackground.classList.add("green");
    document.getElementById("myDropdown").classList.toggle("show");
}


home.addEventListener("click", backgroundGrey)
red.addEventListener("click", backgroundRed)
orange.addEventListener("click", backgroundOrange)
purple.addEventListener("click", backgroundPurple)
green.addEventListener("click", backgroundGreen)

