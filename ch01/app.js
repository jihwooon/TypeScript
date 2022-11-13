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
