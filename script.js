'use strict';

let date = new Date();

function declOfNum(number, titles) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

let addZero = function(number) {
    number += '';

    if (number.length === 1) {
        number = '0' + number;
    }

    return number;
}

// use:
// declOfNum(count, ['найдена', 'найдено', 'найдены']);

let options = {
    era: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};

let month = date.toLocaleString("ru", {
        weekday: 'long'
    }) + ',',
    year = date.toLocaleString("ru", {
        month: 'long',
        day: 'numeric',
    }) + ' года,',
    hours = date.toLocaleString("ru", {
        hour: 'numeric'
    }),
    minutes = date.toLocaleString("ru", {
        minute: 'numeric'
    }),
    seconds = date.toLocaleString("ru", {
        second: 'numeric'
    });

month = month.charAt(0).toUpperCase() + month.substring(1);
hours += ' ' + declOfNum(hours, ['час', 'часа', 'часов']);
minutes += ' ' + declOfNum(minutes, ['минута', 'минуты', 'минут']);
seconds += ' ' + declOfNum(seconds, ['секунда', 'секунды', 'секунд']);

// 2
console.log('Сегодня', month, year, hours, minutes, seconds);

let partOne = [addZero(date.getDate()), addZero(date.getMonth()), date.getFullYear()],
    partTwo = [addZero(date.getHours()), addZero(date.getMinutes()), addZero(date.getSeconds())];

// 3
console.log(partOne.join('.'), '-',  partTwo.join(':'));

setInterval(function() {
    console.log(new Date());
}, 1000);