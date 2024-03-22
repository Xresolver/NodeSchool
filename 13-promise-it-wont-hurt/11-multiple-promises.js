function all(promise1, promise2)
{
    const promise = new Promise(function(fulfill, reject)
    {
        const arr = [];
        let counter = 0;

        promise1.then((value) =>
        {
            arr[0] = value;
            counter++;

            if(counter === 2)
                fulfill(arr)
        });

        promise2.then((value) => 
        {
            arr[1] = value;
            counter++;

            if(counter === 2)
                fulfill(arr)
        })
    })

    return promise;
}

all(getPromise1(), getPromise2())
    .then(console.log)
    .catch(error => console.log(error.message));