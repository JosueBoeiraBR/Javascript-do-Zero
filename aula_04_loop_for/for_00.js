/**
 * Exercício com for (tabuada)
 */

const leia = require('readline-sync');

console.log("TABUADA");
console.log()

for (let i=1; i<=10; i++){
    console.log("TABUADA DO NÚMERO", i);
    for (let j=1; j<=10; j++){
        console.log(i, "x", j, "=", i*j);
    }
}