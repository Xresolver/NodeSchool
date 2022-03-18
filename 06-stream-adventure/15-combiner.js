const combine = require('stream-combiner');
const split = require('split2');
const through = require('through2');
const {stdin, stdout} = require('process');
const zlib = require('zlib');
const { doesNotMatch } = require('assert');

const stream = through(write, end);
const outObj = new Object();
let first = true;

function write(line, _, next)
{

    const inObj = JSON.parse(line);
    
    if(inObj.type === 'genre')
    {
        if(!first)
            this.push(JSON.stringify(outObj))   
        
        outObj.name = inObj.name;
        outObj.books = [];
    }
    else if(inObj.type === 'book')
        outObj.books.push(inObj.name)

    next()
}
function end(done)
{
    if(!first)
        this.push(JSON.stringify(outObj)) 
    done()
}

module.exports = function () 
{
    const gzip = zlib.createGzip();
    return combine(split(), stream, gzip)
}


