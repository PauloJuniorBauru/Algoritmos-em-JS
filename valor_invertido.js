/*
DESAFIO
Desenvolva um algoritmo que solicite um valor de até 3 digitos, após a entrada de dados, mostrar o valor invertido utilizando operações matemáticas. Exemplo: 125, o resultado será 521.
*/

const valor = 125; //Valor de Entrada.

let unidade = valor % 10;
let decimal = Math.floor((valor % 100) / 10); //Método floor da classe Math: Faz a divisão apenas da parte Inteira.
let centena = Math.floor(valor % 1000 / 100);

let resultado = (unidade * 100) + (decimal * 10) + (centena * 1);
console.log(resultado);
