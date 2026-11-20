/**
 * Exercício com switch case (sistema de compra de passagens)
 */

const leia = require('readline-sync');

console.log("SISTEMA DE COMPRA DE PASSAGENS");
console.log();

console.log("1 - Porto Alegre $50");
console.log("2 - Florianópolis $120");
console.log("3 - Curitiba $150");
console.log("4 - São Paulo $220");
console.log("5 - Sair");

console.log();
let opcao = leia.questionInt("Escolha seu destino: ");

let nome = null
let idade = null
let qtd = null
let validez = false
let desconto = null
let valorLugar = null

console.log()

switch (opcao){
    case 1:
        console.log()
        if (idade<12){
            desconto = 0.70
        } else if (idade<18){
            desconto = 0.85
        } else if (idade>=60){
            desconto = 0.75
        } else {
            desconto = 0
        }
        validez = true
        valorLugar = 50
    break;
    case 2:
        console.log()
        if (idade<12){
            desconto = 0.70
        } else if (idade<18){
            desconto = 0.85
        } else if (idade>=60){
            desconto = 0.75
        } else {
            desconto = 0
        }
        validez = true
        valorLugar = 120
    break;
    case 3:
        console.log()
        if (idade<12){
            desconto = 0.70
        } else if (idade<18){
            desconto = 0.85
        } else if (idade>=60){
            desconto = 0.75
        } else {
            desconto = 0
        }
        validez = true
        valorLugar = 150
    break;
    case 4:
        console.log()
        if (idade<12){
            desconto = 0.70
        } else if (idade<18){
            desconto = 0.85
        } else if (idade>=60){
            desconto = 0.75
        } else {
            desconto = 0
        }
        validez = true
        valorLugar = 220
    break;
    case 5:
        console.log("Até mais");
    break;
    default:
        console.log("Opcão inválida");
    break;
}

if (nome===null && validez===true) {
    nome = leia.question("Informe seu nome: ");
    if (nome===""){
        console.log("O nome não pode estar vazio");
        idade = null
        validez = false
    }
}

if (idade===null && validez===true) {
    idade = leia.questionInt("Informe sua idade: ");
    if (idade<1){
        console.log("Valor inválido");
        idade = null
        validez = false
    }
}

if (qtd===null && validez===true) {
    qtd = leia.questionInt("Informe quantas passagens (Máximo de 5): ");
    if (qtd<1 || qtd>5){
        console.log("Valor inválido");
        qtd = null
        validez = false
    }
}

console.log()
let total = (qtd*valorLugar)*desconto

if (validez===true){
if (idade<12){
    desconto = 0.70
    console.log()
    console.log("O valor inicial ficou em", qtd*valorLugar, "mas ganhou desconto");
    console.log("Com desconto de 30% ficou em", total);
} else if (idade<18){
    desconto = 0.85
    console.log()
    console.log("O valor inicial ficou em", qtd*valorLugar, "mas ganhou desconto");
    console.log("Com desconto de 15% ficou em", total);
} else if (idade>=60){
    desconto = 0.75
    console.log()
    console.log("O valor inicial ficou em", qtd*valorLugar, "mas ganhou desconto");
    console.log("Com desconto de 25% ficou em", total);
} else {
    desconto = 0
    console.log()
    console.log("O valor ficou em", qtd*valorLugar, "sem desconto");
}
}


/**
 * Exercício com switch case (sistema de compra de passagens) CORREÇÃO
 */

//const leia = require('readline-sync');

//console.log("SISTEMA DE COMPRA DE PASSAGENS");
//console.log();

//console.log("1 - Porto Alegre R$50");
//console.log("2 - Florianópolis R$120");
//console.log("3 - Curitiba R$150");
//console.log("4 - São Paulo R$220");
//console.log("5 - Sair");

//console.log();

//let opcao = leia.questionInt("Escolha seu destino: ");

//let nome = null;
//let idade = null;
//let qtd = null;
//let validez = false;
//let desconto = 0;
//let valorLugar = null;

// 1. Identificar o destino e definir o preço.
//switch (opcao) {
    //case 1:
        //valorLugar = 50;
        //validez = true;
        //break;

    //case 2:
        //valorLugar = 120;
        //validez = true;
        //break;

    //case 3:
        //valorLugar = 150;
        //validez = true;
        //break;

    //case 4:
        //valorLugar = 220;
        //validez = true;
        //break;

    //case 5:
        //console.log("Até mais!");
        //break;

    //default:
        //console.log("Opção inválida!");
        //break;
//}

// 2. Receber e validar os dados.
//if (validez === true) {

    //nome = leia.question("Informe seu nome: ");

    //if (nome.trim() === "") {
        //console.log("O nome não pode estar vazio!");
        //validez = false;
    //}

    //if (validez === true) {
        //idade = leia.questionInt("Informe sua idade: ");

        //if (idade < 1) {
            //console.log("Idade inválida!");
            //validez = false;
        //}
    //}

    //if (validez === true) {
        //qtd = leia.questionInt("Informe quantas passagens (máximo de 5): ");

        //if (qtd < 1 || qtd > 5) {
            //console.log("Quantidade inválida!");
            //validez = false;
        //}
    //}
//}

// 3. Calcular o desconto e o valor final.
//if (validez === true) {

    //if (idade < 12) {
        //desconto = 0.30;
    //} else if (idade < 18) {
        //desconto = 0.15;
    //} else if (idade >= 60) {
        //desconto = 0.25;
    //} else {
        //desconto = 0;
    ///}

    //let valorInicial = qtd * valorLugar;
    //let valorDesconto = valorInicial * desconto;
    //let total = valorInicial - valorDesconto;

    // 4. Exibir o resultado.
    //console.log();
    //console.log("========== RESUMO DA COMPRA ==========");
    //console.log("Passageiro:", nome);
    //console.log("Idade:", idade);
    //console.log("Quantidade de passagens:", qtd);
    //console.log("Valor por passagem: R$", valorLugar);
    //console.log("Valor inicial: R$", valorInicial);
    //console.log("Desconto aplicado:", desconto * 100 + "%");
    //console.log("Valor descontado: R$", valorDesconto);
    //console.log("VALOR FINAL: R$", total);
    //console.log("======================================");
//}
