let bigBuffer = Buffer.from('');
process.stdin
    .on("data", buffer => bigBuffer = Buffer.concat([bigBuffer, buffer]))
    .on('end', () => console.log(bigBuffer))


/* OFFICIEL SOLUTION */
/* ----------------- */
// var buffers = [];

// process.stdin.on('readable', function() {
//   var chunk = process.stdin.read();
//   if (chunk !== null) {
//     buffers.push(chunk);
//   }
// });

// process.stdin.on('end', function() {
//   console.log(Buffer.concat(buffers));
// });