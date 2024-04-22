module.exports = function (str) {
    /* return whether str starts with a vowel or a digit */
    const regEx = /^[aeıioöuü1-9]/;
    return regEx.test(str);
}