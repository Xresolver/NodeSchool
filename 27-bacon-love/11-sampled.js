module.exports = (Bacon, nidelva, leirelva, buttonClicked) => {
    /**
     * Your code here
     **/
    const confluence = nidelva.combine(leirelva, (n, l) => n + l);
    const resultingProperty = confluence.sampledBy(buttonClicked);
    return resultingProperty;
};