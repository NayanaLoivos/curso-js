import TextField from '../TextField/TextField.js';
import DropdownList from '../DropdownList/DropdownList.js';
import "./Form.css";
import Button from '../Button/Button.js';


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
        <Button>
          Criar Card
        </Button>
      </form>
    </section>
  );
}
export default Form;
