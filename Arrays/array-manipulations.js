let prompt = require('prompt-sync')();

let firstMultipleInput = prompt().replace(/\s+$/g, '').split(' ');

const n = parseInt(firstMultipleInput[0], 10);
const m = parseInt(firstMultipleInput[1], 10);

let queries = Array(m);

for (let i = 0; i < m; i++) {
    queries[i] = prompt().replace(/\s+$/g).split(' ').map(queriesTemp => parseInt(queriesTemp), 10);
}

const arrayManipulations = (n, queries) => {
    let array = new Array(n).fill(0);

    for (let i = 0; i < queries.length; i++) {
        const a = queries[i][0];
        const b = queries[i][1];
        const k = queries[i][2];

        array[a - 1] += k;
        if (b < array.length) {
            array[b] -= k;
        }
    }

    let max = 0;
    let current = 0;

    for (let i = 0; i < array.length; i++) {
        current += array[i];
        max = Math.max(max, current);
    }

    return max;
}

const result = arrayManipulations(n, queries);

console.log(result);
