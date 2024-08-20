const DOT = '.'.charCodeAt(0);
const EXC = '!';

process.stdin.on("data", buffer => 
    {
        const length = buffer.length;
        for (let i = 0; i < length; i++)
            if (buffer[i] === DOT)
                buffer.write(EXC, i);

        console.log(buffer);
    })


/* OFFICIEL SOLUTION */
/* ----------------- */
// var DOT = '.'.charCodeAt(0), BANG = '!'.charCodeAt(0)

// process.stdin.on('data', function(buff) {
//   for (var i = 0; i < buff.length; i++) {
//     if (buff[i] === DOT) buff[i] = BANG
//   }
//   console.log(buff);
// });