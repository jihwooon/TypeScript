"use strict";
console.log("Hello Typescript");
// const names: Array<string> = [];
// names[0].split(' ');
// names.push('abc');
// console.log(names);
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Time is gone');
    }, 2000);
});
promise.then(data => {
    data.split(' ');
});
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergedObj.hobbies);
console.log(mergedObj.age);
function countAndDescribe(element) {
    let descriptionText = 'Got no value.';
    if (element.length === 1) {
        descriptionText = 'Got 1 element.';
    }
    else if (element.length > 1) {
        descriptionText = 'Got ' + element.length + ' elements.';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi There!'));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1)
            return;
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.addItem('Max');
console.log(textStorage.getItems());
const numberStorage = new DataStorage();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.addItem(3);
console.log(numberStorage.getItems());
const isStorage = new DataStorage();
numberStorage.addItem(1);
// const objectStorage = new DataStorage<object>();
// objectStorage.addItem({name: 'Max'});
// objectStorage.addItem({name: 'Menu'});
// console.log(objectStorage.getItems());
