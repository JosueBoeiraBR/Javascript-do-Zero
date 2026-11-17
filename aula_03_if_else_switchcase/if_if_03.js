/**
 * Exercício com mais if 03 (Verificar idade, se possui ingresso e se possui autorização dos pais) 
 * If aninhado se a idade for menor a 17 precisa do ingresso e autorização
 */

const leia = require('readline-sync');

console.log("SISTEMA DE ACCESO");
console.log();

let idade = leia.questionInt("Informe sua idade: ");
if (idade<1){
    console.log("IDADE INVÁLIDA");
}

let ingresso = leia.question("Possui ingresso? S/N ");
if (ingresso!="s" && ingresso!="n") {
    console.log("OPÇÃO INVÁLIDA");
}

let autorizacao = "n"
if (idade<17){
    autorizacao = leia.question("Possui autorização dos pais? S/N ");;
        if (autorizacao!="s" && autorizacao!="n") {
            console.log("OPÇÃO INVÁLIDA");
        }
}

if (idade<17){
    if (ingresso=="s"){
        if (autorizacao=="s"){
            console.log("Pode accesar!");
        } else {
            console.log("Não pode accesar!");
        }
    } else {
            console.log("Não pode accesar!");
    }
} 


if (idade>=17){ // Podia ter feito (idade>=17 && ingresso=="s")
    if (ingresso=="s"){
       console.log("Pode accesar!");
    } else {
    console.log("Não pode accesar!");
} 
}

/**
 * Meu erro foi que declarei a variavel dentro do bloco If e existe dentro só dele 
 * Tive que criar a variavel e dar um valor antes do bloco if
 * Pra que funcionasse Com ingresso em sem autorização e Sem ingresso e com autorização tive que
 * colocar dois else dentro do respectivo if 
 * */ 