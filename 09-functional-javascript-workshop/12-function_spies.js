function Spy(target, method) 
{
    var func = target[method]

    const obj = {
        count: 0,
        method: function(){
            obj.count++;
            return func.call(target,...arguments);
        }
    }

    target[method] = obj.method
    return obj;
}

/* OFFICIEL SOLUTION */
/* ----------------- */
// function Spy(target, method) {
//     var originalFunction = target[method]

//     // use an object so we can pass by reference, not value
//     // i.e. we can return result, but update count from this scope
//     var result = {
//       count: 0
//     }

//     // replace method with spy method
//     target[method] = function() {
//       result.count++ // track function was called
//       return originalFunction.apply(this, arguments) // invoke original function
//     }

//     return result
//   }
// module.exports = Spy
