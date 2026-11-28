/**
 * Exercício com do while (Analisador de números)
 * Crie um programa que receba números inteiros digitados pelo usuário até que ele digite 0.
 * O zero será o comando para encerrar a entrada de números.
 * O programa deverá:
 * 1. Receber números inteiros.
 * 2. Contar quantos números foram digitados (sem contar o zero).
 * 3. Somar todos os números.
 * 4. Calcular a média dos números digitados.
 * 5. Identificar o maior número.
 * 6. Identificar o menor número.
 * 7. Contar quantos números são pares e quantos são ímpares.
 */

const leia = require('readline-sync');

let soma = 0;
let maiorNumero = 0;
let menorNumero = 0;
let media = 0;
let pares = 0;
let impares = 0;
let qtdNumeros = 0;
let numero = 0;

do{
    console.log("ANALISADOR DE DESEMPENHO");

    numero = leia.questionInt("ESCOLHA O NÚMERO CORRETO: ");
    console.log();
    if(numero%2===0){
        pares+=1;
    } else {
        impares+=1;
    }

    if (qtdNumeros === 0) {
    maiorNumero = numero;
    menorNumero = numero;
    } else {
        if (numero > maiorNumero) {
        maiorNumero = numero;
        }

        if (numero < menorNumero) {
        menorNumero = numero;
        }
    }   

    qtdNumeros+=1;
    soma+=numero;
  
} while(numero!=0);

media = soma/qtdNumeros;
console.log(`O MAIOR NÚMERO FOI: ${maiorNumero}`);
console.log(`O MENOR NÚMERO FOI: ${menorNumero}`);
console.log(`A MÉDIA FOI: ${media}`);
console.log(`QUANTIDADE DE NÚMEROS: ${qtdNumeros}`);
console.log(`O MAIOR NÚMERO FOI: ${maiorNumero}`);
console.log(`A SOMA DOS NÚMEROS FOI: ${soma}`);
console.log(`QUANTIDADE DE PARES: ${pares}`);
console.log(`QUANTIDADE DE IMPARES: ${impares}`);