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
    
    if (counter === (date.getDay() - 1)) {
        day = getDay(counter, 'strong');
    }

    par.append(day);

    div.append(par);
}

document.body.append(div);