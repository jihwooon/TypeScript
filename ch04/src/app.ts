console.log('Hello TypeScript');

class Department {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const newDepartment = new Department('Accounting');

console.log(newDepartment.name);
