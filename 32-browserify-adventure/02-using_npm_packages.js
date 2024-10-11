const uniq = require('uniq');

const csv = prompt();
const arrStr = csv.split(',');
console.log(uniq(arrStr));
