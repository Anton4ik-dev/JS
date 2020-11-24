// Есть точка

class Point {
    constructor(x,y){
    this.x = x;
    this.y = y;
    }
    moveX(newX){
        this.x = newX;
    }
    moveY(newY) {
        this.y = newY;
    }
    toString() {
        return `(${this.x};${this.y})`;
    }
}

class Point3D extends Point{
    constructor(x,y,z) {
        super(x,y); // Обращение к конструктуру родителя
        this.z = z;
    }
    toString() {
        return `(${this.x};${this.y};${this.z})`;
    }
    moveZ(newZ) {
        this.z = newZ;
    }
}
let point = new Point(2,4);
point.moveX(5);
point.moveY(10);
console.log(point.toString());

let p3d = new Point3D(0,1,2);
p3d.moveX(6);
p3d.moveY(8);
p3d.moveZ(10);
console.log(p3d.toString());

class Rectangle {
    constructor(a,b){
        this.a = a;
        this.b = b;
        this.text = "Прямоугольник";
    }
    getPerimetr(){
        return this.a * 2 + this.b * 2;
    }
    getArea() {
        return this.a * this.b;
    }
    showInfo(){
        return `${this.text} со сторонами ${this.a}x${this.b} имеет площадь - ${this.getArea()} и периметр - ${this.getPerimetr()}`
    }
}
class Square extends Rectangle{
    constructor(a){
        super(a,a);
        this.text = "Квадрат"
    }
}
let rec = new Rectangle(7,5);
let sq = new Square(5);
console.log(rec.showInfo());
console.log(sq.showInfo());









