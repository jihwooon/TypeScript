"use strict";
console.log('Hello TypeScript');
class Department {
    constructor(name) {
        this.name = 'Deault';
        this.name = name;
    }
    describe() {
        return this.name;
    }
}
const newDepartment = new Department('Accounting');
console.log(newDepartment.name);
console.log(newDepartment.describe());
2;
const accountingCopy = { name: 'DUMMY', describe: newDepartment.describe() };
console.log(accountingCopy);
