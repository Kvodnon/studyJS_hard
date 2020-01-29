'use strict';

let arr = [526, 986, 5316, 448, 574, 829, 235];

for (let i = 0; i < arr.length; i++) {
  let stack = [];
  stack = (arr[i] + '').split('');

  if (stack[0] === '2' || stack[0] === '4') {
    console.log(arr[i]);
  }
}

// Определяем функцию которая проверяет натурайное ли число или нет
function isNatural(number) {
    for (var i = 2; i <= number/2; i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

// Определяем базовое число
var currentNumber = 2;

//Продолжаем цикл до тех пор пока количество требуемых для отображения чисел не достигнет нуля  
while(currentNumber < 101) {
    if(isNatural(currentNumber)) {
        console.log(currentNumber);
    } 
    currentNumber++;
}
