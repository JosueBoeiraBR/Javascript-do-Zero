/**
 * Exercício com switch case (sistema de pedidos)
 */

const leia = require('readline-sync');

console.log("LANCHONETE");
console.log();

console.log("1 - Hambúrguer $25");
console.log("2 - Pizza $40");
console.log("3 - X-Bacon $30");
console.log("4 - Refrigerante $8");
console.log("5 - Sair");

let opcao = leia.questionInt("Escolha uma opção: ");

let valorUnitario = null
let validez = false
let nome = null
let quantidade = null
let desconto = null
let total = null


switch (opcao){
    case 1:
        valorUnitario = 25
        validez = true
    break;
    case 2:
        valorUnitario = 40
        validez = true
    break;
    case 3:
        valorUnitario = 30
        validez = true
    break;
    case 4:
        valorUnitario = 8
        validez = true
    break;
    case 5:
        console.log("Até mais");
    break; //Esqueci de colocar esse break
    default:
        console.log("Opção inválida");
    break; //Esqueci de colocar esse break
}

if (validez===true){
    console.log();
    nome = leia.question("Informe seu nome: ");
    if (nome.trim()===""){
        console.log("O nome não pode estar vazio");
        validez = false
    }
}

if (validez===true){
    console.log();
    quantidade = leia.questionInt("Informe qual quantidade (Máx 10): "); // Coloquei question normal
    if (quantidade<1 || quantidade>10){
        console.log("Só entre 1 a 10");
        validez = false
    }
}

total = quantidade*valorUnitario

if(total>100 && validez===true){
    console.log();
    console.log("Como sua compra foi maior a 100 reais ganhou 10% de desconto");
    console.log("O valor inicial é de", total, ". Com o desconto ficou em", total*0.90);
}

if(total<=100 && validez===true){
    console.log();
    console.log("O valor ficou em", total);
}

