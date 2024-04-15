module.exports = function generate(isEven) {
    // return an Iterator for even numbers if isEven is true
    // or, return an Iterator for odd numbers if isEven is false
    // If `.next(swap)` receives `true`, swap between even <-> odd
    let value = -1;
    if(isEven)
        value = 0;

    const iterator = {
        next: function(swap)
        {        
            if(swap)
            {
                isEven = !isEven;
                value = --value;
            }    

            value += 2;
            return {value: value, done: false}

        }
    }

    return iterator;
}

/* OFFICIEL SOLUTION */
/* ----------------- */
// module.exports = function generate(isEven) {
//     var num;

//     if (isEven) {
//         num = 0;
//     } else {
//         num = -1;
//     }

//     var myIterator = {
//         next: function (swap) {

//             num += (swap ? 1 : 2);

//             return {
//                 value: num
//             }

//         }
//     }

//     return myIterator;
// }