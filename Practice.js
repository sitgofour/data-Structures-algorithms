class Practice {
    constructor(name, age, favColor) {
        this.name = name;
        this.age = age;
        this.favColor = favColor;
    }


    getColor() {
        return this.favColor;
    }


    changeColor(color) {
        this.favColor = color;
        console.log("your new favorite color is:" + this.favColor);
    }
    

}


let myPractice = new Practice(evan, 32, blue);


class Fruit {
    constructor(type, color, weigth) {
        this.type = type;
        this.color = color;
        this.weight = weigth;
    }
}