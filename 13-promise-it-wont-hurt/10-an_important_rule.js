'use strict';

function alwaysThrows()
{
    throw new Error("OH NOES");
}

function iterate(numArg)
{
    console.log(numArg);
    return ++numArg;
}

Promise.resolve(iterate(1))
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch(error => console.log(error.message));
