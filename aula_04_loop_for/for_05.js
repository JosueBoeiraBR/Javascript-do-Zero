/**
 * Exercício com for (pares e soma)
 */

const leia = require('readline-sync');

let numero = leia.questionInt("Digite um numero: ");
let total = 0;

for(let i=1; i<=numero; i+=1){
    if(i%2===0){
        total += i;
        console.log(i, ": PAR");
    } else {
    console.log(i);
    }
}

console.log("A soma dos pares é:", total);
