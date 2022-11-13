<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
"use strict";
exports.__esModule = true;
var combination_1 = require("./combination");
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var user1 = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
<<<<<<< HEAD
    role: Role.ADMIN
};
// user1.role.push('admin');
// user1.role[1] = 'user';
var favoriteActivities;
favoriteActivities = ['Sport', 'Cok', 'dd', 'dd'];
console.log(user1.name);
console.log(user1.age);
console.log(favoriteActivities);
for (var _i = 0, _a = user1.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
var combinedAges = (0, combination_1.combine)(30, 20);
console.log('조합: ', combinedAges);
=======
function add(n1, n2) {
    // if(showResult) {
    //     console.log(n1 + n2);
    // }
    return n1 + n2;
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
// 타입 에러
var result = add(number1, number2);
<<<<<<< HEAD
console.log(result);
>>>>>>> c67bc8e (Using Types)
=======
console.log('result: ', result);
>>>>>>> bb38d27 (TypeScript의 typeof 기능 알아보기)
=======
// function add(n1: number, n2: number, showResult: boolean, phrase: string) {
//     const result = n1 + n2;
//     if(showResult) {
//         console.log(phrase + result);
//     }
//     return result;
// }
// const number1 = 5;
// const number2 = 2.8;
// const printResult = true;
// const resultPhrase = 'Result is: '
// // 타입 에러
// const result = add(number1, number2, printResult, resultPhrase);
// console.log('result: ', result);
// 객체 형태
var person = {
=======
var user1 = {
>>>>>>> 4a5ad22 (배열 타입)
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking']
};
<<<<<<< HEAD
console.log(person.name);
console.log(person.age);
>>>>>>> 52a8812 (객체 형태)
=======
=======
    role: [2, 'author']
};
user1.role.push('admin');
user1.role[1] = 10;
>>>>>>> fb24023 (튜플 작업하기)
var favoriteActivities;
favoriteActivities = ['Sport', 'Cok'];
console.log(user1.name);
console.log(user1.age);
console.log(favoriteActivities);
for (var _i = 0, _a = user1.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
>>>>>>> 4a5ad22 (배열 타입)
