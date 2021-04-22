// cd Dropbox\Ivonne\Studie\Winc - JavaScript\Opdracht11_Oude_stijl_loops
// node 1_While_loop.js

console.log("Opdracht: Iterators - Oude stijl: loops - While loop");

let colors = ["yellow", "blue", "red", "orange"];
let i = 0;
let text = "";

// While loop

while (colors[i]) {
    text += colors[i];
    console.log(colors[i]);
    i++;
}

console.log("Opdracht: Iterators - Oude stijl: loops - For loop");

// For loop

for (i = 0 ; i < colors.length ; i++) {
    console.log(colors[i]);
};

console.log("Opdracht: Iterators - Nieuwe stijl: array methods");

// forEach

colors.forEach(element => console.log(element));

// Hoeveel regels neemt mijn for loop en mijn while loop in beslag? 4 en 2
// Hoeveel regels neemt mijn forEach method in beslag? 1
// Welke voordelen heeft het gebruiken van een array method nog meer t.o.v. een for of een while loop? Welke methode vind je bijvoorbeeld makkelijker leesbaar? Waarom? Handig: forEach gebruikt de elementen maar één keer en bij While/For moet je de elementen 'benoemen' voordat je ze kunt gebruiken.

const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '06-12345678',
    age: 25,
    dob: '08/02/1989',
    active: true
};

// iterate over the user object
for (const key in user) {
    console.log(`${key}: ${user[key]}`);
}