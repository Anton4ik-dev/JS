let subj = 'ворон', verb = 'сидел';
let n = Math.floor(Math.random() * 1000);
if (n % 100 < 11 || n % 100 > 14) {
if (n % 10 === 1) {
    subj += 'а';
    verb += 'а';
} else if (n % 10 >= 2 && n % 10 <=4) {
    subj += 'ы';
    verb += 'и';
} else if (n % 10 > 4 || n % 10 === 0) {
    verb += 'о';
} 
} else {
    verb += 'о';
}
console.log(`На ветке ${verb} ${n} ${subj}`);


const AGE = 15;
console.log(Math.PI);
console.log(Math.E);
/*
Math.sin(x)
Math.cos(x)
Math.ctg(x)
Math.round(x) - округлить до юлижайшего целого числа
Math.ceil(x) - округлить к ближайшему целому числу в большую сторону
Math.floor(x) - округлить к ближайшему целому числу в меньшую сторону
Math.pow(x, step) - возведение в степень x**step
Math.sqrt(x) - извлечь квадратный корень
Math.random() - получает случайное число в диапозоне от 0 до 1
*/
console.log(Math.ceil(Math.random() * 100));
console.log(Math.floor(Math.random() * 101));


/* 0 <= rand * 100 < 100 */