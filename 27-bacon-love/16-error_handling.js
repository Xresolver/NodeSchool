module.exports = (Bacon, asyncTask) => {
    const showErrorMessage = asyncTask
                                .toProperty(false)
                                .map(v => false)
                                .mapError(v => true)

    return showErrorMessage;
};