const makeAnagram = (a, b) => {
    let count = 0;
    let dict = {};

    for (let char of a) {
        dict[char] = 1 + (dict[char] || 0) ;
    }

    console.log(dict);

    for (let char of b) {
        dict[char] ? dict[char]-- : count++;
    }

    let deletions = 2 * count + a.length - b.length;

    return deletions;
}

let prompt = require('prompt-sync')();

const a = prompt();

const b = prompt();

const res = makeAnagram(a, b);

console.log(res); 