// include the Lo-Dash library
const _ = require("lodash");

const worker = function (items) {
    // do work; return stuff
    return _.sortBy(items, (item) => -item.quantity);
};

// export the worker function as a nodejs module
module.exports = worker;


/* OFFICIEL SOLUTION */
/* ----------------- */
// const _ = require("lodash");

// const sorting = function (collection) {
//    return _.sortBy(collection,"quantity").reverse();
//      
// };

// module.exports = sorting;