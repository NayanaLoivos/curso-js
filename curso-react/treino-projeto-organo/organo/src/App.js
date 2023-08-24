import Banner from './components/Banner/Banner.js';
import TextField from './components/TextField/TextField.js';

function App() {
  return (
    <div>
      <Banner />      
      <TextField label="Nome" placeholder="Digite seu nome"/>
      <TextField label="Cargo" placeholder="Digite seu cargo" />
      <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
    </div>
  );
}

export default App;
