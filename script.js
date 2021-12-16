'use strict';

class First {
    constructor() {

    }
    hello() {
        console.log("Привет, я метод родителя");
    }
}

class Second extends First {
    constructor() {
        super();
        
    }
    hello() {
        console.log("А я наследуемый метод!");
    }
}
const say = new Second();
say.__proto__.__proto__.hello();
say.hello();