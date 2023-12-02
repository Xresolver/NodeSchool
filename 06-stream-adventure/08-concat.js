const concat = require('concat-stream');
const {stdin, stdout} = require('process');

const stream = concat((allData) =>
{
    stdout.write(allData.reverse())
})

stdin.pipe(stream)