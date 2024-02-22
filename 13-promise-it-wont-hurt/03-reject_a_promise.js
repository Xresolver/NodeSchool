'use strict';

const waitTime = 300;

const promise = new Promise(function (fulfill, reject) {
    setTimeout(() => {
        reject(new Error('REJECTED!'));
    }, waitTime);
});

function onReject(error) {
    console.log(error.message);
}

promise.then(null, onReject);