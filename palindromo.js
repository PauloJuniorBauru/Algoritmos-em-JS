/*
EXPLICAÇÃO
Palíndromo é toda palavra ou frase que pode ser lida de trás pra frente e que, independente da direção, mantém o seu sentido.

DESAFIO
Crie uma função que receba uma palavra como parâmetro e que retorne:
- "SIM, SOU UM PALÍNDOROMO", caso a palavra informada seja um palíndromo;
- "IFELISMENTE, NÃO SOU UM PALÍNDROMO", caso a palavra não seja um palíndromo.

EXEMPLOS DE PALÍNDROMOS
ama, arara, asa, matam, osso, ovo, radar, rever, reviver, rir, saias, socos e etc...
*/

function palindromo(palavra) {
    
    let novaPalavra = '';
    for (let i = palavra.length -1; i >= 0; i--) {
        novaPalavra += palavra[i];
    }

    if (palavra == novaPalavra) 
        return 'SIM, SOU UM PALÍNDOROMO';
    else
        return 'IFELISMENTE, NÃO SOU UM PALÍNDROMO';
}

let minhaPalavra = 'arara';
console.log(palindromo(minhaPalavra));