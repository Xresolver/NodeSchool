const through = require('through2');
const sprintf = require('sprintf');
const quote = require('quote-stream');
const combine = require('stream-combiner2');

module.exports = function (file) {
    if (!/\.txt$/.test(file)) return through();

    const stream = through(write, end);
    let accumulatedData = '';

    function write(buffer, encoding, next) {
        encoding = 'utf8';
        accumulatedData += buffer.toString();
        next();
    }

    function end(done) {

        const lines = accumulatedData.split('\n');
        lines.forEach((line, index) => {
            if (index % 5 === 0)
                this.push(sprintf('\n%3d %s', (index), line));
            else
                this.push(sprintf('\n    %s', line));
        }); // Örneğin, büyük harfe çevirme

        done();
    }

    var prefix = through();
    prefix.push('module.exports=');
    return combine([stream, quote(), prefix]);
};

/* OFFICIEL SOLUTION */
/* ----------------- */
// var through = require('through2');
// var split = require('split2');
// var sprintf = require('sprintf');
// var quote = require('quote-stream');
// var combine = require('stream-combiner2');

// module.exports = function (file) {
//     if (!/\.txt$/.test(file)) return through();
//     var num = 0;
//     var liner = through(function write (buf, enc, next) {
//         var line = buf.toString('utf8') + '\n';
//         if (num % 5 === 0) {
//             this.push(sprintf('%3d %s', num, line));
//         }
//         else this.push('    ' + line);
//         num ++;
//         next();
//     });
//     var prefix = through();
//     prefix.push('module.exports=');
//     return combine([ split(), liner, quote(), prefix ]);
// };