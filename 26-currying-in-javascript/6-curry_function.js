module.exports = function curryFunc(func)
{
    const arityLength = func.length;

    return function suppFunc()
    {
        const args = Array.prototype.slice.apply(arguments);

        if (args.length < arityLength)
            return function suppFunc2()
            {
                const args2 = args.concat(Array.prototype.slice.apply(arguments));
                return suppFunc.apply(null, args2);
            }
        else
            return func.apply(null, args)
    }
}