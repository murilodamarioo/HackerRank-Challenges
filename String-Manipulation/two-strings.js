let prompt = require('prompt-sync')();

let cases = prompt('Enter the number of cases: ');

const twoStrings = (s1, s2) => {
    let hashMap = {};

    for (let char of s1) { hashMap[char] = true; }

    for (let char of s2) { 
        if (char in hashMap) {
            return 'YES';
        }
    }

    return 'NO';
}

for (let i = 0; i < cases; i++) {
    const s1 = prompt('String 1: ');
    const s2 = prompt('String 2: ');
    const result = twoStrings(s1, s2);
    console.log(result);
}