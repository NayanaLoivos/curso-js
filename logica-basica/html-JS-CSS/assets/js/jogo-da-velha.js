const cells = document.querySelectorAll('[data-cell]');
const board = document.querySelector('[data-board]');

let character;

const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

/*Insere um classe inicial aleatória no board*/
function startPlayerRandom() {
    const PlayerRandom = Math.floor(Math.random() * 2);
    if(PlayerRandom === 1) {
         board.classList.add('circle');
    } else {
         board.classList.add('x');
    }
 }

/*Escuta evento de click em qualquer célula*/
 function startGame() {    
    for(const cell of cells) {
    cell.addEventListener('click', handleClick, {once: true});
    }
 }

/*Alterna personagens no passar do mouse (hover) no board*/
function charactersOnHover() {    
    board.classList.remove('circle');
    board.classList.remove('x');
       
    if(character) {
        board.classList.add('circle');
    } else {
        board.classList.add('x');
    }
}

/*Capturar a célula clicada, adiciona a class x porque character incia com valor false que muda a cada evento de click*/
function handleClick(e) {    

    const cell = e.target;
    const classAdd = character ? 'circle' : 'x';
    cell.classList.add(classAdd);

    character = !character; 

    charactersOnHover();       
}

/*Verificar por vitória*/


startPlayerRandom();
startGame();