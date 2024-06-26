const http = require('http');
const async = require('async');
const { argv } = require('process');

const hostname = argv[2];
const port = argv[3];

const createUser = function(id, callback) {
    const postData = JSON.stringify({user_id: id + 1});

    const options = {
        hostname: hostname,
        port: port,
        path: '/users/create',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const req = http.request(options, function (res) 
    {
        const contentBuffer = [];
        res.on('data', function (chunk) {
            contentBuffer.push(chunk);
        });
        res.on('end', function () {

        });
    });

    req.write(postData);
    req.end();

    callback(null, null);
};

async.times(5, function (n, next) 
    {
        createUser(n, function (err) {
            next(err);
        });
    }, 
    function (err) 
    {
        const contentBuffer = [];
        http.get('http://' + hostname + ':' + argv[3] + '/users', function (res) 
        {
            res.on('data', function (chunk)
                {
                    contentBuffer.push(chunk);
                });
            res.on('end', () => 
                console.log(Buffer.concat(contentBuffer).toString()));
        })
        .on('error', function (err) 
        {
            callback(err);
        });
    })


/* OFFICIEL SOLUTION */
/* ----------------- */
// var http = require('http')
//     , qs = require('querystring')
//     , async = require('async')
//     , hostname = process.argv[2]
//     , port = process.argv[3]
//     , url = 'http://' + hostname + ':' + port;

// async.series({
//     post: function (done) {
//         async.times(5, function (n, next) {
//             _addUser(++n, function (err) {
//                 next(err);
//             });
//         }, function next(err) {
//             if (err) return done(err);
//             done(null, 'saved');
//         });
//     },

//     get: function (done) {
//         http.get(url + '/users', function (res) {
//             var body = "";
//             res.on('data', function (chunk) {
//                 body += chunk.toString();
//             });

//             res.on('end', function () {
//                 done(null, body);
//             });
//         }).on('error', done);
//     }

// }, function done(err, result) {
//     if (err) return console.log(err);
//     console.log(result.get);
// });


// function _addUser(user_id, next) {
//     var postdata = JSON.stringify({ 'user_id': user_id }),
//         opts = {
//             hostname: hostname,
//             port: port,
//             path: '/users/create',
//             method: 'POST',
//             headers: {
//                 'Content-Length': postdata.length
//             }
//         };

//     var req = http.request(opts, function (res) {
//         res.on('data', function (chunk) { })

//         res.on('end', function () {
//             next();
//         });
//     });

//     req.on('error', function (err) {
//         next(err);
//     });

//     req.write(postdata);
//     req.end();
// }