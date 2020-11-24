// let a = {
//     x:20,
//     y:10,
//     moveTo: function(newX, newY) {
//         this.x = newX;
//         this.y = newY;
//     }
// }

// let b = {
//     x:15,
//     y:23,
//     moveTo: function(newX, newY) {
//         this.x = newX;
//         this.y = newY;
//     }
// }

// let c = {
//     x:30,
//     y:-22,
//     moveTo: function(newX, newY) {
//         this.x = newX;
//         this.y = newY;
//     }
// }

// let d = {
//     x:25,
//     y:12,
//     moveTo: function(newX, newY) {
//         this.x = newX;
//         this.y = newY;
//     }
// }

function Point(x, y) {
    this.x = x;
    this.y = y;
}
Point.prototype.moveTo = function(newX, newY) {
    this.x = newX;
    this.y = newY;
}
Point.prototype.toString = function() {
    return `(${this.x}; ${this.y})`
}
let A = new Point(12, 50);
let B = new Point(6, 14);
A.moveTo(10, 10);
console.log(A.toString());
console.log(B.toString());
