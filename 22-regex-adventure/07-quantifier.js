module.exports = function (str) {
    const regEx = /^[0-9]+\.jpe?g$/;
    return regEx.test(str);
}