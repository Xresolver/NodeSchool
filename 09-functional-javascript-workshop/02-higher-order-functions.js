function repeat(operation, num) {
    if(num > 0)
        repeat(operation, num -1)
    return operation
  }

  // Do not remove the line below
  module.exports = repeat