/**
 * Exercício com for (sistema de desempenho / 5 alunos)
 * 1. Entrada das notas
- Receber 4 notas para cada aluno.
- As notas devem estar entre 0 e 10.
- Se uma nota for inválida, informar o erro e pedir novamente a mesma nota.

 * 2. Resultado individual
- Para cada aluno, mostrar:
- As quatro notas.
- A média individual.
- Se foi aprovado ou reprovado.
 Critério: média igual ou superior a 7 = aprovado.

 * 3. Resultado da turma
- Ao terminar todos os alunos, mostrar:
- Média geral da turma.
- Quantidade de alunos aprovados.
- Quantidade de alunos reprovados.
- Maior média individual.
- Menor média individual.
 */

const leia = require('readline-sync');

const alunos = 5;
const notas = 4;
let media = 0;
let mediaIndividual = 0;
let maiorMedia = 0;
let menorMedia = 0;
let reprovados = 0;
let aprovados = 0;


for (let i = 1; i <= alunos; i += 1) { // para utilizar a variavel alunos como termino de parada tinha que ser constante
    let somaNotas = 0; // em 0 porque quando reinicia o segundo loop, volta pra 0, assim posso calcular a media invididual
    console.log("NOTAS DO ALUNO", i);

    for (let j = 1; j <= notas; j += 1) {

        let nota = leia.questionInt("Insire a nota: ", j);
        if (nota < 0 || nota > 10) {
            console.log("VALOR INVÁLIDO");
        } else {
            somaNotas += nota; // Soma as 4 notas do aluno
        }
    }

    mediaIndividual = somaNotas / notas; // Antes de passar ao seguinte aluno divide as notas por 4 basicamente
    media += mediaIndividual; // Acumula na variavel media todas as medias
    console.log("SUA MÉDIA FOI", mediaIndividual);

    if (mediaIndividual >= 7) {
        aprovados += 1;
    } else {
        reprovados += 1;
    }

    if (mediaIndividual > maiorMedia) {
        maiorMedia = mediaIndividual;
    }

    if (i === 1) { // Começa como teste o aluno 1. Faz com que a menorMedia se torne a mediaIndividual
        menorMedia = mediaIndividual; // porque vai ser a unica media disponivel no momento
    } else if (mediaIndividual < menorMedia) { // Aqui como i nao vai ser mais 1 vai comparar. Se
        menorMedia = mediaIndividual; // a media seguinte for menor que a menorMedia anterior
    } // aí, a menorMedia se torna mediaIndividual de novo.

    console.log();

}

media = media / alunos;

console.log("MEDIA TOTAL:", media);
console.log("APROVADOS:", aprovados);
console.log("REPROVADOS:", reprovados);
console.log("MAIOR MEDIA INDIVIDUAL:", maiorMedia);
console.log("MENOR MEDIA INDIVIDUAL:", menorMedia);