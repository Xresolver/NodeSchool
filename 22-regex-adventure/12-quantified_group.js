module.exports = function (str) {
    const regEx = /^(0x(\d|[a-fA-F]){2}\s+){8}$/;
    return regEx.test(str);
}