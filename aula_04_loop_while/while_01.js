/**
 * Exercício com while (Analisador de numeros)
Programa que receba números inteiros até que o usuário digite 0.
Ao finalizar, o programa deverá mostrar:
1. Quantos números foram digitados (sem contar o zero).
2. A soma dos números.
3. A média dos números.
4. Quantos números eram pares.
5. Quantos números eram ímpares.
6. Qual foi o maior número.
7. Qual foi o menor número.
 */

const leia = require('readline-sync');

let qtdNumeros = 0, soma = 0, media = 0, pares = 0, impares = 0, maiorNumero = 0, menorNumero = 0;

let numero = leia.questionInt('Digite um numero: ');

while(numero!==0){
    
    if(numero<0 || numero>0){
        qtdNumeros+=1;
    }

    if(numero%2===0){
        pares+=1;
    } else {
        impares+=1;
    }

    if(qtdNumeros===1){
        menorNumero=numero;
        maiorNumero=numero;
    } else{
        if(numero<menorNumero){
            menorNumero=numero;
        } 
        if(numero>maiorNumero){
            maiorNumero=numero;
        }
    }

    soma+=numero;
    numero = leia.questionInt('Digite novamente: ');

}

media=soma/qtdNumeros;

console.log(`A QUANTIDADE DE NUMEROS FOI ${qtdNumeros}`);
console.log(`A QUANTIDADE DE PARES FOI ${pares}`);
console.log(`A QUANTIDADE DE IMPARES FOI ${impares}`);
console.log(`A SOMA DE TODOS FOI ${soma}`);
console.log(`A MEDIA DELES FOI ${media}`);
console.log(`O MAIOR NUMERO FOI ${maiorNumero}`);
console.log(`O MENOR NUMERO FOI ${menorNumero}`);