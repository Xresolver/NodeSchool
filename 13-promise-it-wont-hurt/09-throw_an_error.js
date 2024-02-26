'use strict';

function parsePromised(json)
{
    const promise = new Promise(function (fulfill, reject)
        {
            try { fulfill(JSON.parse(json)) } 
            catch (error) { reject(error) }
        })

    return promise;
}

parsePromised(process.argv[2])
    .then(
        console.log, 
        error => console.log(error.message)
    );