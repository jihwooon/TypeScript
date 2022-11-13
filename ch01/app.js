var user1 = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
user1.role.push('admin');
user1.role[1] = 10;
var favoriteActivities;
favoriteActivities = ['Sport', 'Cok'];
console.log(user1.name);
console.log(user1.age);
console.log(favoriteActivities);
for (var _i = 0, _a = user1.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
