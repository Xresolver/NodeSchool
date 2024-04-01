const http = require('http');
const async = require('async');
const fs = require('fs')

async.waterfall([
    function (callback) 
    {
        fs.readFile(process.argv[2], 'utf-8', function (err, data) {
            if(err) return callback(err)
            callback(null, data)
        })

    },

    function (url, callback) 
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
                callback(null, Buffer.concat(contentBuffer));
            });
        })
        .on('error', function (err) 
        {
            callback(err);
        });
    }], 
    function (err, result) 
    {
        if (err) return console.error(err);
        console.log(result.toString());
    });

    
/* OFFICIEL SOLUTION */
/* ----------------- */
// var fs = require('fs')
//     , http = require('http')
//     , async = require('async');

// async.waterfall([
//     function (done) {
//         fs.readFile(process.argv[2], function (err, data) {
//             if (err) return done(err);
//             done(null, data)
//         });
//     },

//     function (data, done) {
//         var body = '';
//         http.get(data.toString().trimRight(), function (res) {
//             res.on('data', function (chunk) {
//                 body += chunk.toString();
//             });

//             res.on('end', function (chunk) {
//                 done(null, body);
//             });
//         }).on('error', function (e) {
//             done(e);
//         });
//     }
// ], function done(err, result) {
//     if (err) return console.error(err);
//     console.log(result);
// });