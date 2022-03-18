const through = require('through2');
const { stdin, stdout} = require('process')

const stream = through(write);

function write(buffer, encoding, next)
{
    encoding = 'utf8';
    this.push(buffer.toString().toUpperCase());
    next();
}

stdin.pipe(stream).pipe(stdout);