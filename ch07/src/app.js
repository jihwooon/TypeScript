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
