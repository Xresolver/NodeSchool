const { doesNotMatch } = require('assert');
const { stdin } = require('process');
const { Writable } = require('stream');

const writable = new Writable({
  write(chunk, encoding, next)
  {
      console.log('writing: ' + chunk);
      next();
  }
})

stdin.pipe(writable);


// const { Writable } = require('stream')

// class MyWritable extends Writable {
//   _write (chunk, encoding, callback) {
//     console.log(`writing: ${chunk.toString()}`)
//     callback()
//   }
// }

// const stream = new MyWritable()
// process.stdin.pipe(stream)