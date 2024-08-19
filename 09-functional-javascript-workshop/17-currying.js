function curryN(fn, n) 
{
    let fnNumber = 0
    if(n !== undefined)
        fnNumber = n
    else
        fnNumber = fn.length;


    if(fnNumber > 0)
    {   
        if(arguments[2])
            fn = fn.bind(null, arguments[2]) 
        return curryN.bind(null, fn, --fnNumber)
    }
    else
        return fn.apply(null,[arguments[2]]);

}

module.exports = curryN

/* OFFICIEL SOLUTION */
/* ----------------- */
// function curryN(fn, n) {
//     n = n || fn.length
//     return function curriedN(arg) {
//       if (n <= 1) return fn(arg)
//       return curryN(fn.bind(this, arg), n - 1)
//     }
//   }

//   module.exports = curryN