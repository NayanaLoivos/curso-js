//Diferença entre tipo de dado primitivo e tipo de dado passado por referência

//Por referência
let arr1 = [6, 7, 8];
let arr2 = arr1;
console.debug(arr1, arr2);

arr2.push(9);
console.debug(arr1, arr2); //[6, 7, 8, 9] [6, 7, 8, 9]
/*
    *O valor que foi adicionado na arr2 também é adicionado em arr1, isso porque
    *arr2 está apontado para o mesmo local de arr1 dentro da memória do computador.
    *Portanto arr1 e arr2 apontam exatamente para o mesmo valor não exitem valor [6,7,8]
    *duas vezes na memória. Isso são dados passado por referência.
*/

//Dados primitivos
const var1 = 'Nayana';
let var2 = 'Mesquita';
console.debug(`var1: ${var1}, var2: ${var2}`);

var2 = 'Loivos';
console.debug(`var1: ${var1}, var2: ${var2}`);
/*
    *Quando criamos uma variável que com o valor de outra variável estamos realmente 
    *fazendo uma cópia do valor. Portanto se mudamos o valor de alguma delas, a outra
    *permanecerá com seu valor inicial.
*/