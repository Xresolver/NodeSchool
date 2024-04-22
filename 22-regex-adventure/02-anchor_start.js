module.exports = function (str) {
    /* return whether str begins with the string "LITERALLY" */
    const regEx = /^LITERALLY/;
    return regEx.test(str);
}