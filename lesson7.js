/*
  while - цикл
*/

let apples = 5;
let people = 15;

/*while (apples < people) {
    apples = apples + 1;
    console.log("Купить ещё одно яблоко");
}

console.log("Все получили по 1-ому яблоку");*/

let age = Math.floor(Math.random()* 18), present = 0, piggie = 0, oldment = 18;
while (age < oldment) {
    present += 10;
    piggie += present;
    age++;
    console.log(`Клаве исполнилось ${age} лет! Папа подарил Клаве ${present}$. Теперь у Клавы есть ${piggie}`);
    
}
console.log(`Всего Клава накопила ${piggie}$`);
