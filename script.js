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
        return super.hello();
    }
    hello() {
        console.log("А я наследуемый метод!");
    }
}
const say = new Second();
say.hello();