/**
 * Exercício com switch case (sistema de cadastro)
 */

const leia = require('readline-sync');

console.log("SISTEMA DE CADASTRO");
console.log();

console.log("1 - Cadastrar novo usuario");
console.log("2 - Consultar usuario");
console.log("3 - Atualizar usuario");
console.log("4 - Excluir usuario");
console.log("5 - Sair");
let opcao = leia.questionInt("Escolha a opção: ");

let nome = null // Tinha colocado "a" antes mas pode dar problema se a pessoa colocar a como seu nome
                // Porque depois se quissese cadastrar um novo o "a" daria como verdadeiro e permitiria igual

switch (opcao){
    case 1: // Tive que corregir porque antes permitia escrever nome vazio e armazenar ele
        console.log() // Então mudei o valor da variável e coloquei dois if separados
        console.log("Vamos cadastrar");
        if (nome === null){
            nome = leia.question("Informe o nome: ");
        }
        if (nome === "") {
             console.log("Não pode deixar vazio");  
        }
    break;
    case 2: 
        console.log()
        console.log("Vamos consultar");
        if (nome!=null){
            console.log("O usuario cadastrado é:", nome);
        } else {
            console.log("Não tem ninguem cadastrado");
        }
    break;
    case 3:
        console.log()
        console.log("Vamos atualizar o usuario");
        if (nome!=null){
            console.log("O usuario atual é:", nome);
            nome = leia.question("Informe o novo: ");
        } else {
            console.log("Não tem ninguem pra atualizar");
        }
    break;
    case 4: 
        console.log()
        if (nome!=null){
            console.log("Vamos excluir o usuario");
            nome = null
        } else {
            console.log("Não tem ninguem para excluir");
        }
    break;
    case 5:
        console.log()
        console.log("Até mais. Volte logo");
    break;
    default:
        console.log()
        console.log("Opcão inválida");
}