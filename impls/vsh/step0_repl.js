const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const READ = (str) => str + "Vaish";
const EVAL = (str) => str;
const PRINT = (str) => str;

const repl = (str) => PRINT(EVAL(READ(str)));

const main = () => {
    rl.question('user> ', (str) => {
        console.log(repl(str));
        main();
    });
}

main();