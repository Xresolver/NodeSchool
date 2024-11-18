// include the Lo-Dash library
const _ = require("lodash");

const worker = function (items) {
    // do work; return stuff
    const result = _.chain(items)
        .groupBy('username')
        .map((value, key) => {return {username: key, comment_count: _.size(value)}})
        .sortBy('comment_count')
        .reverse();
    
    return result;
};

// export the worker function as a nodejs module
module.exports = worker;


/* OFFICIEL SOLUTION */
/* ----------------- */
// const _ = require("lodash");

// const commentcount = function (comments) {

//     var counted = [];

//     // Group by username
//     comments = _.groupBy(comments, "username");

//     _.forEach(comments, function (item, name) {

//         counted.push({
//             username: name,
//             comment_count: _.size(item)
//         });
//     });

//     return _.sortBy(counted, "comment_count").reverse();
//     // alternative with a sorted function
//     // return _.sortBy(counted, function(comment) { return -comment.comment_count; });
// };

// /*
// Alternative solution with use of 'chain':

// var commentcount = function(comments) {

//     return _.chain(comments)
//     .groupBy("username")
//     .map(function(item, name) {
//         return {username: name, comment_count: _.size(item)};
//     })
//     .sortBy(function(counted) {
//         return -counted["comment_count"];
//     });
// };
// */

// module.exports = commentcount;