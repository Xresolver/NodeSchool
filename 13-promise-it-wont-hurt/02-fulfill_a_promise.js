'use strict';

const waitTime = 300;

const promise = new Promise(function (fulfill, reject) {
    setTimeout(() => {
        fulfill('FULFILLED!');
    }, waitTime);
});

promise.then((value) => console.log(value));