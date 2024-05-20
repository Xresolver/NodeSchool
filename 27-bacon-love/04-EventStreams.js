// Export method as a module.
module.exports = (Bacon) => 
{
    /**
     * Your code here
     **/
    const delay = 100;
    const arr = ['Bacon', 'is', 'delicious'];
    return Bacon.sequentially(delay, arr);
};


/* OFFICIEL SOLUTION */
/* ----------------- */
// module.exports = Bacon => {
//     const bus = Bacon.Bus();
//     setTimeout(() => bus.push('Bacon'), 100);
//     setTimeout(() => bus.push('is'), 200);
//     setTimeout(() => bus.push('delicious'), 300);
//     setTimeout(() => bus.end(), 400);
//     return bus;
// };