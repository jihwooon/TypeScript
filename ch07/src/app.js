"use strict";
console.log("Hello Typescript");
const names = [];
names[0].split(' ');
names.push('abc');
console.log(names);
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Time is gone');
    }, 2000);
});
promise.then(data => {
    data.split(' ');
});
