//A variável let possue dois momentos importantes, exceto a const que possui um único momento

//1. Variável let declarada
let nomeLivro;
console.debug(nomeLivro); //o valor é: undefined

//const nomeLivro; //tomamos erro.
/*
*Declarar é como reservar uma mesa num restaurante,
*só que você ainda não sabe em qual cadeira quem vai sentar para o jantar.
*É como avisar ao motor do JS que será reservado um espaço na memória que ainda não possui um valor definido.
*/

//1.2. Variável let inicializada
nomeLivro = 'O andar do bêbado';
console.debug(nomeLivro);
/*
*Inicializar é apontar um valor no momento mais conveniente do código.
*/

//2.Variável let e const declarada e incializada
let nomeAutor = 'Leonard Mlodinow';
console.debug(nomeAutor);

const livro = 'O andar do bêbado';
/*
*let pode ser declarada e inicializada ao mesmo momento. 
*Ao declarar com const é necessário atribuir um valor imediato.
*/

//3. Variável let pode mudar seu valor ao longo do código
let estado = 'ON';
console.debug(estado);
estado = 'OFF';
console.debug(estado);

let numero = 2;
console.log(numero);
numero = 4;
console.log(numero); //numero passará a ter o valor 4 agora.

const nomeCliente = 'Clarice';
const ultimoNomeCLiente = 'Lispector';
const nomeCompletoCliente = nomeCliente + ' ' + ultimoNomeCLiente;
console.log(nomeCompletoCliente);

/*
*Quando fazemos esse tipo de mudança de valor na variável let, precisamos tomar
*cuidado porque perdemos o seu valor incial e não é possível resgatá-lo.
*PS: const possui seu valor imutável, diferente de let que 
poderá mudar seu valor ao longo do código visto nos exemplos.Porém, 
podemos pegar o valor de uma const e manipular em outra const ou let.
*/

//4.Variável let e const NÃO podem ser redeclaradas
//let pais = 'Brasil';
//let pais = 'Argentina';
/*
*Isso não pode acontecer dentro do mesmo escopo. Do contrário, tomaremos erro.
*/

//5. O valor de uma variável let ou const pode ser atribuido a outra let ou outra const.
let x = 2;
let y = 3;
let z = x * y;
console.log('resultado:', z); //valores de x e y atribuidos em outra let.
console.log('valor x:', x);
console.log('valor y:', y); //valores de x e y permanecem os mesmos.
/*
*Podemos criar variáveis que vão pegar os valores que desejamos manipular de outra let ou const.
*É mais consistente manter o valor inicial de uma variável let sempre que possível,
*salvo no caso em que o propósito seja mesmo a mudança permanente do seu valor.
*PS: Vale resssaltar que o valor de uma const não poderá ser modificado ao longo do código.
*/