# QUAL A ESSÊNCIA DO REACT?
   Foi criado para ser reativo as mudanças de estado dos componentes, portanto, está sempre reagindo a um evento ou alguma alteração no estado.
   É basicamente uma biblioteca para escrever e trabalhar interface de usuário, permitindo a interação com o usuário mais fluida como uma app de celular.

# COMO CRIAR NOVO PROJETO REACT?
   'npx create-react-app nome-do-projeto'

# QUAL A DIFERENÇA DE 'npm' e 'npx'?
   'npm' é um pacote para rodar coisa no ambiente local.
   'npx' é um script node que roda de forma remota, não está muito vinculado ao ambiente local.

# QUAL A DIFERENÇA DE 'npm start' E DE QUANDO TRABLAHAMOS COM HTML E CSS?
   Quando estamos trabalhando com HTML, CSS nós trabalhamos com arquivos estáticos,
   ou seja, criamos o index.html, abrimos no navegador. No React a gente tem a base pronta e quando vamos trabalhar com o projeto o comando 'npm start' prepara um ambiente de desenvolvimento e já sobe a aplicação automaticamente no http://localhost:3000 onde já nos apresenta uma app pronta que nos orienta a 'Edit src/App.js' and save to reload (editar src/App.js, savar e recarregar a página).

# QUAL A DIFERENÇA ENTRE O DOM E OS COMPONENTES REACT?
   Ao invés de criarmos os elementos e usando métodos como querySelector para manipular o DOM e etc. Iremos trabalhar com componentes React no lugar. O React é sobre componentes!

# QUAL A ESTRUTURA BÁSICA DE UM COMPONENTE REACT?
   /components/Banner.js
   passo 0: criação de uma função
   ``` 
      function Banner() {

      }
      export default Banner
    
   ```
   passo 1: return com / sem parênteses 
   ```    
      function Banner() {
         //JSX
         return (

         )
      }
      export default Banner
   ```
   passo 2: inserindo imagem estática disponível da pasta public como exemplo
   ```
      function Banner() {
         return (
            <Image src="/images/banner.png" alt="main page banner"/>
         )
      }
      export default Banner   
   ```

      passo 3: Logo se queremos usar esse componente em alguma parte do projeto, portanto, fazer a importação do arquivo e chamar o componente
   ```
      import Banner from "./components/Banner/Banner.js";

      <Banner />
   ``` 
# O QUE É JSX?
   É a maneira como o React trabalha com a parte visual de um projeto. O JSX parece React porém não é, o que o React vai fazer por debaixo dos panos é entender o JSX e realizar um apend no DOM. Em outras palavras JSX é como o React o lê e o transforma em elementos do DOM.

# COMO ESTILIZAR O COMPONENTE?
   /components/Banner/Banner.css
      passo 0: escrevendo estilo
   ```
      .banner {
      background-color: #6278f7;
      text-align: center;    
      }

      .banner img {
         max-width: 100%;
      }
   ```
      
   /components/Banner/Banner.js
      passo 1: importando o estilo
   ```
      import './Banner.css'
      function Banner() {
         return(
            <header className="banner">
                  <img src="/images/banner.png" alt="main page banner"/>
            </header>
         )
      }
      export default Banner
   ```

# O QUE DEVEMOS REMOVER PARA COMEÇAR A TRABALHA COM NOSSO PROJETO?
   -Todo o código do App.js criado pelo React como exemplo;
   -App.css;
   -logo.svg;

# PARA FINS DE CONHECIMENTO
   index.js é o bootstrap da aplicação, ou seja, é o ponto de entrada.

# QUAL A ESTRUTURA BÁSICA DE UM COMPONENTE REACT QUE RECEBE PARÂMETRO?
   /components/TextField/TextField.js
   ```
      function TextField(props) {    
      return(
         <div className="text-field">      
               <label>{props.label}</label>
         <input placeholder={props.placeholder} />
         </div>
      )
      }
      export default TextField
   ```

# COMO RETORNAR UMA LISTA EM REACT?
   Usamos o map podemos retornar elementos dentro de uma lista sem alterar a lista original, e a renderizamos em tela.
   /components/DropdownList/DropdownList.js
   ```
      function DropdownList(props) {
         return(
            <div>
                  <label>{props.label}</label>
                  <select>
                     {props.itens.map(item => <option key={item}>{item}</option>)}
                  </select>
            </div>
         )
      }
      export default DropdownList   

      PS: "Each child in a list should have a unique "key" prop." 
          Quando recebemos esse warning temos em conta que se trabalhamos com uma lista, o React precisa de uma chave única para saber quando precisa renderizar um item ou não, é baseado na key que o React mantém o controle sobre essa renderização.
   ```
   E renderizamos os elementos todos os formulário em Form.

   /components/Form/Form.js
   ```
      import TextField from '../TextField/TextField.js';
      import DropdownList from '../DropdownList/DropdownList.js';
      import "./Form.css";

      function Form() {
      const team = [
         'Programação',
         'Front-End',
         'Data Science',
         'Devops',
         'UX e Design',
         'Mobile',
         'Inovação e Gestão'
      ]

      return (
         <section className="form">
            <form>
            <h2>Preencha os dados para criar o card</h2>
            <TextField label="Nome" placeholder="Digite seu nome" />
            <TextField label="Cargo" placeholder="Digite seu cargo" />
            <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
            <DropdownList label="Time" items={team} />
            </form>
         </section>
      );
      }
      export default Form;
   ```
# COMO DAR COMPORTAMENTO PARA NOSSOS COMPONENTES REACT?
   Essa manipulação, costumeiramente chamada de 'Data Biding' quer dizer que queremos linkar o valor de input com uma variável dentro do nosso componente de forma que se a variável muda o input muda e vice-versa.

