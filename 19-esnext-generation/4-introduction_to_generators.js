module.exports = function* generate(isEven) {
    // `yield` either odd or even numbers based on `isEven`
    let value = -1,
        swap = false;
    if (isEven)
        value = 0;

    while (true)
    {
        value += 2;
        swap = yield value;
        if(swap)
            value--;
    }    

}