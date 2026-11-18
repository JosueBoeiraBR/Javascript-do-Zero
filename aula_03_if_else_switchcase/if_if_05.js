/**
 * Exercício com mais if 05 (desconto dependendo da idade, preço e cartão)
 * Regras:
1. Clientes com 60 anos ou mais recebem 10% de desconto.
2. Compras acima de R$ 300 recebem mais 5% de desconto.
3. Clientes que possuem cartão da loja recebem mais 5% de desconto.
Atenção: os descontos são acumulativos. Uma pessoa pode receber os três benefícios!
 */

const leia = require('readline-sync');

console.log("SISTEMA DE BENEFICIOS");
console.log()

let cartao = "s"

let idade = leia.questionInt("INFORME SUA IDADE: ");
let valor = leia.questionFloat("INFORME O VALOR: ");

cartao = leia.question("POSSUI CARTÃO? S/N ");

if (valor>=300 && cartao=="s" && idade>=60){
                console.log("Você tem 20% de desconto");
                console.log("O valor ficou em: ", valor*0.80);
}
if (valor<300 && idade>=60 && cartao=="s"){
    console.log("Você tem 15% de desconto");
    console.log("O valor ficou em: ", valor*0.85);
}
if (valor<300 && idade<60 && cartao=="s"){
    console.log("Você tem 5% de desconto");
    console.log("O valor ficou em: ", valor*0.95);
}
if (valor<300 && idade<60 && cartao=="n"){
    console.log("Você não tem desconto");
}
if (valor>=300 && idade<60 && cartao=="n"){
    console.log("Você tem 10% de desconto");
    console.log("O valor ficou em: ", valor*0.90);
}
if (valor>=300 && idade>=60 && cartao=="n"){
    console.log("Você tem 15% de desconto");
    console.log("O valor ficou em: ", valor*0.85);
}
if (valor>=300 && idade<60 && cartao=="s"){
    console.log("Você tem 10% de desconto");
    console.log("O valor ficou em: ", valor*0.90);
}
if (valor<300 && idade>=60 && cartao=="n"){
    console.log("Você tem 10% de desconto");
    console.log("O valor ficou em: ", valor*0.90);
}

/**
 * 
let desconto = 0;

// Verifica os benefícios individualmente

if (idade >= 60) {
    desconto += 10; (Acumulador. No visualg seria desconto <- desconto + 1) 
}

if (valor > 300) {
    desconto += 5;
}

if (cartao == "s") {
    desconto += 5;
}

// Calcula o valor final

let valorDesconto = valor * (desconto / 100);
let valorFinal = valor - valorDesconto;

let valorFinal = valor * (1 - desconto / 100); (DIRETO)

// Exibe os resultados
 */