//É possível reatribuir novo valor os elementos internos do valor de uma constante
const array = [1, 2, 3];
array.push(4);
array[0] = 0;
console.log(array);

//Não é possível reatribuir novo valor a constante
array = 'agora eu tento ser uma string!'
console.log(array); //erro
