const through = require('through2');
const { stdin, stdout} = require('process')

const stream = through(write, end);

function write(buffer, encoding, next)
{
    encoding = 'utf8';
    this.push(buffer.toString().toUpperCase());
    next();
}

function end(done)
{
    done();
}

stdin.pipe(stream).pipe(stdout);