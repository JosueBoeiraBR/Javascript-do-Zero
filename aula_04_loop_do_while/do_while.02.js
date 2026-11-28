/**
 * Exercício com do while (Sistema de vendas)
O programa deverá solicitar o valor de cada venda até que o usuário digite 0 para encerrar.
1. Regras de entrada
- Receber valores decimais (questionFloat).
- Não aceitar valores negativos.
- Se o usuário digitar um valor negativo, informar que é inválido e solicitar novamente.
- Digitar 0 encerra o registro.
2. Durante o registro, calcular:
1. Quantidade de vendas realizadas.
2. Valor total vendido.
3. Maior venda.
4. Menor venda.
5. Quantidade de vendas acima de R$ 500.
6. Quantidade de vendas abaixo de R$ 100.
3. Resultado final
Exiba um relatório com:
- Total de vendas.
- Quantidade de vendas.
- Média de valor por venda.
- Maior venda.
- Menor venda.
- Quantidade de vendas acima de R$ 500.
- Quantidade de vendas abaixo de R$ 100.
 */

const leia = require('readline-sync');

let qtdVendas = 0;
let totalVendido = 0;
let maiorVenda = 0;
let menorVenda = 1;
let vendas_superior_500 = 0;
let vendas_inferior_100 = 0;
let mediaVendas = 0;
let vendas = 1.00;

do{
    console.log("SISTEMA DE VENDAS");
    console.log("Digite 0 para encerrar");

    vendas = leia.questionFloat("\nInsira o valor da venda: ");
    
    if(vendas<0){
        console.log("VALOR INVÁLIDO");
    } else if(vendas>=1){
        qtdVendas+=1
        totalVendido+=vendas
    }
    
    if(vendas>maiorVenda){
        maiorVenda = vendas;
    }

    if(qtdVendas===0 && vendas>0){
        menorVenda = vendas; // Tinha colocado ao contrario e como menorVenda está como 0 o loop não funcionava
    }

    if(vendas<menorVenda && vendas>0){
        menorVenda = vendas;
    }
    

    if(vendas>500){
        vendas_superior_500+=1;
    } else if(vendas<100 && vendas>0){
        vendas_inferior_100+=1;
    }

    media = totalVendido/qtdVendas;
    console.log();

} while(vendas!==0);

console.log(`\nQUANTIDADE DE VENDAS: ${qtdVendas.toFixed(2)}`);
console.log(`TOTAL VENDIDO: ${totalVendido.toFixed(2)}`);
console.log(`MEDIA DAS VENDAS: ${media.toFixed(2)}`);
console.log(`VENDAS ACIMA DE 500: ${vendas_superior_500}`);
console.log(`VENDAS ABAIXO DE 100: ${vendas_inferior_100}`);
console.log(`A MAIOR VENDA FOI DE: ${maiorVenda.toFixed(2)}`);
console.log(`A MENOR VENDA FOI DE: ${menorVenda.toFixed(2)}`);