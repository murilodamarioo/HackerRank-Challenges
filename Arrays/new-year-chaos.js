let prompt =  require('prompt-sync')();

const minimumBribes = (q) => {
    let chaotic = false;
    let bribes = 0;

    for (let i = 0; i < q.length; i++) {
        if (q[i] - (i+1) > 2) { chaotic = true; }
        
        for (let j = q[i] - 2; j < i; j++) {
            if (q[j] > q[i]) { bribes++; }
        }
    }

    if(chaotic === true) {
        console.log("Too chaotic");
    } else {
        console.log(bribes);
    }
}

let t = prompt();
for (let i = 0; i < t; i++) {
    const q = prompt().replace(/\s+$/g, '').split(' ').map(qTemp => parseInt(qTemp));

    console.log(minimumBribes(q));
}