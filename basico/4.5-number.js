let num1 = 15;
let num2 = 15.32324;
let teste = num1 * 'oi';
console.log(teste)
let teste2 = num1 * 5;

//1. Conversão para qualquer base numérica
console.log(num1.toString(2));
console.log(num1.toString(6));
console.log(num1.toString(16));

//2. Conversão number para string
console.log(num1.toString());

//3. Fixar casas decimais 
console.log(num2.toFixed(2));

//4. Valores booleanos 
console.log(Number.isInteger(num1));
console.log(Number.isInteger(num2));

console.log(Number.isNaN(teste)); //retorna true sempre que a expressão for inválida 
console.log(Number.isNaN(teste2)); //retorna false sempre que a expressão for válida

//5. Valores numéricos seguros do JS
console.debug(Number.isSafeInteger(num1));

//6. Imprecisão nos valores decimais < 1 por causa do padrão IEEE 754-2008
let num3 = 0.7;
let num4 = 0.1;

num3 += num4 //0.8
num3 += num4 //0.9
num3 += num4 //1.0

console.debug(num3 = num3.toFixed(2));

console.debug(Number.isInteger(1.00)); //true
console.debug(num3);
console.debug(Number.isInteger(num3)); //false

console.debug(num3 = parseFloat(num3)); 
console.debug(Number.isInteger(num3)); //true

/*
    *O JavaScript representa números usando o formato de ponto flutuante de 64 bits 
    *definido pelo padrão IEEE 754-2008, o que significa que pode representar números tão 
    *grandes quanto ± 1,7976931348623157 × 10 e tão pequenos quanto ± 5 × 10.
*/