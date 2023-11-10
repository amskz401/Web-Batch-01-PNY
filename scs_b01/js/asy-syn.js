function sum(a, b) {
    return a + b;
}

function sum2(a, b, c) {
    return a + b + c;
}

function sub(a, b) {
    return a - b;
}

async function loop() {
    let sum = 0;
    for(let i = 0; i < 10; i++){
        sum += i;
    }
    return await sum;
}

async function loop2() {
    let sum = 0;
    for(let i = 0; i < 8; i++){
        sum += i;
    }
    return await sum;
}

console.log(loop());
console.log(loop2());

console.log(sum(2, 3));
console.log(sum(4,5,6));
console.log(sub(5, 1));
