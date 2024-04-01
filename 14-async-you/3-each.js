const http = require('http');
const async = require('async');

async.each([process.argv[2], process.argv[3]],
    function(url, callback)
    {
        http.get(url, function (res) 
        {
            res.on('data', chunk => { });
            res.on('end', () => callback());
        })
        .on('error', function (err) 
        {
            callback(err);
        });
    },
    function(err){
        if (err) console.error(err);
      }
);


/* OFFICIEL SOLUTION */
/* ----------------- */
// var http = require('http')
//     , async = require('async');

// async.each(process.argv.slice(2), function (item, done) {
//     http.get(item, function (res) {
//         res.on('data', function (chunk) {
//         });

//         res.on('end', function () {
//             done(null);
//         });
//     }).on('error', function (err) {
//         done(err);
//     });
// },
//     function (err) {
//         if (err) console.error(err);
//     });