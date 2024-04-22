module.exports = function (str) {
    const regEx = /^[^\d][^A-Z]/;
    return regEx.test(str);
}


/* OFFICIEL SOLUTION */
/* ----------------- */
// module.exports = function (str) {
//     return /^[^0-9][^A-Z]/.test(str)
// }