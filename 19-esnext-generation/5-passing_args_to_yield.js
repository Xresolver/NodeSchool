module.exports = function* multiplier() {
    // `yield` all integers multiplied by the value passed in via `.next()`

    let num = 0,
        factor = 1;

    while (true) {
        num += 1;
        factor = yield num * factor;
        if(!factor)
            factor = 1;
    }

}