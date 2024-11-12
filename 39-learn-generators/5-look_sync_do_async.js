const fs = require('fs');

function run(generator) 
{
    // improve `run` above
    try {
        const it = generator(go);

        function go (err, result) {
          it.next(result);
        }
    
        go();
    } catch (error) {
        
    }

}

run(function* (done) {
    // catch exception
    try {
        const dirFiles = yield fs.readdir('NoNoNoNo', done); // No such dir
        const firstFile = dirFiles[0]; // TypeError: Cannot read property '0' of undefined
    } 
    catch (error) {
        firstFile = null;    
    }


    console.log(firstFile);
});