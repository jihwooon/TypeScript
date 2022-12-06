console.log("Hello Typescript");

const names: Array<string> = [];
names[0].split(' ');

names.push('abc');

console.log(names);

const promise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('Time is gone');
    }, 2000);
})

promise.then(data => {
    data.split(' ');
});
