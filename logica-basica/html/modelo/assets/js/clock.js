function app() {
    const clock = document.querySelector('#clock');
    const week = document.querySelector('#week');

    function getClock() {
        const date = new Date();
        const hours = date.getHours().toString();
        const min = date.getMinutes().toString();
        const sec = date.getSeconds().toString();        

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

    getClock();
    getDate();

    /* Caso queria pegar automaticamente o date
    new Date().toLocalDateString('idioma', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});*/
}

setInterval(app, 1000);