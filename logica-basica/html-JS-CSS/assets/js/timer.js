const clock = document.querySelector('.clock');
const buttonStart = document.querySelector('#start');
const buttonPause = document.querySelector('#pause');
const buttonContinue = document.querySelector('#continue');
const buttonClear = document.querySelector('#clear');
let second = 0;
let timer;

function getTimeFromSeconds (sec) {
    let dateSeconds = new Date(sec * 1000);
    return dateSeconds.toLocaleTimeString('pt-BR', {timeZone: 'UTC'});
}
 
function startClock () {     
    timer = setInterval(() => {            
        second ++;  
        clock.innerHTML = getTimeFromSeconds(second);      
    }, 1000);  
}

buttonStart.addEventListener('click', () => { 
    clock.classList.remove('pause');
    clock.classList.remove('continue');
    clearInterval(timer);    
    second = 0;  
    clock.innerHTML = '00:00:00';     
    startClock();       
});

buttonPause.addEventListener('click', () => {
    clock.classList.add('pause');
    clearInterval(timer);
});

buttonContinue.addEventListener('click', () => { 
    clock.classList.remove('pause');     
    clearInterval(timer); 
    startClock();
});

buttonClear.addEventListener('click', () => {
    clearInterval(timer);    
    second = 0;  
    clock.innerHTML = '00:00:00'; 
});















// let seconds = 0;
// let timer; 

// function getTimeFromSeconds(seconds) {
//     const date = new Date(seconds * 1000);
//     return date.toLocaleTimeString('pt-BR', {
//         hour12: false,
//         timeZone: 'GMT' // ou pode definir para UTC 
//     });
// }

// function startClock() {
//     timer = setInterval(function() {
//         seconds++;
//         clock.innerHTML = getTimeFromSeconds(seconds);      
//     }, 1000);
// }

// buttonStart.addEventListener('click', function() {
//     clearInterval(timer);  
//     startClock();    
// });

// buttonPause.addEventListener('click', function() {
//     clearInterval(timer);
// });

// buttonStop.addEventListener('click', function() {
//     clearInterval(timer);
//     clock.innerHTML = '00:00:00'; 
//     seconds = 0;

// });

// //Compactando os eventos com e.target
// //PS: target saberá exatamente o local de document está sendo clicado na página.
// document.addEventListener('click' , function(e) {
//     console.log(e.target); //vá a página e clique nos elementos da página e verá cada clique ser selecionado automaticamente
// })