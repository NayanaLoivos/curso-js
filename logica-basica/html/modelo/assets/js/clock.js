function app() {
    const clock = document.querySelector('#clock');
    const week = document.querySelector('#week');

    function getClock() {
        const date = new Date();
        const hours = zeroLeft(date.getHours().toString());
        const min = zeroLeft(date.getMinutes().toString());
        const sec = zeroLeft(date.getSeconds().toString());        

        renderClock(hours, min, sec);    
    }

    function getDate() {
        const daysWeek = new Array('domingo','segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado');
        const mounthsYear = new Array('janeiro', 'fevereiro', 'Março', 'abril', 'maio', 'Junho', 'Julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro');
        
        const date = new Date();
        const day = date.getDay().toString();
        const dayNumber = date.getDate().toString();
        const mounth = date.getMonth().toString();
        const year = date.getFullYear().toString();        

        renderDate(daysWeek, day, dayNumber, mounthsYear, mounth,  year);

    }

    function renderClock(hour, min, sec) {
        clock.textContent = hour + ':' + min + ':' + sec;
        
    }   
    function renderDate(daysWeek, day, dayNumber, mounthsYear, mounth, year) {
        week.textContent = daysWeek[day] + ', ' + dayNumber + ' de ' + mounthsYear[mounth] + ' de ' + year;
    }

    function zeroLeft(str) {
        return str >= 10 ? str : `0${str}`;
    }

    getClock();
    getDate();    
}

setInterval(app, 1000);

//Caso queria criar automaticamente o date e simplificar o código:
const clock = document.querySelector('#clock2');
const date = new Date();

clock.innerHTML = date.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'});
                  //date.toLocalDateString('idioma', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});