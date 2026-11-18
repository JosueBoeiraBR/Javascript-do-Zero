/**
 * Exercício com mais if 04 (desconto dependendo da idade e preço)
 * 
 */

const leia = require('readline-sync');

let idade = leia.questionInt("Informe sua idade: ");
if (idade<1){
    console.log("Idade inválida"); // Funciona mas o correto claramente seria uma estrutura de repetição
}

let valor = leia.questionFloat("Informe o valor da sua compra: ");

if (idade>=1 && idade<18) {
    console.log("Você tem 5% de desconto");
    console.log("O valor ficou em: ", valor*0.95);
}   else if (idade<59 && valor>=200) {
        console.log("Você tem 10% de desconto");
        console.log("O valor ficou em: ", valor*0.90);
        }    else if (idade<59 && valor<200){
                console.log("Não tem desconto");
            }       else if (idade>59) {
                        console.log("Você tem 15% de desconto");
                        console.log("O valor ficou em: ", valor*0.85);
                    } else {
                        console.log("Valor inválido");
}                

/**
 * if (idade < 1) {
    console.log("Idade inválida");

} else if (idade < 18) {
    console.log("Você tem 5% de desconto");
    console.log("Valor final:", valor * 0.95);

} else if (idade <= 59 && valor >= 200) {
    console.log("Você tem 10% de desconto");
    console.log("Valor final:", valor * 0.90);

} else if (idade <= 59) {
    console.log("Não tem desconto");
    console.log("Valor final:", valor);

} else {
    console.log("Você tem 15% de desconto");
    console.log("Valor final:", valor * 0.85);
}

* Assim deu pra solucionar minha dificuldade pra colocar o valor invalido quando digitar menos de 1
 */