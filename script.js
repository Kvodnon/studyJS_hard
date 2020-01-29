'use strict';

let noticeUser = function(variableType) {
  if (!isNaN(variableType)) {
    return false;
  }

  console.log(variableType.trim());

  if (variableType.length > 30) {
    console.log(variableType.substring(0, 30) + '...');
  }

  return true;
}

if (!noticeUser(prompt('Введите строку'))) {
  alert('Вы передали не строку.');
}