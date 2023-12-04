function Spy(target, method) {
    const obj = {count:0};
    target.method.bind(obj)
    
  }

  module.exports = Spy