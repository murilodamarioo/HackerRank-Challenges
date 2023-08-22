let prompt = require('prompt-sync')();

let steps = prompt('Steps: ');
let path = prompt('Path: ');

const coutingValleys = (steps, path) => {
    let seaLevel = 0;
    let level = 0;
    let valley = 0;
    
    path.split('').forEach(step => {
        if (step === 'D') {
            level--;
        } else if (step === 'U') {
            level++;
            if (level === seaLevel) {
                valley++;
            }
        }
    });
    
    return valley;
}

console.log(coutingValleys(steps, path));