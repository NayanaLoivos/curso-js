//Podemos incrementar ou decrementar 1 ou > 1 dependendo do objetivo.

//1. Operador de pos incremento
let contador = 0;
console.debug(contador ++);//numero a ser incrementado
console.debug(contador); //faz o incremento
console.debug(contador ++);//numero a ser incrementado
console.debug(contador); //faz o incremento
console.debug(contador ++);//numero a ser incrementado
console.debug(contador); //faz o incremento
/*O operador pos ++ incrementa a variável e depois atribui o novo valor a ela.*/

//1.1. Operador de pre incremento
let contador2 = 0;
console.debug(++ contador2); //faz o incremento
console.debug(contador2); //retorna o valor
console.debug(++ contador2); //faz o incremento
console.debug(contador2); //retorna o valor
console.debug(++ contador2); //faz o incremento
console.debug(contador2); //retorna o valor
/*O operador pre ++ atribui o novo valor a variável e a incrementa.*/

//2. Operador de pos decremento
let temporizador = 11;
console.debug(temporizador --);
console.debug(temporizador);
console.debug(temporizador --);
console.debug(temporizador);
console.debug(temporizador --);
console.debug(temporizador);
/*O operador pos -- decrementa a variável e atribui o novo valor a ela.*/

//2.1 Operador de pre decremento
let temporizador2 = 11;
console.debug(-- temporizador2);
console.debug(temporizador2);
console.debug(-- temporizador2);
console.debug(temporizador2);
console.debug(-- temporizador2);
console.debug(temporizador2);
/*O operador pre -- atribui o novo valor a variável e a decrementa.*/

//3. Forma de incrementar um valor qualquer
const anoNasc = 1985;
let anoAtual = 2023;
let idade = anoAtual - anoNasc;
console.debug(`Minha idade no ano ${anoAtual} é ${idade} anos.`);
anoAtual += 1;
idade = anoAtual - anoNasc;
console.debug(`Minha idade no ano ${anoAtual} é ${idade} anos.`);
anoAtual += 1;
idade = anoAtual - anoNasc;
console.debug(`Minha idade no ano ${anoAtual} é ${idade} anos.`);

//3.1. Forma de decrementar um valor qualquer
const anoNascimento = 1985;
let ano = 2023;
let idadeAno = ano - anoNascimento;
console.debug(`Minha idade no ano ${ano} é ${idadeAno} anos.`);
ano -= 1;
idadeAno = ano - anoNascimento;
console.debug(`Minha idade no ano ${ano} é ${idadeAno} anos.`);
ano -= 1;
idadeAno = ano - anoNasc;
console.debug(`Minha idade no ano ${ano} é ${idadeAno} anos.`);

//4. Incrementar valor >1
const numero = 2;
let contador1 = 0;
contador1 = contador1 + numero;
console.debug(contador1);
contador1 = contador1 + numero;
console.debug(contador1);

//4.1. Decrementar valor >1
const numero1 = 2;
let contador3 = 11;
contador3 = contador3 - numero1;
console.debug(contador3);
contador3 = contador3 - numero1;
console.debug(contador3);