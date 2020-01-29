'use strict';

let lang = 'ru';

let days = {
  ru: 'Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье',
  en: 'Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday'
};

let messages = {
  ru: 'Дни недели: ',
  en: 'Days of week'
};

if (lang == 'ru') {
  console.log('Дни недели: ', days[lang]);
}

if (lang == 'en') {
  console.log('Days of week: ', days[lang]);
}

switch (lang) {
  case 'ru':
    console.log('Дни недели: ', days[lang]);
    break;
  case 'en':
    console.log('Days of week: ', days[lang]);
}

console.log(messages[lang] + ': ', days[lang]);