console.log('Hello TypeScript');

class Department {
    private employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
    }

    describe() {
        return `${this.id}`+ this.name;
    }

    addEmployee(employees: string) {
        this.employees.push(employees);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        return this.employees;
    }
}

const newDepartment = new Department('1','Accounting');

newDepartment.addEmployee('Max');
newDepartment.addEmployee('Manu');

console.log(newDepartment.describe());

console.log(newDepartment.printEmployeeInformation());
