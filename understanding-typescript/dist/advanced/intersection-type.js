"use strict";
const employee1 = {
    name: "Justine",
    privilages: ["create-server"],
    startDate: new Date(),
};
function addNum(n1, n2) {
    if (typeof n1 === "string" || typeof n2 === "string") {
        return n1.toString() + n2.toString();
    }
    return n1 + n2;
}
function printEmployeeInformation(emp) {
    console.log("Name:" + emp.name);
    if ("privileges" in emp) {
        console.log("Privilages: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Privilages: " + emp.startDate);
    }
}
printEmployeeInformation(employee1);
class Car {
    drive() {
        console.log("Driving...");
    }
}
class Truck {
    drive() {
        console.log("Driving a truck...");
    }
    loadCargo(amount) {
        console.log("Loading cargo ..." + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
function moveAnimal(animal) {
    let speed;
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
//# sourceMappingURL=intersection-type.js.map