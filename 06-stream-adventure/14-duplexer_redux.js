const duplex = require('duplexer2');
const { Writable } = require('stream')


module.exports = function (counter) 
{
    const countries = {}

    const writable = new Writable(
        {
            objectMode : true,
            write(chunk, encoding, next)
            {
                if(chunk.country in countries)
                    countries[chunk.country]++;
                else   
                    countries[chunk.country] = 1;
                    
                next();    
            }
        }).on('finish', () =>
            {
                counter.setCounts(countries)
            })
   


    return duplex({objectMode : true}, writable, counter);
}

