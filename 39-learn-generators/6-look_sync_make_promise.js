function askFoo() {
    return new Promise(function (resolve, reject) {
        resolve('foo');
    });
}

function run(generator) {
    // your code goes here
    const gen = generator();

    function go(promise) 
    {
        if (promise.done) return promise.value;

        return promise.value.then(
            function (value) { return go(gen.next(value)); }, 
            function (error) { return go(gen.throw(error)); });
    }

    go(gen.next());
}

run(function* () {
    try 
    {
        const foo = yield askFoo();
        console.log(foo);        
    } 
    catch (error) { console.log(error); }

});