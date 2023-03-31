//NaN - not a number

/*
    *Sempre que vemos NaN no resultado, significa que algum tipo de dado não conscidiu
    *não permitindo trazer um resultado consistente.
*/

const numero = 1;
const string = 'Nay';
console.debug(numero ** string); //NaN

//PS1: Devemos tomar cuidado com os tipos de dados que inserimos em JS, pois se for um numero string 
const numero1 = 2;
const string1 = '2';
console.debug(numero1 ** string1); //4
//Claramente o JS fez a conversão da string antes de fazer a conta.

//PS2: Mas perceba que se tivessemos uma soma, resultaria em uma concatenação
const numero2 = 2;
const string2 = '2';
console.debug(numero2 + string2); //22
