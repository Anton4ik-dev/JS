/*
    Функции 
*/
function alg(x = 5) {
    let y = 2 * x + 10;
    // console.log(x, y);
    return y;
}

let n = alg(2);
console.log(n);
// alg(10);
// alg();
// alg(5);

function getNumber(max = 101, min = 0) {
    return Math.floor(Math.random()* (max - min) + min);
}

console.log(getNumber(10));

function getColor() {
    let r = getNumber(256);
    let g = getNumber(256);
    let b = getNumber(256);
    return `rgb($r $g $b)`
}