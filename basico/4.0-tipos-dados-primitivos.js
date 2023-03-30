//JS recebe uma tipagem dinâmica, isso diz que aos dados em JS são definidos de forma dinâmica.
/*
    *Os tipos de dados são: string, number, undefined, null, symbol
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


