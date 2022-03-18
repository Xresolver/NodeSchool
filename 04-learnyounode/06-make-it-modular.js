const mymodule = require('./mymodule');

const dirName = process.argv[2];
const extName = process.argv[3];

mymodule(dirName, extName, filtered)

function filtered(err, filteredList)
{
    if(err) return console.error('There was an error:', err);

    filteredList.forEach(element => 
        {
            console.log(element);
        });
}