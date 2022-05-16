/*
DESAFIO
Desenvolva um algoritmo que solicite um valor em Reais, após a entrada de dados, mostre o valor invertido em Dolar.
Taxa de Câmbio em nosso exemplo será: R$3,35 reias para cada $1,00 dolar.
*/

const valor = 15.78; //Valor de Entrada em REAIS.

let conversao = valor / 3.35; //Conversão Reias para Dolar.
conversao = conversao.toFixed(2); //Método toFixed() para determinar apenas 2 casas decimais.

console.log(conversao);
