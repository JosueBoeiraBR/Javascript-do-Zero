/**
 * Exercício com mais if 06 (sistema de empréstimo bancário)
 */

const leia = require('readline-sync');

console.log("====SISTEMA DE EMPRÉSTIMO BANCÁRIO====");
console.log();

let validez = true
let nome = leia.question("Por favor, escreva seu nome: ");

let idade = leia.questionInt("Por favor, escreva sua idade: ");
if (idade<18){
    validez = false
    console.log()
    console.log("Idade mínima de 18 necessária");
}

let salario = 0
if (validez===true){
    salario = leia.questionFloat("Por favor, escreva o seu salário mensal: ");
    if (salario<=0){
        console.log("VALOR INSERIDO INVÁLIDO");
        validez = false
}
}

let dividas = "n"
if (validez===true){
    dividas = leia.question("Possui dívidas em atraso? S/N ");
    if (dividas!="s" && dividas!="n"){
        console.log("VALOR INSERIDO INVÁLIDO");
        validez = false
    // if (dividas===n){ // Sem aspas e innecessário
    //      validez = false
    // }
}
}

if (dividas==="s"){
    console.log()
    console.log("Você não pode pedir empréstimo com dívidas em atraso");
    validez = false
}


let limiteParcela = 0
let emprestimo = false

if (idade>=18 && dividas==="n" && validez===true){
    if (salario>=2000 && salario<4000){
        console.log()
        console.log("Você pode pedir um empréstimo com parcela máxima de 15% do salário");
        limiteParcela = salario*0.15
        emprestimo = true
    } else if (salario>=4000){
        console.log()
        console.log("Você pode pedir um empréstimo com parcela máxima de 25% do salário");
        limiteParcela = salario*0.25
        emprestimo = true
    } else {
        console.log()
        console.log("Você não cumpre com o salário mínimo requerido");
    }
}

console.log()

let emprestimoSolicitado = 0
let vezes = 0
let controle = 0

if (validez===true && emprestimo===true){
    console.log("O valor máximo que você pode pagar por mês é ", limiteParcela);

emprestimoSolicitado = leia.questionFloat("Digite o valor do empréstimo que precisa: ");
if (emprestimoSolicitado<500){
    console.log("O mínimo é 500");
    validez = false
}

if (validez===true){
        vezes = leia.questionInt("Em quantas vezes de 6 até 48 ");
    if (vezes>=6 && vezes<=48){
        controle = emprestimoSolicitado / vezes
    } else{
        validez = false
        console.log("Opção Inválida");
    }
}
}

if (controle>limiteParcela && validez===true){
    console.log("Não atinge o máximo requerido dos 15%")
    vezes = leia.questionInt("Tente em mais vezes: ");
    if (vezes>=6 && vezes<=48){
        controle = emprestimoSolicitado / vezes
    } else{
        validez = false
        console.log("Opção Inválida");
    }
    if (controle>limiteParcela){
        console.log("Não atinge o máximo requerido dos 15%")
        vezes = leia.questionInt("Tente uma vez mais: ");  
        if (vezes>=6 && vezes<=48){
        controle = emprestimoSolicitado / vezes
        } else{
        validez = false
        console.log("Opção Inválida");
        } 
            if (controle>limiteParcela){
            console.log("Não atinge o máximo requerido dos 15%")
            console.log("Pedido bloqueado");
            }
    }
}

if (controle<=limiteParcela && validez===true && emprestimo===true){
    console.log()
    console.log("Seu empréstimo do valor de", emprestimoSolicitado, "reais, ficou em", vezes, "de", controle);
}

/**
 * - Atualmente verifico se o empréstimo é menor que 500.
 * - Também preciso impedir valores negativos e zero.
 * - Considerar: emprestimoSolicitado <= 0.
 *
 * - Se o usuário informar uma quantidade de parcelas inválida
 *   em uma nova tentativa, a variável "controle" pode continuar
 *   com o resultado da tentativa anterior.
 * - Preciso garantir que só utilize resultados de tentativas válidas.
 *
 * - Atualmente utilizo vários IF para permitir novas tentativas.
 * - Posso substituir essa estrutura por WHILE.
 * - Assim, evito repetir o mesmo código várias vezes.
 *
 * - Deixar mais claro quando a parcela ultrapassa o limite máximo.
 * - Exemplo: "A parcela ultrapassa o limite permitido pela renda."
 *
 * - Separar o programa em funções:
 *   validação dos dados, análise do empréstimo e apresentação
 *   do resultado.
 *
 * - Variáveis booleanas de controle.
 * - IF independente e IF aninhado.
 * - Operadores lógicos && e ||.
 * - Estruturas de repetição WHILE.
 * - Validação de entradas do usuário.
 */