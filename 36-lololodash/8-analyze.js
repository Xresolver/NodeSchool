// include the Lo-Dash library
const _ = require("lodash");

const worker = function (freelancers) {
    // do work; return stuff
    const averageIncome = _.reduce(freelancers, (result, value) => result += value.income, 0) / freelancers.length;
    return {
        average: averageIncome,
        underperform: _.chain(freelancers).filter((freelancer) => freelancer.income <= averageIncome).sortBy('income'),
        overperform: _.chain(freelancers).filter((freelancer) => freelancer.income > averageIncome).sortBy('income')
    }
};

// export the worker function as a nodejs module
module.exports = worker;


/* OFFICIEL SOLUTION */
/* ----------------- */
// const _ = require("lodash");

// const analyze = function (item) {

//     // Sort
//     let sorted = _.sortBy(array, 'income');

//     // Calculate average of all incomes
//     let average = _.meanBy(array, item => item.income);

//     return {
//         average: average,
//         // Filter underperformers
//         underperform: _.filter(sorted, item => item.income <= average),
//         // Filter overperformers
//         overperform: _.filter(sorted, item => item.income > average)
//     };

// };

// module.exports = analyze;