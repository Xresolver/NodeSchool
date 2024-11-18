// include the Lo-Dash library
const _ = require("lodash");

const worker = function (words) {
    // do work; return stuff
    const result = _.chain(words)
        .map(word => word.concat('chained').toUpperCase())
        .sortBy()
    
    return result;
};

// export the worker function as a nodejs module
module.exports = worker;


/* OFFICIEL SOLUTION */
/* ----------------- */
// const _ = require("lodash");

// var wordsmodify = function (arr) {
//     return _.chain(arr)
//         .map(item => item + 'Chained')
//         .map(item => item.toUpperCase())
//         .sortBy()
//         .value();
// };

// module.exports = wordsmodify;