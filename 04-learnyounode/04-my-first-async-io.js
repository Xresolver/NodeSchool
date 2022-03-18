const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', doneReading);

function doneReading(err, data)
{
    if(err) return console.log(err);
    const lineCharCount = data.split('\n').length - 1;
    console.log(lineCharCount);
}