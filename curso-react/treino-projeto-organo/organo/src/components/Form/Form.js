import TextField from '../TextField/TextField.js';
import DropdownList from '../DropdownList/DropdownList.js';
import "./Form.css";
import Button from '../Button/Button.js';
import { useState } from 'react';


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

  const [name, setNome] = useState('')
  const [jobRole, setJobRole] = useState('') 
  const [image, setImage] = useState('')

  function whenSaving(event) {
    event.preventDefault();
    console.log('Form foi submetido =>', name, jobRole, image)
    console.log(event.target.value)
  }

  return (
    <section className="form">
      <form onSubmit={whenSaving}>
        <h2>Preencha os dados para criar o card</h2>
        <TextField 
          mandatory={true} 
          label="Nome" 
          placeholder="Digite seu nome"
          valueInput={name}
          changed={valueInput => setNome(valueInput)} />
        <TextField 
          mandatory={true} 
          label="Cargo" 
          placeholder="Digite seu cargo"
          valueInput={jobRole}
          changed={valueInput => setJobRole(valueInput)} />
        <TextField 
          label="Imagem" 
          placeholder="Digite o endereço da imagem" 
          valueInput={image}
          changed={valueInput => setImage(valueInput)} />
        <DropdownList 
          mandatory={true} 
          label="Time" 
          items={team} />
        <Button>
          Criar Card
        </Button>
      </form>
    </section>
  );
}
export default Form;
