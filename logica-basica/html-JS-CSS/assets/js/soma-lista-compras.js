//pegando a lista
const lista = document.querySelector('.data-lista-produto');

//criando o array de produtos
const valores = [];

//Pegando o botão
const botao = document.querySelector('.principal__botao');
botao.addEventListener('click', ()=> {    
    //pegando os inputs nome e valores dos produtos
    const inputNome = document.querySelector('.principal__area-de-inputs__nome');
    const nome = inputNome.value;    
    const inputValor = document.querySelector('.principal__area-de-inputs__valor');
    const valor = Number(inputValor.value); 

    criaProduto(nome, valor);

     //criando objeto
     valores.push({
        nome: nome,
        valor: valor
    });
    console.log(valores);
   
    //Somando valores
    var somaValores = 0;
    for (let i = 0; i < valores.length; i++) {
        somaValores += valores[i].valor;        
    }
  
    const totalCompras = document.querySelector('.principal__total');
    totalCompras.innerHTML = `Total das compras R$: ${somaValores.toFixed(2)}`;     
});

//função que cria o produto via JS
function criaProduto(nome, valor) {   
    //Pegando o pai das li
    const listaProdutos = document.querySelector('.principal__lista_produto');

    //criando li e adicionando a classe
    const novoNomeProduto = document.createElement('li');
    const novoValorDoProduto = document.createElement('li');
    novoNomeProduto.classList.add("principal__lista__produto__nome");
    novoValorDoProduto.classList.add("principal__lista__produto__valor");

    //add valor a li
    novoNomeProduto.innerHTML += nome;    
    novoValorDoProduto.innerHTML = valor;
   
    //colocando o nome e o valor dentro do elemento pai ul de class principal__lista_produto
    listaProdutos.appendChild(novoNomeProduto);
    listaProdutos.appendChild(novoValorDoProduto);
    listaProdutos.classList.add("principal__lista");   
};
