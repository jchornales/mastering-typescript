"use strict";
class Department {
    constructor(id, firstName) {
        this.id = id;
        this.firstName = firstName;
        this.employees = [];
    }
    describe() {
        console.log(`Department (${this.id}):  ${this.firstName}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department("d1", "Accounting");
accounting.addEmployee("Max");
accounting.addEmployee("Jenny");
accounting.describe();
accounting.printEmployeeInformation();
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
        this.admins = admins;
    }
    addNewEmployee(name) {
        this.employees.push(name);
    }
}
const IT = new ITDepartment("d2", ["Max"]);
IT.describe();
IT.addEmployee("Justine");
console.log(IT);
//# sourceMappingURL=classes.js.map