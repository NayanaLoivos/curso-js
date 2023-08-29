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

  function whenSaving(event) {
    event.preventDefault();
    console.log('botão acionado, go event!')
  }

  return (
    <section className="form">
      <form onSubmit={whenSaving}>
        <h2>Preencha os dados para criar o card</h2>
        <TextField mandatory={true} label="Nome" placeholder="Digite seu nome" />
        <TextField mandatory={true} label="Cargo" placeholder="Digite seu cargo" />
        <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
        <DropdownList mandatory={true} label="Time" items={team} />
        <Button>
          Criar Card
        </Button>
      </form>
    </section>
  );
}
export default Form;
