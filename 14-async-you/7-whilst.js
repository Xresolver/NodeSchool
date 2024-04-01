const http = require('http');
const async = require('async');
const { argv } = require('process');

const url = argv[2];

const contentBuffer = [];
let count = 0;

async.whilst(
    function test(cb) { cb(null, !Buffer.concat(contentBuffer).includes('meerkat')); },
    function iter(callback) {
        count++;

        http.get(url, function (res) 
        {
            res.on('data', function (chunk) 
            {
                contentBuffer.push(chunk);
            });
            res.on('end', function () 
            {
                Buffer.concat(contentBuffer)
                callback(null, count);
            });
        })
        .on('error', function (err) 
        {
            callback(err);
        });
    },
    function (err, res) {
        console.log(res)
    }
);


/* OFFICIEL SOLUTION */
/* ----------------- */
// var http = require('http')
//     , async = require('async');

// var requestBody = '';

// var count = 0;

// async.whilst(
//     function () {
//         return !/meerkat/.test(requestBody.trim());
//     },

//     function (done) {
//         var body = '';
//         http.get(process.argv[2], function (res) {
//             res.on('data', function (chunk) {
//                 body += chunk.toString();
//             });

//             res.on('end', function () {
//                 ++count;
//                 requestBody = body;
//                 done();
//             });
//         }).on('error', done);
//     },

//     function (err) {
//         if (err) return console.log(err);
//         console.log(count);
//     }
// )