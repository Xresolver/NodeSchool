const inputs = process.argv.slice(2);
const result = inputs.map(input => input[0])
                     .reduce((accumulator, currentValue) => accumulator.concat(currentValue), '');
console.log(`[${inputs}] becomes "${result}"`);
