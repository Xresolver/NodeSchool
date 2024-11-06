const fs = require('fs');
const sprintf = require('sprintf');

const readFile = fs.readFileSync('C:/Users/bilal/AppData/Roaming/npm/node_modules' + 
                                 '/browserify-adventure/problems/using_transforms/wake.txt', 'utf8');
const lines = readFile.split('\n');
lines.forEach((line, index) => 
    {
        if(index%5 === 0)
            console.log(sprintf('%3d %s', (index), line));            
        else
            console.log(sprintf('    %s', line));
    });