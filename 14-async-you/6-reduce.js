const http = require('http');
const async = require('async');
const { argv } = require('process');

const queryParams = ['one', 'two', 'three'];
const urlArg = argv[2];

function getQueryResult(memo, param, callback)
{
    const url = urlArg + '?number=' + param;
    const contentBuffer = [];
    http.get(url, function (res) 
    {
        res.on('data', function (chunk)
            {
                contentBuffer.push(chunk);
            });
        res.on('end', () => 
            callback(null, memo + Number(Buffer.concat(contentBuffer))))
    })
    .on('error', function (err) 
    {
        callback(err);
    });
}

async.reduce(queryParams, 0, getQueryResult,
    function(err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    }
)