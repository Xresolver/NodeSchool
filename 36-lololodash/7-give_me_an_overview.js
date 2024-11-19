// include the Lo-Dash library
const _ = require("lodash");

const worker = function (orders) {
    // do work; return stuff
    const result = _.chain(orders)
        .reduce((total, value) =>
            {
                const rlength = total.length;
                for(let i = 0; i < rlength; i++)
                    if(total[i].article === value.article)
                    {
                        total[i].total_orders += value.quantity;
                        return total;
                    }    
                
                total.push({article: value.article, total_orders: value.quantity});
                return total;
            }, [])
        .sortBy('total_orders')
        .reverse()
    
    return result;
};

// export the worker function as a nodejs module
module.exports = worker;


/* OFFICIEL SOLUTION */
/* ----------------- */
// const _ = require("lodash");

// const overview = function (orders) {

//     return _.chain(orders)
//         .groupBy('article')
//         .map((item, key) => {
//             return {
//                 article: parseInt(key),
//                 total_orders: _.reduce(item, (result, value) => result += value.quantity, 0)
//             };
//         })
//         .sortBy(item => -item.total_orders);
// };

// module.exports = overview;