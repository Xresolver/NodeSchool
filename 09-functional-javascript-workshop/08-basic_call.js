  function duckCount() 
  {
    return Array.prototype.slice.call(arguments)
      .filter(function(object) 
      {
        return Object.prototype.hasOwnProperty.call(object, 'quack')
      }).length
  }

  module.exports = duckCount

// var notDuck = Object.create({quack: true})
// var duck2 = Object.create(null);
// duck2.quack = true;
// var duck = {quack: true}

// console.log(Object.prototype.hasOwnProperty.call(notDuck, 'quack'))  --> false
// console.log(Object.prototype.hasOwnProperty.call(duck2, 'quack'))    --> true    
// console.log(notDuck.hasOwnProperty('quack'))                         --> false
// console.log(duck2.hasOwnProperty('quack'))                           --> error