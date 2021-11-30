const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = []

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {

    let num = parseInt(input[0]);
    let answer = parseInt(num / 3) + 1

    for (let i = 0, m = parseInt(num / 5) + 1; i < m; i++) {
        let b = parseInt((num - 5 * i) / 3);
        if ((answer > b + i) && ((answer - 5 * i) % 3 == 0)) {
            answer = b + i;
        }
    }

    if (answer == parseInt(num / 3) + 1) answer = -1;
    console.log(answer)

    process.exit();

});

