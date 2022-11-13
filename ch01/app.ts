function add(n1: number, n2: number) {
    if(typeof n1 === 'number' && typeof n2 === 'number') {
        console.log('n1 type: ', typeof n1);
        return n1 + n2;
    }
    return new Error('Incorrect input!');
}

const number1 = 5;
const number2 = 2.8;

// 타입 에러
const result = add(number1, number2);
console.log('result: ', result);

