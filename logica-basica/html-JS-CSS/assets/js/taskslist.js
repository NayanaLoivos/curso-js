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
    saveTasks();
    clearInput();
}

//Capturar o conteúdo do input ao click
function clickEvent() {
    if(!inputTask.value) return;
    createTask();
    return inputTask.value;   
}

//Apagar o pai da task ao clique no botão que contém a classe 'deleteButton' e do local storage          
function removeTask(e) {
    const element = e.target;
    if(element.classList.contains('deleteButton')) {
        element.parentElement.remove();
        saveTasks();
    }
}

//Capturar o outerText da li, inserir as tasks no formato JSON e converter em string e salvar no local storage
function saveTasks() {
    let tasks = task.querySelectorAll('li');
    const arrTasks = [];

    for(let tk of tasks) {
        let textTask = tk.innerText;  
        const cleanTextTask = textTask.replace('apagar', ''); 
        arrTasks.push(cleanTextTask);
    }
    const tasksJson = JSON.stringify(arrTasks);
    localStorage.setItem('tasks', tasksJson);
}   

//Ler as tasks gravadas no local storage, converter a um objeto novamente e renderizar na li
function renderLocalStorageTasks() {
    const tasksLocalStorage = localStorage.getItem('tasks');  
    const listTasks = JSON.parse(tasksLocalStorage);    
    for(let tk of listTasks) {        
        const li = createLi();
        li. innerHTML = tk;
        task.appendChild(li);    
        createDeleteButton(li);
    }
}
renderLocalStorageTasks();
btnAddTask.addEventListener('click', clickEvent);
inputTask.addEventListener('keypress', keyPressEnter);
document.addEventListener('click', removeTask);