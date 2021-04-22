// cd Dropbox\Ivonne\Studie\Winc - JavaScript\Opdracht10_For_Loops
// node 3_The_Grade_Assigner.js

function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'E';
    }
}

let number = 60;
let endScore = 100;

for (i = 0 ; i <= (endScore - number) ; i++) {
    const score = number + i;
    //console.log(score);
    const grade = assignGrade(score);
    //console.log(grade);
    console.log("Voor "+ score +" punten, krijg je een "+ grade);
} 



