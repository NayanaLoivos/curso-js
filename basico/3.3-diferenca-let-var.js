//Diferenças relevantes entre criar variável com let ou com var

// 1.Variável criada com var permite ser redeclarada
var livro = 'Força de vontade não funciona';
console.debug(livro);
var livro = 'O homem que calculava';
console.debug(livro);
/*
    *Isso é um PROBLEMA e não gera erro nenhum.
*/

//2. Let respeita o escopo de bloco, ou seja, tudo que estiver dentro de {........}.
//var só respeita escopo de função. Essa é a maior diferença entre elas.
const verdadeiro = true;

let number = 2;
var number2 = 2;

if(verdadeiro) {
    let number = 3;
    var number2 = 3;
    console.debug(number, number2); //3, 3

    if(verdadeiro) {
        let number = 4;
        var number2 = 4;
        console.debug(number, number2); //4, 4
    }
}

console.debug(number, number2); //2, 4

//3. Escopo de função
/*Os blocos da função são especiais, não são como blocos do if por exemplo. Não é possível
//chamar uma variável criada dentro da função fora desse bloco. Mas um função reconhece as variáveis
ao seu entorno (closers).*/
function printNumber() {
    var number2 = 2;
    console.log(number);
}
printNumber();

//4. Hosting com var
console.log(number3);
var number3 = 3; 

/*O esperado seria um erro de variável não definida, mas o JS encontra number e eleva(hosting)
dentro do arquivo a var, caso que não ocorre com let.*/

/*PS: O hosting acontece com as função declaradas com function podemos criá-la e usá-la ou usá-la e criá-la.*/