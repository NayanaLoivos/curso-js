const inputTask = document.querySelector('#input-task');
const btnAddTask = document.querySelector('#btn-add-task');
const task = document.querySelector('.task');

//Capturar o evento de click
function clickEvent() {
    if(!inputTask.value) return;
    console.log(inputTask.value);
}

btnAddTask.addEventListener('click', clickEvent);