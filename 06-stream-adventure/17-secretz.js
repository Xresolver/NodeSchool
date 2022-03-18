const tar = require('tar');
const crypto = require('crypto');
const concat = require('concat-stream');

const cryptoStream = crypto.createDecipheriv(process.argv[2], process.argv[3], process.argv[4]);
const parser = new tar.Parse()

parser.on('entry', function(e) 
    {
        if (e.type !== 'File') return e.resume()

        const hashStream = crypto.createHash('md5', { encoding: 'hex' });

        e.pipe(hashStream).pipe(concat(function (hash) {
                console.log(hash + ' ' + e.path);}))

        
    })
    
process.stdin.pipe(cryptoStream).pipe(parser)

