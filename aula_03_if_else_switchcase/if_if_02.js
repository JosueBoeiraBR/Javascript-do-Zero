/**
 * Exercício com mais if 02 (Verificar se é criança, adolescente, adulto ou idoso) 
 * Varias condições, um output
 */

const leia = require('readline-sync');

console.log("===BEM-VINDO===");
let idade = leia.questionInt("Informe sua idade: ");

if (idade<12 && idade>=1) {
    console.log("Você é uma criança!");
}   else if (idade>=12 && idade<=17) {
        console.log("Você é um adolescente!");
}   else if (idade>=18 && idade<=59) {
        console.log("Você é um adulto!");
}   else if (idade>=60) {
        console.log("Você é um idoso!");
} else {
    console.log("NÚMERO INVÁLIDO!");
}

console.log();
console.log("BYE");

// Não precisava ter criado o operador lógico nos seguintes else if