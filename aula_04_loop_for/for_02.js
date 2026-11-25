/**
 * Exercício com for (soma de numeros. Até o numero informado)
 */

const leia = require('readline-sync');

let numero = leia.questionInt("Digite um número: ");
let total = 0 // Coloquei como null. Melhor com 0

for (let i = 0; i<=numero; i+=1){
    console.log(i);
    total = total + i; // Acumulador. Poderia ser total+=i
}

console.log(total);