const inputTask = document.querySelector('#input-task');
const btnAddTask = document.querySelector('#btn-add-task');
const task = document.querySelector('.task');

//cria li dinamicamente
function createLi() {
    const li = document.createElement('li');    
    return li;
}

//Captura evento de click da tecla 'enter' pressionado e exibindo no front


//Limpa e cria focus no input


//Criar tarefas front, append na tarefas e por fim limpa a tarefa do input
function createTask() {
    const li = createLi();
    li.innerHTML = inputTask.value;
    task.appendChild(li);    
}

//Capturar o conteúdo do input ao click
function clickEvent() {
    if(!inputTask.value) return;
    createTask();
    return inputTask.value;   
}

btnAddTask.addEventListener('click', clickEvent);