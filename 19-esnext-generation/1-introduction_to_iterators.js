module.exports = function makeCounter(someObj, maxNum) {

    let i = 0;

    someObj.next = function() 
    {
        if(!maxNum)
            maxNum = 10;

        let done = i===maxNum ? true : false;
        let value = !done ? ++i : undefined;
      
        return {value: value, done: done}
    }

  }


/* OFFICIEL SOLUTION */
/* ----------------- */
// module.exports = function makeCounter(someObj) {
//     var num = 0,
//         done = false;

//     someObj.next = function () {

//         if (num < 10) {
//             num++;
//         } else {
//             done = true;
//         }

//         return {
//             value: num,
//             done: done
//         }

//     }
// }