const fs = require('fs');
const path = require('path');

const ext = '.' + process.argv[3];
fs.readdir(process.argv[2], filtered)

function filtered(err, list)
{
    if(err) return console.log(err)

    list.forEach(function logFilteredList(currentValue)
        {
            if(path.extname(currentValue) === ext)
                console.log(currentValue);
        });
}