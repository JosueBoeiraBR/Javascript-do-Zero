const leia = require('readline-sync');

let n1 = leia.questionFloat("Digite o primeiro número: ");
let n2 = leia.questionFloat("Digite o segundo número: ");

let media = (n1+n2)/2;

console.log("Sua média foi ", media);

if (media >= 7){
    console.log("VOCÊ FOI APROVADO");
}
else
    console.log("VOCÊ FOI REPROVADO");