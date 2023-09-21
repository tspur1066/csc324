// This is a scratch file to test making a person in JavaScript.

class Person {
    constructor(name, age, desire) {
        this.name = name;
        this.age = age;
        this.desire = desire;
        this.greet(name);
    }
    greet() {
        console.log(`Hello, my name is ${this.name}!`)
    }
}


let aristotle = new Person("Aristotle");
aristotle.age = 2047;
aristotle.name = "Aristotle";
aristotle.desire = "The Good";
aristotle.greet();
console.log(aristotle.desire);
console.log(aristotle);

class test extends Person {
    eat() {
        console.log("Yum!");
    }
}

cowardly = new test("coward", 20, "food");
cowardly.eat;

