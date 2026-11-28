/**
 * Exercício com while (Sistema de análise de vendas)
Requisitos
1. Registrar os valores das vendas até que seja digitado 0.
2. Não permitir valores negativos. Se o usuário digitar um valor negativo, mostrar uma mensagem de erro e não contabilizar essa venda.
3. Mostrar a quantidade total de vendas válidas.
4. Mostrar o valor total arrecadado.
5. Calcular o valor médio das vendas.
6. Identificar a maior e a menor venda.
7. Contar quantas vendas foram superiores a R$ 500.
8. Contar quantas vendas ficaram entre R$ 100 e R$ 500 (inclusive).
9. Contar quantas vendas foram inferiores a R$ 100.
 */

const leia = require('readline-sync');

let qtdVendas = 0, totalVendas = 0, mediaVendas = 0, maiorVenda = 0, menorVenda = 0, sup500 = 0, intermeio = 0, inf100 = 0; 

let venda = leia.questionFloat("DIGITE O VALOR DA VENDA: ");
console.log("DIGITE 0 PRA SAIR");

while(venda!==0){
    if(venda<0){
        console.log("VALOR INVÁLIDO");
    } else if(venda>0){
        qtdVendas+=1;
    }

    if(qtdVendas===1 && venda>0){
        menorVenda=venda;
        maiorVenda=venda;
    } else if(venda>maiorVenda && venda>0){
        maiorVenda=venda;
    } else if(venda<menorVenda && venda>0){
        menorVenda=venda;
    }

    if(venda<100 && venda>0){
        inf100+=1;
    } else if(venda>=100 && venda<=500){
        intermeio+=1;
    } else if(venda>500){
        sup500+=1;
    }

    if(venda>0){
        totalVendas+=venda;
    }

    venda = leia.questionFloat("DIGITE O VALOR DA VENDA: ");

}

if(qtdVendas>0){
    mediaVendas=totalVendas/qtdVendas;
} else{
    mediaVendas = "NENHUMA VENDA FOI INFORMADA";
}

console.log(`\nA QUANTIDADE DE VENDAS FOI: ${qtdVendas}`);
console.log(`O TOTAL DE VENDAS FOI: ${totalVendas}`);
console.log(`A MEDIA DAS VENDAS FOI: ${mediaVendas}`);
console.log(`A MAIOR VENDA FOI: ${maiorVenda}`);
console.log(`A MENOR VENDA FOI: ${menorVenda}`);
console.log(`SUPERIOR A 500: ${sup500}`);
console.log(`INFERIOR A 100: ${inf100}`);
console.log(`ENTRE 100 A 500: ${intermeio}`);