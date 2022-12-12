"use strict";
console.log('Hello TypeScript');
class Department {
    constructor(name) {
        this.name = name;
    }
}
const newDepartment = new Department('Accounting');
console.log(newDepartment.name);
