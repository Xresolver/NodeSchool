module.exports = function average(...args) 
{
    const total = args.reduce((accumulate, currentValue) => accumulate + currentValue, 0)
    const argsNumber = args.length;
    return (total / argsNumber)
};