module.exports = (Bacon, riverFlow, inCriticalMode, isOnBreak, isSingleGate, systemActive, riverFlowLimit) => {
    /**
     * Your code here
     **/
    const shoudReport = inCriticalMode.or(isSingleGate.and(systemActive)).and(isOnBreak.not());
    const isOverflow = riverFlow.map(instantFlow => (riverFlowLimit < instantFlow))
    const resultingProperty = shoudReport.and(isOverflow)
    return resultingProperty;
};


/* OFFICIEL SOLUTION */
/* ----------------- */
// module.exports = (Bacon, riverFlow, inCriticalMode, isOnBreak, isSingleGate, systemActive, riverFlowLimit) => {
//     const isTooMuchWater = riverFlow
//         .map(flow => flow > riverFlowLimit)
//         .toProperty();

//     const isAllowedToNotify = isOnBreak.not()
//         .and(
//             inCriticalMode.or(systemActive.and(isSingleGate))
//         );

//     return isTooMuchWater.and(isAllowedToNotify);
// };