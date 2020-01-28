let num = 266219;
let numbers = num.toString().split('');

let composition = numbers.reduce(function(number, current) {
  return +number * +current;
});

console.log('Произведение чисел: ', composition);

let degree = composition ** 3;

console.log('3-я степень: ', degree);

console.log('Степень:', String(degree).substring(0, 2));