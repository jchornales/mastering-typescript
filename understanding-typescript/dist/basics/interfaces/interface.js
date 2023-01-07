"use strict";
class Person {
    constructor(params, age) {
        this.name = params;
        this.age = age;
    }
    greet(phrase) {
        console.log(`${phrase} ${this.name}`);
    }
}
let user1;
user1 = new Person("Justine", 25);
user1.greet("Hello there - I am");
console.log(user1);
//# sourceMappingURL=interface.js.map