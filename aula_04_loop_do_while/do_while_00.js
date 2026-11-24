/**
 * Exercício com do while (CAIXA ELETRÔNICO)
 * Saldo inicial: R$ 1.000,00.
 * 1 - Consultar saldo
 * 2 - Sacar dinheiro
 * 3 - Depositar dinheiro
 * 4 - Sair
 * Regras
 * 1. O menu deve aparecer novamente depois de cada operação, exceto quando o usuário escolher sair.
 * 2. Consultar saldo deve mostrar o saldo atual.
 * 3. Sacar dinheiro deve diminuir o saldo, mas não permitir saque maior que o saldo disponível.
 * 4. Depositar dinheiro deve aumentar o saldo.
 * 5. Ao escolher 4, mostrar uma mensagem de encerramento.
 * O que você vai praticar
 */

const leia = require('readline-sync');

let opcao = 0;
let saldo = 1000.00;

do {
    console.clear(); // Limpa tela
    console.log("SISTEMA DE BANCO")
    console.log("\n1 - CONSULTAR SALDO");
    console.log("2 - SACAR DINHEIRO");
    console.log("3 - DEPOSITAR DINHEIRO");
    console.log("4 - SAIR");
    opcao = leia.questionInt("ESCOLHA UMA OPÇÃO: ");

    switch (opcao) {
        case 1:
            console.log("\nVAMOS CONSULTAR O SALDO");
            console.log("SEU SALDO É:", saldo.toFixed(2));
            break;
        case 2:
            console.log("\nVAMOS A SACAR DINHEIRO");
            let saque = leia.questionFloat("DIGITE QUANTO DINHEIRO QUER SACAR: ");
            if (saque <= 0 || saque > saldo) {
                console.log("\nSALDO INSUFICIENTE");
            } else {
                saldo = saldo - saque;
                console.log(`VOCÊ SACOU ${saque.toFixed(2)} REAIS`);
            }
            break;
        case 3:
            let deposito = leia.questionFloat("\nDIGITE QUANTO DINHEIRO QUER DEPOSITAR: "); // Estava en Int
            saldo += deposito;
            console.log(`VOCÊ DEPOSITOU ${deposito.toFixed(2)} reais`);
            break;
        case 4:
            console.log("\nATÉ MAIS");
            break;
        default:
            console.log("\nOPCÃO INVÁLIDA");
            break;
    }
    leia.question("\nENTER PARA CONTINUAR"); // Esta linha solicita isso pra que nao seja exluido tudo antes com o console.clear
} while (opcao !== 4);




