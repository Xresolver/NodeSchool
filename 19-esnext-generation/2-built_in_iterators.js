module.exports = function filterForNumbers(iterable) {
    // loop over iterable, adding numeric values to a new array
    // then return the new array of numbers
    const numArr = [];
    for (const iterator of iterable) 
        if(typeof iterator === 'number')
            numArr.push(iterator)
    
    return numArr;
  }