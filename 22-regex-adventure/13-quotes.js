module.exports = function (str) {
    const regEx = /"(\w*\s*)*"/g;
    return str.match(regEx);
}


/* OFFICIEL SOLUTION */
/* ----------------- */
// module.exports = function (str) {
//     return str.match(/"[^"]*"/g)
// }