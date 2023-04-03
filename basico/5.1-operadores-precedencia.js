//Qual cálculo da expressão é realizada primeiro?
const num1 = 2;
const num2 = 2;
const num3 = 5;

console.log(num1 + num2 * num3);
//A operação de multiplicação será realizada primeiro que a soma.

console.log(num1 ** num2 * num3);
//A operação de potência será realizada primeiro que a multiplicação.

console.log((num1 + num2) * num3);
console.log(num1 ** (num2 * num3));
//A operação envolvida nos parênteses será realizada primeiro que toda a expressão.

/*
    *As regras de precedência são como na matemática nessa ordem:
    *parênteses
    *potenciação
    *multiplicação, divisão, módulo
    *soma, subtração

    *Se na expressão, os operadores tiverem a mesma ordem,
    *os cálculos são realizados da esquerda para a direita.

*/
