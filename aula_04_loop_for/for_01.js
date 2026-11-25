/**
 * Exercício com for (contagem de numero)
 */

const leia = require('readline-sync');

let numero = leia.questionInt("Digite um número: ");

for (let i = 0; i<=numero; i+=1){ // O contador começa em 0, a condição pro loop continuar é até
    console.log(i);               // o contador for menor ou igual ao numero digitado e depois atualiza
}                                 // o contador adicionando mais 1 cada loop

console.log();

for (let j = numero; j>=0; j=j-1){ // Neste caso o contador ja começa com o valor do numero digitado
    console.log(j);                // e enquanto o contador for maior ou igual a zero vai ir diminuindo
}                                  // o contador em 1