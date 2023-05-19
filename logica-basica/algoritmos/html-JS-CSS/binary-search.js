/* 
    *Se tivesse que buscar em uma lista manual (lista telefônica) 
    de 100 nomes à Laura, como você faria?
    Porvavelmente, pularia para o meio dessa lista porque você sabe na ordem alfabética
    a letra L fica no miolo do meio.
    E se um amigo te pedisse para adivinhar um número de 1 a 100, você começaria do número
    1 ou começaria pelo meio também? 
    Esse é um problema de busca e para problemas como esses utilizamos da pesquisa binária, 
    que corta todo o trabalho que deveríamos ter pela metade, ao invés de passarmos linearmente 
    por cada elemento (pesquisa simples) até chegar ao nome procurado ou adivinhar o número correto nos poupando
    de uma busca estúpida. 
*/
/*
    A busca binária é classicada dentro do maravilhoso mundo dos logaritmos (vamos considerar logaritmos somente na base 2).
    Logaritmos é descobrir qual a potência que você deve elevar uma base para chegar a outro número. 
        2^4 =  2.2.2.2 = 16   
        2^x = 16 (?) ----- Que potência devo elevar a base 2 para chegar a 16? ----- x = 4 
        
        ou denotado em forma de logaritmos seria:
        log2 16 = x (?) ----- Que potência devo elevar a base 2 para chegar a 16? ----- x = 4
*/
/*
    PS:
        *A busca binária trabalha somente com arrays ordenados, não é possível usá-la em outros casos.
        *A busca binária trabalha somente com um item de cada vez.
*/

// Exemplo 1:
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];




// Exemplo 2:
const animals = ['abelha', 'baleia', 'cão', 'dragão', 'elefante\A', 
'falcão', 'gato', 'hiena', 'iguana', 'jumento', 'kookaburra', 'leão\A', 
'mamute', 'namorado', 'onça', 'pato', 'quimera', ' rato', 'sapo', 
'tigre', 'urso', 'vombate', 'wallaby', 'xaru', 'yak', 'zebra'];

const binarySearch = (list, elem) => {
    /*Range em que a busca será realizada*/
    let lowIndex = 0;
    let highIndex = list.length-1;

    /*A cada tentatica se testa o meio*/
    while (lowIndex <= highIndex) {
        let half = parseInt((lowIndex + highIndex) / 2);
        let seek = list[half];
        /*Atualiza a variável half*/
        if (seek === elem) {
            return `Posição: ${half} - ${animals[half]}`;
        } else if (seek < elem) {
            lowIndex = half + 1;
        } else if (seek > elem) {
            highIndex = half + 1;
        }
        return `${elem} não existe!`;          
    };   
};
const searchElement = binarySearch(animals, 'mamute');
console.log(searchElement);








//PAREI NA PAGINA 28 DO LIVRO
