/*
DESAFIO
Desenvolva um algoritmo que solicite um valor de até 3 digitos, após a entrada de dados, mostrar o valor da unidade de dezena. Exemplo: 25, o resultado será 2.
*/

const valor = 43; //Valor de Entrada.

//Para conseguir a UNIDADE de DEZENA use o operador % (Modulo).
let unidadeDezena = Math.floor((valor % 100) / 10); //O método floor() irá retornar a parte inteira do número.

console.log(unidadeDezena);
