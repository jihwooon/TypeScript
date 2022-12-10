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
