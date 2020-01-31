'use strict';

let week = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье'
];

let date = new Date();

let div = document.createElement('div');

let today = date.getDay() - 1;

let getDay = function(counter, type) {
    let day = document.createElement(type);
    day.innerText = week[counter];

    return day;
};

for (let counter = 0; counter < week.length; counter++) {
    let par = document.createElement('p');

    let day = week[counter];

    if (counter === 5 || counter === 6) {
        day = getDay(counter, 'em');
    } 
    
    if (counter === today) {
        day = getDay(counter, 'strong');
    }

    if (counter === today && counter === 5 || counter === 6) {
        let em = document.createElement('em');
        em.append(day);
        day = em;
    }

    par.append(day);

    div.append(par);
}

document.body.append(div);