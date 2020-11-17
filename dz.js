let crow = Math.floor (Math.random() * 1000);
let smth = crow % 10;
let help = crow % 100;
if (help >= 11 && help <= 14) {
console.log(`На ветке сидело ${crow} ворон`);
} else if (smth === 1) {
console.log(`На ветке сидела ${crow} ворона`);
} else if (smth >= 2 && smth <= 4) {
console.log(`На ветке сидело ${crow} вороны`);
} else if (smth > 4 || smth === 0) {
console.log(`На ветке сидело ${crow} ворон`);
}