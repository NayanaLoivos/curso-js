//JS recebe uma tipagem dinâmica, isso diz que aos dados em JS são definidos de forma dinâmica.
/*
    *Os tipos de dados primitivos são: string, number, undefined, null, boolean, bigint, symbol.
    *Quando falando de tipos de dados primitivos, estamos falando de valores imutáveis, 
    *ou seja, não conseguimos modificar nenhum elemento do dado fornecido.
*/

//1.Tipo de dado undefined
let livro;
console.log(typeof(livro)); //undefined
/*
    *Essa variável declarada recebe um valor automático pelo motor do JS.
    *Com o valor undefined ainda não temos um ponteiro na memória.
*/

//2.Tipo de dado null
let idade =  null; //Não aponta para nenhum local na memória.

//3.Tipo de dado string
let livro1 = 'Código: a linguagem oculta de hardware e software de computador';
let livro2 = "Código: a linguagem oculta de hardware e software de computador";
let livro3 = `Código: a linguagem oculta de hardware e software de computador`;
console.log( typeof(livro1)); // string
console.log( typeof(livro2)); // string
console.log( typeof(livro3)); // string

livro1[0] = 'c'; 
console.log(livro1); //continuará sem 'C' na posição[0] porque é imutável

let letra1 =  'b';
let letra2 = letra1;
console.log(letra1, letra2);

letra1 = 'c';
console.log(letra1, letra2); //Tipos primitivos tem seus valores copiados

//4.Tipo de dado number
let numero1 = 10;
let numero2 = 5.1;
console.log( typeof(numero1)); // number
console.log( typeof(numero2)); // number

//5.Tipo de dado boolean
let bebeuAgua = true;
console.log(typeof(bebeuAgua)); // boolean
bebeuAgua = false;
console.log(typeof(bebeuAgua)); // boolean
/*
    *Só existem duas possibilidades de valor lógico: true ou false.
*/


