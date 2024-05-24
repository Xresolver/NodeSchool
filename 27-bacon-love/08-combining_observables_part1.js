module.exports = (Bacon, messages, keys, decoderFunction) => {
    const streamOfDecodedMessages = messages.zip(keys, 
        (message, key) => decoderFunction([message, key]));

    return streamOfDecodedMessages;
};


/* OFFICIEL SOLUTION */
/* ----------------- */
// module.exports = (Bacon, messages, keys, decoderFunction) =>
//     messages
//         .zip(keys)
//         .map(decoderFunction);