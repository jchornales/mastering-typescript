type Admin = {
    name: string;
    privilages: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const employee1: ElevatedEmployee = {
    name: "Justine",
    privilages: ["create-server"],
    startDate: new Date(),
};

// * Example of intersection types can be used with any type combination.
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function addNum(n1: Combinable, n2: Combinable) {
    // * demonstration of type guard 'typeof' to avoid error
    if (typeof n1 === "string" || typeof n2 === "string") {
        return n1.toString() + n2.toString();
    }

    return n1 + n2;
}

// * demonstration of 'in' type guard
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log("Name:" + emp.name);

    if ("privileges" in emp) {
        // 'in' is used to check if 'privileges' existed in 'emp'
        console.log("Privilages: " + emp.privileges);
    }

    if ("startDate" in emp) {
        console.log("Privilages: " + emp.startDate);
    }
}

printEmployeeInformation(employee1);

//
//
// * demonstration of 'instancesof' type guard
class Car {
    drive() {
        console.log("Driving...");
    }
}

class Truck {
    drive() {
        console.log("Driving a truck...");
    }

    loadCargo(amount: number) {
        console.log("Loading cargo ..." + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        // instanceof is commonly used as a way of narrowing types using their constructor function
        vehicle.loadCargo(1000);
    }
}

// typeguards are used to check if a certain property or method exist

// example where 'instanceOf' cannot be used because interface are dumped in runtime and doesn't exist in javascript
// discriminated union best use in dealing with union types and objects it works on interface
interface Bird {
    type: "bird";
    flyingSpeed: number;
}
interface Horse {
    type: "horse";
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed: number;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }

    console.log("Moving at a Speed" + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 200 });
