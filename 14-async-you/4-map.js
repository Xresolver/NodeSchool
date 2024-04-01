const http = require('http');
const async = require('async');

async.map([process.argv[2], process.argv[3]],
    function(url, callback)
    {
        const contentBuffer = [];
        http.get(url, function (res) 
        {
            res.on('data', function (chunk)
                {
                    contentBuffer.push(chunk);
                });
            res.on('end', () => 
                callback(null, Buffer.concat(contentBuffer).toString()));
        })
        .on('error', function (err) 
        {
            callback(err);
        });
    },
    function(err, results){
        if (err) console.error(err);

        console.log(results);
      }
);


/* OFFICIEL SOLUTION */
/* ----------------- */
// var http = require('http')
//     , async = require('async');

// async.map(process.argv.slice(2), function (url, done) {
//     var body = '';
//     http.get(url, function (res) {
//         res.on('data', function (chunk) {
//             body += chunk.toString();
//         });

//         res.on('end', function () {
//             return done(null, body);
//         });
//     });
// },
//     function done(err, results) {
//         if (err) return console.log(err);
//         // results is an array of the response bodies in the same order
//         console.log(results);
//     });