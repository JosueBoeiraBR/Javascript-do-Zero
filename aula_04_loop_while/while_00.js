/**
 * Exercício com while (Sistema de validação de senha)
 * A senha correta será 2026.
Solicite ao usuário que digite uma senha.
Enquanto a senha estiver incorreta:
- Exiba uma mensagem informando que a senha está incorreta.
- Conte uma tentativa.
- Solicite a senha novamente.
Quando acertar:
- Exiba uma mensagem de acesso autorizado.
- Informe quantas tentativas incorretas foram realizadas.
 */

const leia = require('readline-sync');

let tentativas = 1;

console.log("VALIDAÇÃO DE SENHA");

let senha = leia.questionInt("\nDigite a senha: ");

while(senha!==2026){
    console.log("Senha Incorreta");
    senha = leia.questionInt("\nDigite a senha: ");
    tentativas+=1;
}

console.log("\nACESSO AUTORIZADO");
console.log(`FORAM ${tentativas} TENTATIVAS`);
