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
    role: Role.ADMIN
};
function add(n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        console.log('n1 type: ', typeof n1);
        return n1 + n2;
    }
    return new Error('Incorrect input!');
}
// user1.role.push('admin');
// user1.role[1] = 'user';
var favoriteActivities;
favoriteActivities = ['Sport', 'Cok', 'dd', 'dd'];
var number1 = 5;
var number2 = 2.8;
// 타입 에러
var result = add(number1, number2);
console.log('result: ', result);
// user1.role.push('admin');
// user1.role[1] = 'user';
for (var _i = 0, _a = user1.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
var combinedAges = (0, combination_1.combine)(30, 20);
console.log('조합: ', combinedAges);
