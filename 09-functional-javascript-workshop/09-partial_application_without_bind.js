let slice = Array.prototype.slice

function logger(namespace) {

    return function()
        {console.log.apply(null,  [namespace].concat(slice.call(arguments)))}
}

module.exports = logger


// function add(x, y){ return x + y}
// function partialApply(func, arg1)
// {
//     return function(arg2){ return func(arg1, arg2) }
// }

// let addTen = partialApply(add, 10);
// console.log(addTen(40));

