const inputTask = document.querySelector('#input-task');
const btnAddTask = document.querySelector('#btn-add-task');
const task = document.querySelector('.task');

//cria li dinamicamente


//Captura evento de click da tecla 'enter' pressionado e exibindo no front


//Limpa e cria focus no input


//Criar tarefas front, append na tarefas e por fim limpa a tarefa


//Capturar o conteúdo do input ao click
function clickEvent() {
    if(!inputTask.value) return;
    return inputTask.value;   
}

btnAddTask.addEventListener('click', clickEvent);