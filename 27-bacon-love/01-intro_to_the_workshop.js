// expose the stream generator as a module method
module.exports = (Bacon) => 
{
    const delay = 100;
    // return resulting stream
    return Bacon.sequentially(delay, [1,2,3]);
};