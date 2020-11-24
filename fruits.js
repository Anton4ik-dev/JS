/*
    Фруктовый сад
    Дано 1 дерево (яблоня)
    Яблоня каждый год даёт 200 яблок
    tree = {
        name: "Яблоня",
        fruits: [{d:6, w:70, deffect:false}, {d:4, w:50, deffect:true}, ...]
    }


    1) Создать класс с фруктом
        Фрукт имеет диаметр от 4см до 10см
        Фрукт имеет вес 48гр до 120гр (посчитать формулу)
        Фрукт может иметь деффект (20%) true
    2) Наполнить яблоню массивом фруктов в зависимомти от их парметров
*/
function Fruits() {
        this.diameter = d;
        this.weight = +(this.diameter * 12).toFixed(2);
        this.deffect = f;
    }

let tree = {
    name: "Яблоня",
    fruitCnt: 200,
    fruits: [],
    showStat: function(cost) {
        let weight = 0;
        let cnt = 0;
        for (let i = 0; i < this.fruitCnt; i++) {
            if (!this.fruits[i].deffect) {
                cnt++;
                weight += this.fruits[i].weight;
            }
        }
        weight =+(weight/1000).toFixed(2)
        return `Можно продать ${cnt} яблок весом ${weight} кг за ${(weight*cost).toFixed(2)}`;
    },
    getFruits: function() {
        const getNumber = function(max = 11, min = 0) {
            return Math.random() * (max - min) + min;
        }
        let percent = 20;
        let perArr = [];
        let n = 0;
        while (n < 100) {
            if (n < percent) {
                perArr.push(true);
            } else {
                perArr.push(false);
            }
            n++;
        }
        for (let i = 0; i < this.fruitCnt; i++) {
            let fr = new Fruits(+getNumber(10, 4).toFixed(2), perArr[Math.floor(getNumber(perArr.length))]);
            this.fruits.push(fr);
        }
    }
}

console.log(tree.fruits);
console.log(tree.showStat(87));
