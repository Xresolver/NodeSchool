const http = require('http');
const async = require('async');

function getContent(callback, url)
{
    const contentBuffer = [];
    http.get(url, function (res) 
    {
        
        res.on('data', function (chunk) 
        {
            contentBuffer.push(chunk);
        });
        res.on('end', function () 
        {
            callback(null, Buffer.concat(contentBuffer).toString());
        });
    })
    .on('error', function (err) 
    {
        callback(err);
    });
}

async.series({
        requestOne: function (callback) 
        {
            getContent(callback, process.argv[2]);
        },

        requestTwo: function (callback) 
        {
            getContent(callback, process.argv[3]);
        }
    }, 
    function (err, result) 
    {
        if (err) return console.error(err);
        console.log(result);
    });


/* OFFICIEL SOLUTION */
/* ----------------- */
// var http = require('http')
//     , async = require('async');

// async.series({
//     requestOne: function (done) {
//         fetchURL(process.argv[2], done);
//     },
//     requestTwo: function (done) {
//         fetchURL(process.argv[3], done);
//     }
// },
//     function done(err, result) {
//         if (err) return console.error(err);
//         console.log(result);
//     });


// function fetchURL(url, done) {
//     var body = '';
//     http.get(url, function (res) {
//         res.on('data', function (chunk) {
//             body += chunk.toString();
//         });

//         res.on('end', function (chunk) {
//             done(null, body);
//         });
//     }).on('error', function (e) {
//         done(e);
//     });
// }