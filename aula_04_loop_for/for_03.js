/**
 * Exercício com for (numeros pares e impares)
 */

const leia = require('readline-sync');

let numero = leia.questionInt("Digite um número: ");

let pares = 0
let impares = 0

for (let i = 0; i<=numero; i+=1){
    if (i%2===0){
        pares+=1; 
    } else {
        impares+=1;
    }
}

console.log()
console.log("Você tem", impares, "impares");
console.log("Você tem", pares, "pares");

