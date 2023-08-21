let prompt = require('prompt-sync')();

let arr = Array(6);

for (let i = 0; i < 6; i++) {
    arr[i] = prompt().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
}

const hourglassSum = (arr) =>  {
    let sums = [];

    for (let row = 0; row < arr.length-2; row++) {
        for (let column = 0; column < arr.length-2; column++) {
            sums.push(
                arr[row][column] +
                arr[row][column+1] +
                arr[row][column+2] +
                arr[row+1][column+1] + 
                arr[row+2][column] +
                arr[row+2][column+1] +
                arr[row+2][column+2]
            );
        }
    }

    return Math.max(...sums);
}

console.log(hourglassSum(arr));