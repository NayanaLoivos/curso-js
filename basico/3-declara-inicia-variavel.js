//A variável possue dois momentos importantes

//1. Variável declarada
let nomeLivro;
console.debug(nomeLivro); //o valor é: undefined
/*
*Declarar é como reservar uma mesa num restaurante,
*só que você ainda não sabe em qual cadeira quem vai sentar para o jantar.
*É como dizer ao motor do JS que reserve esse espaço na memória que ainda 
*possui um valor indefinido.
*/

//1.2. Variável inicializada
nomeLivro = 'O andar do bêbado';
console.debug(nomeLivro);
/*
*Inicializar é apontar um valor no momento mais conveniente do código.
*/

//2.Variável declarada e incializada
let nomeAutor = 'Leonard Mlodinow';
console.debug(nomeAutor);
/*
*Pode ser declarada e inicializada no mesmo momento. 
*/

//3. Variável que muda seu valor ao longo do código
let estado = 'ON';
console.debug(estado);
estado = 'OFF';
console.debug(estado);

//4.Variável NÃO pode ser redeclarada
//let pais = 'Brasil';
//let pais = 'Argentina';
/*
*Isso não pode acontecer dentro do mesmo escopo.
*Do contrário, tomaremos um erro de sintaxe.
*/
