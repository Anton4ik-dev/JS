let obj = {}; // пустой объект
let capitals = {
    "Российская федерация": "Moscow",
    italy: "Rome",
    spain: "Madrid",
    china: "Beijing",
}

capitals.china = "Пекин";
capitals.america = "Washinghton";

delete capitals.italy;
// console.log(capitals);

let cntr = "spain";

// console.log(capitals["Российская федерация"]);
// console.log(capitals[cntr]);



let mazda = {
    model: "Mazda MX5",
    color: "coral",
    year: 1999,
    automat: false,
    user: {
        name: "Олег",
        rights: 25879634
    },
    benzin: "dt",
    showInfo: function() {
        return `У ${this.user.name} есть ${this.model} ${this.year} года цвета ${this.color} c ${this.automat ? "автоматической" : "механической"} коробкой передач`;
    }
}

// if (car.automat) {
//     car.automat = "автоматической";
// } else {
//     car.automat = "механической";
// }

console.log(mazda.showInfo());