/**
 * Exercício com for (sistema de avaliação de alunos / 3 alunos / 4 notas)
 * 1. A média de cada aluno.
 * 2. Se o aluno foi aprovado ou reprovado.
 * 3. A média geral de todos os alunos.
 * 4. Quantos alunos foram aprovados.
 * Regra: média igual ou superior a 7 é aprovação.
 */

const leia = require('readline-sync');

const TOTAL_ALUNOS = 3;
const TOTAL_NOTAS = 4;

let somaMedias = 0;
let aprovados = 0;

console.log("NOTAS ALUNOS");

for (let aluno = 1; aluno <= TOTAL_ALUNOS; aluno++) { // Primeiro for pra percorrer o primeiro aluno
    console.log(`\nALUNO ${aluno}`); //`\n ou '\n ou "\n pra pular pra linha de baixo
    let somaNotas = 0;

    for (let n = 1; n <= TOTAL_NOTAS; n++) { // Segundo for percorre as notas do primeiro aluno
        const nota = leia.questionFloat(`Insira a nota ${n}: `);

        if (nota < 0 || nota > 10) {
            console.log(`NOTA ${n}: INVÁLIDA`);
        } else {
            somaNotas += nota;
        }
    }

    const media = somaNotas / TOTAL_NOTAS; // Faz as contas e mostra se foi aprovado ou nao
    somaMedias += media;
    console.log("MÉDIA:", media.toFixed(2)); // toFixed 2 deixa só duas casas decimais

    if (media >= 7) {
        aprovados++;
        console.log("VOCÊ FOI APROVADO");
    } else {
        console.log("VOCÊ FOI REPROVADO");
    } // Dai depois daqui volta la pra cima e vai pro aluno 2
}

console.log("\nA MÉDIA GERAL FOI:", (somaMedias / TOTAL_ALUNOS).toFixed(2));
console.log("APROVADOS:", aprovados);
console.log("REPROVADOS:", TOTAL_ALUNOS - aprovados);