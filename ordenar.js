/*
DESAFIO
Montar um algoritmo que solicite 5 números inteiros, ao terminar, deverá mostrar qual foi o MENOR e MAIOR número.
*/

let n = [7, 4, 17, 2, 9]; //Array com Números Solicitados.

//Variáveis RECEBE o conteúdo da primeira posição do Array.
let menor = n[0];
let maior = n[0];

/*Exemplo com "FOR"
for (let c = 0; c < n.length; c++) {
    if (n[c] < menor) 
        menor = n[c];
    if(n[c] > maior)
        maior = n[c]; 
}
*/

//Exemplo com "FOR IN" 
for (let pos in n) { //Para cada POSIÇÃO em meu Array chamado n faça...
    if (n[pos] < menor)
        menor = n[pos];
    if (n[pos] > maior) 
        maior = n[pos]; 
}

console.log(`O MENOR número é: ${menor}`);
console.log(`O MAIOR núemro é: ${maior}`);