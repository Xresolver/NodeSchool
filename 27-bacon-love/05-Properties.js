// Export method as a module.
module.exports = (Bacon) => {
    /**
     * Your code here
     **/
    const delay = 10;
    const arr = [11, 12, 13];
    const createdProperty = Bacon.sequentially(delay, arr).toProperty(10);
    return createdProperty;
};