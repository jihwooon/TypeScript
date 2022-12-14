// const userName = 'Max';
//
// let age = 30;
//
// age = 28;
//
// console.log(age);
//
// if(age > 20) {
//   let isOld = true;
// }
const add = (a: number, b: number = 1) => a + b;

console.log(add(5));

const printOutput: (output: string | number) => void =output => console.log(output);

const button = document.querySelector('button');

if (button) {
  button.addEventListener('click', event => console.log(event));
}

printOutput(add(5))

const hobbies = ['Sports', 'Cooking'];
console.log(hobbies[0]);

const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);

console.log(activeHobbies);

const person = {
  firstName: 'Max',
  age: 30
};

const copiedPerson  = { ...person };

const addReduce = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  },0);
};

const addedNumbers = addReduce(5,10,2);
console.log(addedNumbers);

//TODO: 배열 및 비구조화 할당
const [hobby1, hobby2, ...remainingHobbies] = hobbies;

const { firstName: userName, age } = person;
console.log(userName, age, person);
