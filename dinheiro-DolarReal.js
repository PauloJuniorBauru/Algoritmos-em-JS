/*
DESAFIO
Desenvolva um algoritmo que solicite um valor em Dolar, após a entrada de dados, mostre o valor invertido em Reais.
Taxa de Câmbio em nosso exemplo será: $1,00 dolar para cada R$3,35 reias.
*/

const valor = 7.50; //Valor de Entrada em DOLAR.

let conversao = valor * 3.35; //Conversão Reias para Dolar.
conversao = conversao.toFixed(2); //Método toFixed() para determinar apenas 2 casas decimais.

console.log(conversao);
