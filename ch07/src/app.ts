console.log("Hello Typescript");

// const names: Array<string> = [];
// names[0].split(' ');

// names.push('abc');

// console.log(names);

const promise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('Time is gone');
    }, 2000);
})

promise.then(data => {
    data.split(' ');
});

function merge<T extends object, U extends object >(objA: T, objB: U) {
    return Object.assign(objA , objB);
}

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });

console.log(mergedObj.hobbies);
console.log(mergedObj.age);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = 'Got no value.';
    if (element.length === 1)  {
        descriptionText = 'Got 1 element.';
    } else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }

    return [element, descriptionText];
}

console.log(countAndDescribe('Hi There!'));

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) return;
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.addItem('Max');

console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.addItem(3);

console.log(numberStorage.getItems());

const isStorage = new DataStorage<boolean>();
numberStorage.addItem(1);


// const objectStorage = new DataStorage<object>();
// objectStorage.addItem({name: 'Max'});
// objectStorage.addItem({name: 'Menu'});

// console.log(objectStorage.getItems());

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string, 
    description: string, 
    date: Date
): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;

    return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Anna'];
