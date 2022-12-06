var userName = 'Max';
var age = 30;
age = 28;
console.log(age);
if (age > 20) {
    var isOld = true;
}
var add = function (a, b) {
    if (b === void 0) { b = 1; }
    return a + b;
};
console.log(add(5));
var printOutput = function (output) { return console.log(output); };
var button = document.querySelector('button');
if (button) {
    button.addEventListener('click', function (event) { return console.log(event); });
}
printOutput(add(5));
var hobbies = ['Sports', 'Cooking'];
console.log(hobbies[0]);
var activeHobbies = ['Hiking'];
activeHobbies.push.apply(activeHobbies, hobbies);
console.log(activeHobbies);
