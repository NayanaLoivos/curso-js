//Algumas formas que temos para trabalhar com funções em JS.
    //FUNCTION DECLARATION (decalração de função)
        //É uma function hoisting.
        //Apenas nessa configuração de função é que ocorre o hoisting.
        //O hoisting é elevar as declarações de funções e variáveis declaradas com
        //a palavra var para o topo do arquivo em JS. Isso quer dizer que podemos usá-la
        //tanto depois     
        function after() {
            console.log('Fui chamada após a minha declaração!');
        };
        after();
        //quanto antes de declará-la.
        before();
        function before() {
            console.log('Fui chamada antes a minha declaração!')
        };

    //FUNCTION EXPRESSION
        //Algo interessante é destacar que as funções são objetos de primeira classe em JS (first-class-object),
        //isso quer dizer que podemos tratar as funções como dados, a esse tratamento damos o nome de function expression.
        const aData = function () {
            console.log('Sou um dado!');
        };
        //Estamos atribuindo uma função como resultado de uma constante, em outras palavras, estamos
        //falando que uma constante recebe uma função como dado. E assim podemos executá-la como uma função.
        aData();
        //Quando a variável recebe uma função, ela passa a ser uma função e por isso conseguimos invocá-la.
        //Isso é muito poderoso porque podemos jogar essa variável como parâmetro de outra função e fazer essa
        //outra função executar essa função se precisarmos.
        function execFunction(receiveFunction) {
            console.log('Fui recebida e executada dentro de outra função:')
            receiveFunction();        
        };
        execFunction(aData);

    //ARROW FUNCTION
        //É uma function expression encurtada.
        const arrowFunction = () => {
            console.log('Sou uma arrow function!')
        }
        arrowFunction();
        //PS:É uma função normal como qualquer outra em JS com a única diferença está sobre o comportamento do 'this'.
        //que iremos ver mais adiante.

    //PS: Na realidade todas as funções acima apresentadas, são tratadas como objectos de primeira class pelo JS. 
        //Esse conceito de uma função receber outra como dado foi apresentado na função setInterval
        setInterval(function () {
            console.log('Sou a setInterval');
        }, 1000);
        //E se recebermos outra função dentro dela
        setInterval(aData, 1000);

    //OBJETO QUE RECEBE UMA FUNÇÃO
        //Forma mais tradicional
        const obj = {
            log: function () {
                console.log('Sou uma função dentro do objeto!');
            }
        };
        obj.log();

        //Outra forma
        const obj2 = {
            log() {
                console.log('Sou uma função dentro do objeto2!');
            }
        };
        obj2.log();
