// const getWord = function(arr) {
//     return arr[Math.floor(Math.random() * arr.length)]
// }

// console.log(getWord());

const getNumber = max => Math.ceil(Math.random() * max)

const changeChar = function(char) {
    switch(char) {
        case 1:
            char = "♥";
            break;
        case 2:
            char = "💗";
            break;
        case 3:
            char = "♨";
            break;
        case 4:
            char = "☕";
            break;
        case 5:
            char = "💚";
            break;
        case 6:
            char = "💑";
            break;
    }
    return char;
}

const game = function(money, bet) {
    let coint = 0;
    while(money >= 100) {
    let slot1 = getNumber(7),
        slot2 = getNumber(7),
        slot3 = getNumber(7);
        console.log(slot1, changeChar(slot1));
    money -= bet;
    let info = "";
    if (slot1 === slot2 && slot1 === slot3) {
        coint += 2;
        money += bet * 2
        info = "Большой куш!"
    } else if (slot1 === slot2 || slot1 === slot3 || slot2 === slot3) {
        coint += 1;
        money += bet * 1.5;
        info = "Вы выйграли";
    } else {
        info = "Ставка не сыграла";
    }
    console.log(`${changeChar(slot1)} - ${slot2} - ${slot3}: ${info}, ваш счёт - ${coint}`);
    }
}
game(300, 100)