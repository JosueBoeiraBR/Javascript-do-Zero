/**
 * Exercício com mais if 01
 */

const leia = require('readline-sync');

let n1 = leia.questionFloat("Informe a nota 1: ");
let n2 = leia.questionFloat("Informe a nota 2: ");

let media = (n1+n2)/2;

if (media<=10 && media>=7){
    console.log("Você foi aprovado");
} else
    if (media<7 && media>=5){
        console.log("Você está em recuperação");
    }   else 
            if (media<5 && media>=0) {
                console.log("Você foi reprovado");
        }   else {
                console.log("Número inválido");
            }

