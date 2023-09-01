const isValid = (s) => {
    let dict = {};
    
    for (let char of s) {
        dict[char] = (dict[char] || 0) + 1;
    }
    console.log(dict);

    let frequencies = Object.values(dict);
    console.log(frequencies);

    let maxFrequency = Math.max(...frequencies);
    console.log(`\nmaxFrequency: ${maxFrequency}`);

    let minFrequency = Math.min(...frequencies);
    console.log(`minFrequency: ${minFrequency}\n`);

    let maxFrequencyCount = frequencies.filter(frequency => frequency === maxFrequency).length;
    console.log(`maxFrequencyCount: ${maxFrequencyCount}`);

    let minFrequencyCount = frequencies.filter(frequency => frequency === minFrequency).length;
    console.log(`minFrequencyCount: ${minFrequencyCount}\n`);

    if (maxFrequency === minFrequency) {
        return 'YES';
    } else if ((maxFrequencyCount === 1 && (maxFrequency - minFrequency === 1 || minFrequency === 1)) ||
               (minFrequencyCount === 1 && (minFrequency === 1 || maxFrequency - minFrequency === 1))) {
        return 'YES';
    } else {
        return 'NO';
    }
}



let prompt = require('prompt-sync')();

const s = prompt().trim();

const result = isValid(s);

console.log(result);