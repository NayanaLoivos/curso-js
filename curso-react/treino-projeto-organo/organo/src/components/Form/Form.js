import TextField from '../TextField/TextField.js'
import "./Form.css";


function Form() {
  return (
    <section className="form">
      <form>
        <h2>Preencha os dados para criar o card</h2>
        <TextField label="Nome" placeholder="Digite seu nome" />
        <TextField label="Cargo" placeholder="Digite seu cargo" />
        <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
      </form>
    </section>
  );
}
export default Form;
