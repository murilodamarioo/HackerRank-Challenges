let prompt = require('prompt-sync')();

let s = prompt('Enter the string:');
let n = prompt();

const repeatedString = (s, n) => {
    const len = s.length;
    let count  = 0;

    for (let i = 0; i < len; i++) {
        if(s[i] === 'a') count++;
    }

    const repeats = Math.floor(n / len);
    let result =  repeats * count;

    for (let i = 0; i < n % len; i++) {
        if (s[i] === 'a') result++;
    }

    return result;
}

console.log(repeatedString(s, n));