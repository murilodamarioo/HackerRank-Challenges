let prompt = require('prompt-sync')();

let rotations = prompt('Enter the number of rotations: ');
let arr = prompt('Array: ').replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

const rotLeft = (arr, rotations) => {
    let firstNumber;

    for (let i = 0; i < rotations; i++) {
        firstNumber = arr.shift();
        arr.push(firstNumber)
    }
    return arr;
}

console.log(rotLeft(arr, rotations))