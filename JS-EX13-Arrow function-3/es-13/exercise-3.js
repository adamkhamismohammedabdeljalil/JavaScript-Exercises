// Trasforma le variabili funzione in arrow functions e concatenale in modo tale che venga stampato sulla console il risultato della seguente operazione matematica: `((2 + 4) * (5 + 2) - 2) / 5`

let a=4; let b=2;
const sum = (a, b) =>a+b;
 
const subtract = (a, b) =>  a - b;


const multiply = (a, b) =>a * b;


const divide = (a, b) => a / b;
let result=divide(subtract(multiply(sum(2,4),sum(5,2)),2),5);
console.log(result)








