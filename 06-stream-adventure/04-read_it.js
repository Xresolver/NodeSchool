const { stdout, argv } = require('process');
const { Readable } = require('stream')

class ReadableStream extends Readable {
  _read() {}
}

const stream = new ReadableStream();

stream.push(argv[2]);
stream.pipe(stdout);

/*----------------------------------------*/
/* -------------Alternate 2-------------- */
/*----------------------------------------*/

// const { stdout, argv } = require('process');
// const { Readable } = require('stream')

// const stream = new Readable({
//   read(){}
// });

// stream.push(argv[2]);
// stream.pipe(stdout);

/*----------------------------------------*/
/* -------------Alternate 3-------------- */
/*----------------------------------------*/

// const { stdout, argv } = require('process');
// const { Readable } = require('stream')

// const stream = new Readable();
// stream._read = () => {};

// stream.push(argv[2]);
// stream.pipe(stdout);