const { stdout, argv } = require('process');
const { Readable } = require('stream')

class ReadableStream extends Readable {
  _read() {}
}

const stream = new ReadableStream();

stream.push(argv[2]);
stream.pipe(stdout);