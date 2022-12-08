function countWords(inputWords) {
    const counts = {};
    inputWords.reduce
        (
            (previousValue, currentValue) => 
                {
                    if(Object.keys(counts).length === 0)
                        counts[previousValue] = 1;
                    if(currentValue in counts)
                        counts[currentValue]++;
                    else
                        counts[currentValue] = 1;
                }
        )
    return counts;
  }

  module.exports = countWords


//   function countWords(arr) 
//   {
//     return arr.reduce(
//         function(countMap, word) 
//         {
//             countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
//             return countMap
//         }, {}) // second argument to reduce initialises countMap to {}
//   }

//   module.exports = countWords
