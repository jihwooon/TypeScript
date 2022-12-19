"use strict";
console.log('Hello TypeScript');
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        return `${this.id}` + this.name;
    }
    addEmployee(employees) {
        this.employees.push(employees);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        return this.employees;
    }
}
const newDepartment = new Department('1', 'Accounting');
newDepartment.addEmployee('Max');
newDepartment.addEmployee('Manu');
console.log(newDepartment.describe());
console.log(newDepartment.printEmployeeInformation());
