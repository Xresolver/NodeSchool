module.exports = (Bacon, riverQuality, untilSwitchTurnedOff, sampleTime) => {
    /**
     * Your code here
     **/
    const createdEventStream = 
    riverQuality.debounceImmediate(sampleTime)
                .takeWhile(untilSwitchTurnedOff);            
                
    return createdEventStream;
};