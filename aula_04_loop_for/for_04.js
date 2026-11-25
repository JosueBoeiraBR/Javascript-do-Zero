/**
 * Exercício com for (linhas e colunas)
 */

const leia = require('readline-sync');

let linhas = leia.questionInt("Digite a quantidade de linhas: ");
let colunas = leia.questionInt("Digite a quantidade de colunas: ");

for (let i=1; i<=linhas; i+=1){
    for (let j=1; j<=colunas; j+=1){ 
        process.stdout.write("*");
       
    }
    console.log();
}

for (let i=1; i<=5; i+=1){
    for (let j=1; j<=i; j+=1){ 
        process.stdout.write("*");
       
    }
    console.log();
}