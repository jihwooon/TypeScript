console.log("Hello Typescript");

// const names: Array<string> = [];
// names[0].split(' ');

// names.push('abc');

// console.log(names);

// const promise = new Promise<string>((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Time is gone');
//     }, 2000);
// })

// promise.then(data => {
//     data.split(' ');
// });

function merge<T extends object, U extends object >(objA: T, objB: U) {
    return Object.assign({ objA }, objB);
}

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });

console.log(mergedObj.objA);
console.log(mergedObj.age);
