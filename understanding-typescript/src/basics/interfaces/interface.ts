// Interface with Class

interface Greetable {
    name: string;
    greet(phrase: string): void;
}

class Person implements Greetable {
    name: string;
    age: number;

    constructor(params: string, age: number) {
        this.name = params;
        this.age = age;
    }

    greet(phrase: string): void {
        console.log(`${phrase} ${this.name}`);
    }
}

let user1: Person;

user1 = new Person("Justine", 25);

user1.greet("Hello there - I am");
console.log(user1);

//* Interfaces are good to use with classes unlike types.
