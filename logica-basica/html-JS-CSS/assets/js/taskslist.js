const inputTask = document.querySelector('#input-task');
const btnAddTask = document.querySelector('#btn-add-task');
const task = document.querySelector('.task');

//cria li dinamicamente
function createLi() {
    const li = document.createElement('li');    
    return li;
}

//Captura evento de click da tecla 'enter' pressionado e exibindo no front as tasks 
function keyPressEnter(event) {    
    if(event.keyCode === 13) {        
        btnAddTask.click();       
    }
}

//Limpa e o input
function clearInput() {
    inputTask.value = '';       

}

//criar botão apagar ao criar uma task, append no botão dentro da li da task
function createDeleteButton(li) {
    const deleteTask = document.createElement('button');
    deleteTask.setAttribute('class', 'deleteButton');    
    deleteTask.innerHTML = 'apagar';
    li.appendChild(deleteTask);
}

//Criar tarefas front, append na tarefas e por fim limpa a tarefa do input
function createTask() {
    const li = createLi();
    li.innerHTML = inputTask.value;
    task.appendChild(li);    
    createDeleteButton(li);
    clearInput();
}

//Capturar o conteúdo do input ao click
function clickEvent() {
    if(!inputTask.value) return;
    createTask();
    return inputTask.value;   
}

//Apagar o pai da task ao clique no botão que contém a classe 'deleteButton'
function removeTask(e) {
    const element = e.target;
    if(element.classList.contains('deleteButton')) {
        element.parentElement.remove();
    }
}

btnAddTask.addEventListener('click', clickEvent);
inputTask.addEventListener('keypress', keyPressEnter);
document.addEventListener('click', removeTask);