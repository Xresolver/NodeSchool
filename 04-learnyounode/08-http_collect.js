const http = require('http');
const { argv } = require('process');

http.get(argv[2], handleResponse);

function handleResponse(response)
{
    let collectedDataLength = 0;
    let collectedData = "";
    
    response.setEncoding('utf8')

    response.on('error', (err) =>
        {
            return console.log('error ocuured');
        });

    response.on('data', data =>
        {
            collectedDataLength += data.length;
            collectedData += data;
        });

    response.on('end', () =>
        {
            console.log(collectedDataLength);
            console.log(collectedData);
        });
}

// 'use strict'
// const http = require('http')
// const bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err) {
//       return console.error(err)
//     }
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })