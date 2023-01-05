class Department {
    // firstName: string;
    // private employees: string[] = []; //* private means 'employees' can only be access by method inside class
    protected employees: string[] = []; //* protected means 'employees' can be access through inheritance

    constructor(private readonly id: string, public firstName: string) {
        // this.firstName = props;
    }

    describe(this: Department) {
        console.log(`Department (${this.id}):  ${this.firstName}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department("d1", "Accounting");

// const accountingCopy = { firstName: "Justine", describe: accounting.describe };
// accountingCopy.describe();

accounting.addEmployee("Max");
accounting.addEmployee("Jenny");

// this.employees[2] = "Anna " //* this is an example where trying to access 'employees' outside class won't work anymore because of protected or private.

accounting.describe();
accounting.printEmployeeInformation();

// Demonstration of Inheritance
class ITDepartment extends Department {
    //* 'extends' it will inherit the Department properties
    constructor(id: string, public admins: string[]) {
        super(id, "IT"); //* it will inherit all the methos and properties of the extended class

        this.admins = admins;
    }
    //*  we can add new features that will only available on ITDepartment
    addNewEmployee(name: string) {
        this.employees.push(name);
    }
}

const IT = new ITDepartment("d2", ["Max"]);
IT.describe();
IT.addEmployee("Justine");
console.log(IT);
