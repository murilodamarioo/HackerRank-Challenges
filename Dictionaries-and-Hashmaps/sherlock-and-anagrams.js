let prompt = require('prompt-sync')();

const queries = prompt('Enter the number of queries: ');

const sherlockAndAnagrams = (s) => {
    let result = [];
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        for (let j = i+1; j < s.length+1; j++) {
            result.push(s.slice(i, j).split('').sort().join(''));
        }
    }
    
    for (let i = 0; i < result.length; i++) {
        for(let j = i+1; j < result.length+1; j++) {
            if (result[i] === result[j]) count++;
        }
    }

    return count;
}

for (let i = 0; i < queries; i++) {
    const s = prompt();
    const result = sherlockAndAnagrams(s);
    console.log(result);
}