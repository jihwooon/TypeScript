console.log('Hello TypeScript');

class Department {
    name: string;
    private employees: string[] = [];

    constructor(name: string) {
        this.name = name;
    }

    describe() {
        return this.name;
    }

    addEmployee(employees: string) {
        this.employees.push(employees);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        return this.employees;
    }
}

const newDepartment = new Department('Accounting');

newDepartment.addEmployee('Max');
newDepartment.addEmployee('Manu');

console.log(newDepartment.printEmployeeInformation());
// console.log(newDepartment.employees[2]);
console.log(newDepartment.name);
