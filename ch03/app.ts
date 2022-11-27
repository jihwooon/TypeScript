const userName = 'Max';

let age = 30;

age = 28;

console.log(age);

if(age > 20) {
  let isOld = true;
}
const add = (a: number, b: number = 1) => a + b;

console.log(add(5));

const printOutput: (output: string | number) => void =output => console.log(output);

const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', event => console.log(event));
}

printOutput(add(5))
