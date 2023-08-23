const countTriplets = (arr, r) => {
    let numTriplets = 0;
    
    const singles = {};
    const doubles = {};
    
    for (const num of arr) {
        if (doubles[num / r]) {
            numTriplets += (doubles[num/r]);
        }
        
        doubles[num] = (doubles[num] || 0) + singles[num/r];
        singles[num] = (singles[num] || 0 ) + 1;
    }
    		
    return numTriplets;
}

let prompt = require('prompt-sync')();

const nr = prompt('Enther the array size and common ratio: ').replace(/\s+$/g, '').split(' ');

const n = parseInt(nr[0], 10);
const r = parseInt(nr[1], 10);

const arr = prompt('Array: ').replace(/\s+$/g, 10).split(' ').map(arrTemp => parseInt(arrTemp, 10));

console.log(countTriplets(arr, r));

