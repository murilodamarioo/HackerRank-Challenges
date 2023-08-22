let prompt = require('prompt-sync')();

let n = prompt('Enter for array length: ');
let array = prompt('Array: ').replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

const sockMerchant = (n, ar) => {
    let colorCount = {};
    let totalPairs = 0;

    for (let i = 0; i < n; i++) {
        console.log(colorCount);
        
        const color = ar[i];
        colorCount[color] = (colorCount[color] || 0) + 1;
    }

    for (const color in colorCount) {
        totalPairs += Math.floor(colorCount[color] / 2);
    }

    return totalPairs;
}

console.log(sockMerchant(n, array));