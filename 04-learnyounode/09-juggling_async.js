const http = require('http');
const { argv } = require('process');

let collectedData = ["","",""];
let collected = 0;

for(let i = 0; i < 3; i++)
{
    http.get(argv[i+2], handleResponse);

    function handleResponse(response)
    {
        response.setEncoding('utf8')

        response.on('error', (err) =>
            {
                return console.log('error ocuured');
            });

        response.on('data', data =>
            {
                collectedData[i] += data;
            });

        response.on('end', () =>
            {
                collected++
                if(collected === 3)
                    for(let i = 0; i < 3; i++)
                        console.log(collectedData[i]);
            });
    }
}


/* OFFICIEL SOLUTION */
/* ----------------- */
// 'use strict'
// const http = require('http')
// const bl = require('bl')
// const results = []
// let count = 0

// function printResults () {
//   for (let i = 0; i < 3; i++) {
//     console.log(results[i])
//   }
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err) {
//         return console.error(err)
//       }

//       results[index] = data.toString()
//       count++

//       if (count === 3) {
//         printResults()
//       }
//     }))
//   })
// }

// for (let i = 0; i < 3; i++) {
//   httpGet(i)
// }