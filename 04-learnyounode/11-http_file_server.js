const http = require('http');
const fs = require('fs');
const { argv } = require('process');

const server = http.createServer(received);
server.listen(argv[2]);

function received(req, res)
{
    res.writeHead(200, { 'content-type': 'text/plain' })
    const readStream = fs.createReadStream(argv[3]);
    readStream.pipe(res);
}