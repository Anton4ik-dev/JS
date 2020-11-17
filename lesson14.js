/*
    Array - массив
    Массив - упорядоченная последовательность чего-угодно
    [] - пустой массив
    ["Печенька", 2, "Тралала", 0, 1, true, undefined, 23];

    arr.length => длина массива (количество элементов массива)
    arr[0] => Обращение к первому элементу массива
    arr[arr.length - 1] => Обращение к последнему индексу массива
*/
let ivan = ["Печенька", 2, "Тралала", 0, 1, true, undefined, 23];
console.log(ivan.length);
console.log(ivan[3]);
ivan[13] = "Igor";
console.log(ivan[10]);

let numbers = [];
/* Наполнить массив 100 рандомными числами (1-100) и посчитать их сумму */
function getNumber(max, min){
    return Math.floor(Math.random()*(max-min)+min);
}

let i = 0;
while (i<100){
    numbers[i] = getNumber(101,1);
    i++
}
console.log(numbers);
let arrSum = 0;
for (let i = 0, cnt = numbers.length; i < cnt; i++) {
    arrSum += numbers[i];
}
console.log(arrSum);

let fruits = [
    "Банан",
    "Манго",
    "Киви",
    "Яблоко",
    "Ананас",
    "Мандарин",
    "Гоава"
];

/*
    Методы массива
    .push(el) - добавить элемент в конец массива
    .unshift(el) - добвить элемент в начало массива
    .pop(el) - забрать последний элемент массива
    .shift(el) - забрать первый элемент массива
*/
fruits.push("Груша");
fruits.push("Персик");
fruits.unshift("Абрикос");
let last = fruits.pop();
console.log(fruits, last);

/*
    Создать функцию, которая возвращает массив из простых чисел от 1 до n - рандомное число
*/

