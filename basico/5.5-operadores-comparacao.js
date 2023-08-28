/*
    *Operadores de comparação:
    > maior que
    >= maior ou igual que
    < menor que
    <= menor ou igual que
    == igualdade (valor)
    === igualdade estrita (valor e tipo)
    != diferente (valor)
    !== diferente estrito (valor e tipo)

    PS: São operadores usados para fazer perguntas e recebem
    apenas duas respostas que chamamos de boolean: false ou true. 
*/

const comparacao1 = 10 > 5;
console.log(comparacao1); //true

const comparacao2 = 10 >= 5;
console.log(comparacao2); //true

const comparacao3 = 10 >= 10;
console.log(comparacao3); //true

const comparacao4 = 10 >= 11;
console.log(comparacao4); //false

/*
    *Não devemos usar o operador de comparação que checa somente os valores,
    pois o JS faz um correção de tipo, ou seja, converter um tipo a outro
    efetuando uma dedução do que queremos fazer e isso não é interessante:
*/
const num1 = 10;
const num2 = '10';
console.log(num1 == num2); //true
console.log(num1 === num2); //false