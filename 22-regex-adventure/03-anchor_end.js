module.exports = function (str) {
    /* return whether str ends with "BANANAS" */
    const regEx = /BANANAS$/;
    return regEx.test(str);
}