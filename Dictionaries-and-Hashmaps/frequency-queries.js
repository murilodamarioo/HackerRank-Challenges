let prompt = require('prompt-sync')();

const q = parseInt(prompt('Enter the number of queries: '));

let queries = Array(q);

for (let i = 0; i < q; i++) {
    queries[i] = prompt().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
}

const freqQuery = (queries) => {
    const dataStructure = new Map();
    const results = [];
    
    queries.forEach(([operation, value]) => {
        if (operation === 1) {
            return dataStructure.set(value, (dataStructure.get(value) || 0) + 1);
        } else if (operation === 2) {
            return dataStructure.get(value) && dataStructure.set(value, dataStructure.get(value) - 1)
        } else if (operation === 3) {
            const values = [...dataStructure.values()];
            
            if (values.indexOf(value) > -1) {
                results.push(1);
            } else {
                results.push(0);
            }
        }
    });

    return results;
}

const ans = freqQuery(queries);
console.log('\n', ans);