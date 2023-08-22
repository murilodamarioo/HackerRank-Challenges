let prompt = require('prompt-sync')();

let arr = prompt('Array: ').replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

const minimumSwaps = (arr) => {
    let swaps = 0;

    for (let i = 0; i < arr.length; i++) {
        while(arr[i] !== i + 1) {
            const temp = arr[i];
            console.log(`temp - ${temp}`);

            arr[i] = arr[temp-1];
            console.log(`arr[${i}] - ${arr[i]}`);

            arr[temp-1] = temp;
            console.log(`arr[${temp-1}] - ${arr[temp-1]}`);

            console.log(...arr);

            swaps++;
        }
    }

    return swaps;
}

console.log(minimumSwaps(arr));