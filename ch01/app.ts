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