// function repeat(operation, num) {
//     if(num > 0)
//         repeat(operation, num -1)
//     return operation
//   }

function repeat(operation, num)
{
    for(let i = 0; i < num; i++)
        operation();
}

  // Do not remove the line below
  module.exports = repeat

