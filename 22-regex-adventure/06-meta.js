module.exports = function (str) {
    const regEx = /\.$/;
    return regEx.test(str);
}