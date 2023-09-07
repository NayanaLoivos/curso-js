//VARIÁVEL ARGUMENTS DA FUNCTION
    //A função definida com a palavra function tem uma variável especial
    //chamada de arguments, a qual sustenta todo os argumentos enviados.
    //Isso quer dizer que se não criamos a função com parâmetro e enviamos parâmetros 
    //a serem recebidos pela função, esses argumentos serão recebidos por arguments
    //e guardados em formato chave e valor.
    function varArguments() {
        console.log('oie');
        console.log(arguments);
    }
    varArguments('Sou recebido por arguments');

    function varArguments2() {
        let total = 0;
        for(let argument of arguments) {
            total += argument;
        }
        console.log(total);
    }
    varArguments2(1,2,3,4,5,6,7);

    //Ainda que fosse inserido parâmetros, mas não suficiente para todos os argumentos recebidos,
    //a variável arguments constinua guardando todos os dados.
    function varArguments3(a, b, c) {
        let total = 0;
        for(let argument of arguments) {
            total += argument;
        }
        console.log(total, arguments);
    }
    varArguments3(1,2,3,4,5,6,7);

    //PS: Dentro do contexto apresentado, a maioria das linguagens de programação gerariam um erro
          //referente a isso, mas não é o caso do JS.
    //O que sabemos até esse momento, sabemos que podemos ou não enviar argumentos para a função,
    //e podemos ou não criar os parâmetros. Sabemos também que arguments sustenta todos os argumentos
    //enviados somente para funções criadas com a palavra fuction, ou seja, em arrow function não funciona.

