let prompt = require('prompt-sync')();

let magazine = prompt().replace(/\s+$/g, '').split(' ');
let note = prompt().replace(/\s+$/g, '').split(' ');


const checkMagazine = (magazine, note) => {
    console.log(`Magazine words: ${magazine}`);
    console.log(`Note words: ${note}`);

    const magazineWordCount = {};

    for (const word of magazine) {
        magazineWordCount[word] = (magazineWordCount[word] || 0) + 1;
        console.log(magazineWordCount);
    }

    for (const word of note) {
        if (!magazineWordCount[word] || magazineWordCount[word] === 0) {
            return 'No';
        }
        magazineWordCount[word]--;
    }
    return 'Yes';
}

console.log(checkMagazine(magazine, note));