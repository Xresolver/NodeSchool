module.exports = function (str) {
    /* return whether str contains the string "LITERALLY" */
    const regEx = /LITERALLY/;
    return regEx.test(str);
}