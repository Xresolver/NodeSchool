module.exports = (Bacon, clicks, startAsyncTask) => {
    
    const spinnerVisibility = clicks
                                .map(c => true)
                                .merge(clicks.flatMap(startAsyncTask).map(c => false))
                                .toProperty(false);
    
    return spinnerVisibility;
};


/* OFFICIEL SOLUTION */
/* ----------------- */
// module.exports = (Bacon, clicks, startAsyncTask) => {
//     const request = clicks.map(true);
//     const response = request.flatMap(startAsyncTask);

//     return request.awaiting(response);
// };