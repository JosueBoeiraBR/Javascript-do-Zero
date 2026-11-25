/**
 * Exercício com for (analisador de desempenho)
 */

const leia = require('readline-sync');

let pontuacao = undefined;
let maiorPontuacao = 0;
let media = 0;
let soma = 0;
let excelente = 0;
let regular = 0;
let baixo = 0;
let validos = 0;

for(let i= 1; i<=5; i+=1){

    pontuacao = leia.questionInt("Informe uma pontuação de 1 a 100: ");

    if(pontuacao<10 && pontuacao>=0){
        baixo+=1;
        validos+=1;
    } else if(pontuacao<20 && pontuacao>=10){
        regular+=1;
        validos+=1;
    } else if(pontuacao<=100 && pontuacao>=20){
        excelente+=1;
        validos+=1;
    } else {
        console.log("Valor inválido");
    }

    if(pontuacao>=0 && pontuacao<=100){
    soma+=pontuacao;
    }

    if(pontuacao>=0 && pontuacao<=100){
        if (pontuacao>maiorPontuacao){
        maiorPontuacao = pontuacao;
        }
    }
}

//media = soma/5; // so funciona se os 5 forem validos
media = (validos>0 ? soma/validos : 0); // se for maior que 0 divide senao mostra 0

console.log();
console.log("QUANTOS TIVERAM DESEMPENHO EXCELENTE:", excelente);
console.log("QUANTOS TIVERAM DESEMPENHO REGULAR:", regular);
console.log("QUANTOS TIVERAM DESEMPENHO BAIXO:", baixo);
console.log("SOMA DAS PONTUAÇÕES:", soma);
console.log("MÉDIA DAS PONTUAÇÕES", media);
console.log("MAIOR PONTUAÇÃO", maiorPontuacao);