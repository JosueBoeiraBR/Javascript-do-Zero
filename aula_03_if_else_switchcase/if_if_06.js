/**
 * Exercício com mais if 06 (sistema de avaliação de desempenho)
 * Calcular media de 2 notas
 * Abaixo de 5 reprovado, 5 até 6,99 recuperação, 7 ate 8,99 aprovado, 9 ate 10 excelente
 * Até 10 faltas frequencia adecuada, mais de 10 frequencia insuficiente
 * Só podera ser aprovado se a media for maior ou igual a 7 e nao tiver mais de 10 faltas
 * Se não sera reprovado ou em recuperação
 */

const leia = require('readline-sync');

let validez = true
let n1 = leia.questionFloat("INFORME A PRIMEIRA NOTA: ");
if(n1<0 || n1>10){
    validez = false
    console.log("NOTA INVÁLIDA")
}

let n2 = leia.questionFloat("INFORME A SEGUNDA NOTA: ");
if(n2<0 || n2>10){
    validez = false
    console.log("NOTA INVÁLIDA")
}

let media = -1
if (validez===true){
media = (n1+n2)/2;
}

let faltas = leia.questionInt("INFORME QUANTAS FALTAS TEVE: ");
if (faltas<0){
    validez = false
    console.log("NÚMERO INVÁLIDO");
}

console.log();
if(media>=0 && validez===true){ // Coloquei esse if pra exhibir a media só se for maior a 0
console.log("SUA MÉDIA É:", media);
}

if (validez===true){ 
    if (media<5){
        console.log("VOCÊ REPROVOU")
}   else if (media<7){
        console.log("VOCÊ ESTÁ EM RECUPERAÇÃO");      
}   else if (media<9 && faltas<=10){
        console.log("VOCÊ FOI APROVADO COM", faltas, "FALTAS");
}   else if (media<=10 && faltas<=10){
        console.log("VOCÊ FOI APROVADO COM EXCELENCIA E COM", faltas, "FALTAS");
}   else {
        console.log("VOCÊ REPROVOU POR FREQUENCIA INADECUADA");
}

} else {
    console.log("VALORES INVÁLIDOS"); // MAIS FACIL UTILIZANDO ELSE DO PRIMEIRO IF 
}

//if (validez===false){
//    console.log("VALORES INVÁLIDOS");  TENTATIVA 
//}

/**
 * Eu criei a variavel validez pra que a media so seja feita e executada caso seja false. 
 * Tambem dei valor -1 pra media pra aparecer Valores invalidos e nao Voce reprovou porque tinha colocado media 0 no começo
 */