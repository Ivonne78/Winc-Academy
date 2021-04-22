const number = 9;

for (i = 1 ; i <= 10 ; i++) {
    const result = i * number ; 
    console.log(i +" x "+ number + " = "+ result);
} 

// Bonus

let start = 1;
let tableEnd = 10; 

while (start <= tableEnd) {
    for (i = 1 ; i <= tableEnd ; i++) {
        const result = i * start ;
        console.log(i + " x " + start +" = "+ result);
    };
    start++;
}



