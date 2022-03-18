const through = require('through2');
const split = require('split2')
const { stdin, stdout} = require('process')

const stream = through(write);
let i = 1

function write(buffer, encoding, next)
{
    encoding = 'utf8';
    if(i%2===0)
        this.push(buffer.toString().toUpperCase() + '\n');
    else
        this.push(buffer.toString().toLowerCase() + '\n');
    i++;
    next();
}

stdin.pipe(split()).pipe(stream).pipe(stdout);

// const through = require('through2');
// const { stdin, stdout} = require('process')

// const stream = through(write);
// let i = 'odd';
// let j = 1;
// function write(buffer, encoding, next)
// {
//     const splitted = buffer.toString().split('\n');
     

//     if(i==='odd')
//         for(let j = 0; j < splitted.length; j++)
//         {
//             if(j%2===0)
//             {
//                 this.push(splitted[j].toString().toLowerCase());
//                 i = 'odd'
//             }   
//             else
//             {
//                 this.push(splitted[j].toString().toUpperCase());
//                 i = 'even'
//             }
//         }
//     else
//         for(let j = 0; j < splitted.length; j++)
//         {
//             if(j%2===0)
//             {
//                 this.push(splitted[j].toString().toUpperCase());
//                 i = 'even'
//             }   
//             else
//             {
//                 this.push(splitted[j].toString().toLowerCase());
//                 i = 'odd'
//             }

//         }
    
//     this.push('\n')
//     next();
// }

// stdin.pipe(stream).pipe(stdout);