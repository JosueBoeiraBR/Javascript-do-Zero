/**
 * Exercício com for (positivos, negativos, zeros e média)
 */

const leia = require('readline-sync');

let soma = 0;
let negativos = 0;
let positivos = 0;
let zeros = 0;

for (let i = 1; i <= 5; i++) { // Tinha criado 5 variaves pra ser digitadas antes do loop. Como resultado
                               // não podia trabalhar com eles.
    let numero = leia.questionInt("Digite um numero: ");

    soma += numero;

    if (numero < 0) {
        negativos++;
    } else if (numero > 0) {
        positivos++;
    } else {
        zeros++;
    }
}

let media = soma / 5;

console.log();
console.log("POSITIVOS:", positivos);
console.log("NEGATIVOS:", negativos);
console.log("ZEROS:", zeros);
console.log("SOMA:", soma);
console.log("MEDIA:", media);
