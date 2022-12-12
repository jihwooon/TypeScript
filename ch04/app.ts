console.log('Hello Typescript')

function multiply(x:number, y:number) {
    return x + y;
}

const multiply2 = (x: number, y: number) => x + y;

const add2 = (x: number, y: number) => {
    return x + y;
}

const add4 = (x: number, y: number) => (x + y);

const obj = (x: number, y: number) => ({x,y});

