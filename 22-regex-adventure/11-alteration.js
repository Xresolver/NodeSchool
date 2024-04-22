module.exports = function (str) {
    const regEx = /^(cat|dog|robot)\d+$/;
    return regEx.test(str);
}