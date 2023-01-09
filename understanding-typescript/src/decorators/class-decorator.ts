// decorator is a function that you apply to something for example a class.
function Logger(logString: string) {
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor);
    };
}

@Logger("Logging - Person")
class Persons {
    name = "Max";

    constructor() {
        console.log("Creating person object ..");
    }
}

const pers = new Persons();

console.log(pers);
