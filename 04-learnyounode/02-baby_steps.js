const args = process.argv
const argvLength = args.length;
let total = 0;

for(let i = 2; i < argvLength; i++)
    total += +args[i];

console.log(total);