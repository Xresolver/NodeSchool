const { Buffer } = require('buffer');

const buffer = Buffer.from(process.argv.slice(2));
console.log(buffer.toString('hex'));


/* OFFICIEL SOLUTION */
/* ----------------- */
// var bytes = process.argv.slice(2).map(Number)
// console.log(new Buffer(bytes).toString('hex'))