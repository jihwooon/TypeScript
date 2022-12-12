"use strict";
console.log('Hello Typescript');
function multiply(x, y) {
    return x + y;
}
const multiply2 = (x, y) => x + y;
const add2 = (x, y) => {
    return x + y;
};
const add4 = (x, y) => (x + y);
const obj = (x, y) => ({ x, y });
