// escreva("Qual é o seu nome? ")
// leia(nome)
// escreval("Bem-vindo, ", nome, "!")

const leia = require("readline-sync");

let nome = leia.question("Qual é o seu nome? ");
console.log("Bem-vindo, ", nome, "!");