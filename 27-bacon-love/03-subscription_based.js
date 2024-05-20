// expose the stream generator as a module method
module.exports = (Bacon, stream, action, actionOnValue) => 
{
    /**
     * Your code
     */
    
    const originalStream = stream.doAction(action).log(`Value:`);
    originalStream.onValue(actionOnValue);
    return originalStream;
};