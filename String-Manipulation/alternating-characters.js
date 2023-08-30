const alternatingCharacters = (s) => {
    let deletionsCount = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i+1]) {
            deletionsCount++;
        }
    }

    return deletionsCount;
}

let prompt = require('prompt-sync')();

const q = parseInt(prompt().trim(), 10);

for (let i = 0; i < q; i++) {
    const s = prompt();

    const result = alternatingCharacters(s);

    console.log(result);
}

