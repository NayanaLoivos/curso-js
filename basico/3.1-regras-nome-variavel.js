//Regras gerais

//1. Não criar variáveis que contenham nomes de palavras reservadas da linguagem JS.
//let console = '"console" é uma palavra reservada da linguagem JS!!!';
//console.log(console); //tomamos erro.

//2. Criar nome de variável significativo que diga exatamente o que aquela variável guarda.
let cpf = '14587995404';
console.log(cpf); //em qualquer linha do código eu sei o cpf quer dizer.

//3. Não começar nome de variável com número.
//let 2numero = 2;
//console.log(2numero); //tomamos erro.

//4. Usar o padrão camelCase no nome das variáveis.
let numeroReal = 1.5;
console.debug(numeroReal);

//5. Não usar espaço ou traço no nome das variáveis.
//let nome-pai;
//console.debug(nome-pai); //tomamos erro.

//let nome pai;
//console.debug(nome-pai); //tomamos erro.

//6. Variáveis são case-sensitive, ou seja, letras maiúsculas e minúsculas importam.
let Nome = 'Nayana';
let nome = 'Bruno';
console.debug(Nome);
console.debug(nome);
/*
*São variáveis totalmente independentes uma da outra. 
*/

//7. Utilizar let ou const para declarar variáveis, não utilizar var.
//8. Não redeclarar variáveis com let e const.
//9. Não se pode modificar o valor de uma variável declarada com const, ou seja, 
  // variável declarada com const deve ser inicializada no mesmo momento da declaração.
