<<<<<<< HEAD
<<<<<<< HEAD
import { combine } from './combination';
enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
}

const user1: {
    name: string,
    age: number,
    hobbies: string[],
    role: Role

} = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};

// user1.role.push('admin');
// user1.role[1] = 'user';

let favoriteActivities: string[];
favoriteActivities = ['Sport', 'Cok', 'dd', 'dd'];

console.log(user1.name);
console.log(user1.age);

console.log(favoriteActivities);

for(const hobby of user1.hobbies) {
    console.log(hobby.toUpperCase());
}
const combinedAges = combine(30, 20);
console.log('조합: ', combinedAges);

function add(n1: number, n2: number) {
    if(typeof n1 === 'number' && typeof n2 === 'number') {
        console.log('n1 type: ', typeof n1);
        return n1 + n2;
=======
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    
    const result = n1 + n2;
    if(showResult) {
        console.log(phrase + result);
>>>>>>> 8f15b29 (불리언 타입 알아보기)
    }
    return result;
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: '

// 타입 에러
<<<<<<< HEAD
const result = add(number1, number2);
<<<<<<< HEAD
console.log(result);
=======
console.log('result: ', result);

>>>>>>> bb38d27 (TypeScript의 typeof 기능 알아보기)
=======
const result = add(number1, number2, printResult, resultPhrase);
console.log('result: ', result);
>>>>>>> 8f15b29 (불리언 타입 알아보기)
=======
const person = {
    name: 'Maximilian',
    age: 30
};

console.log(person.name);
console.log(person.age);
>>>>>>> 52a8812 (객체 형태)
