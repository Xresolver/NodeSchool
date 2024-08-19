const http = require('http');
const { argv } = require('process');

http.get(argv[2], handleResponse);

function handleResponse(response)
{
    response.setEncoding('utf8');

    response.on('error', (err) =>
        {
            return console.log('error ocuured');
        });

    response.on('data', data =>
        {
            console.log(data);
        });
}


/* OFFICIEL SOLUTION */
/* ----------------- */
// 'use strict'
// const http = require('http')

// http.get(process.argv[2], function (response) {
//   response.setEncoding('utf8')
//   response.on('data', console.log)
//   response.on('error', console.error)
// }).on('error', console.error)