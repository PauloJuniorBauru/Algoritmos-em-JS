/*
EXPLICAÇÃO
Os Números Primos são números naturais maiores do que 1 que possuem somente dois divisores, ou seja, são divisíveis por 1 e por ele mesmo.

DESAFIO
Enviar um número qualquer como parâmetro em uma função e obter o retorno em ordem crescente de todos os números primos até o número escolhido.

EXEMPLO
Número Escolhido: 15
Resultado Obtido: 2, 3, 5, 7, 11, 13
*/

function primos(n) {
    let numerosPrimos = [];
    let guarda = true;

    for (let i = 2; i <= n; i++) {        
        
        guarda = true;
        for (let j = 2; j < i; j++) {
            //Se a divisão der resto zero, não é primo.
            if (i % j == 0)                 
                guarda = false;            
        }        
        
        if (guarda) {
            numerosPrimos.push(i);
        }
    }

    return numerosPrimos; //Array com todos Números Primos.
}

let numeroEscolhido = 15; //Digite outro número se quiser.
console.log(primos(numeroEscolhido)); 