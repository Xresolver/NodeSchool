const http = require('http');
const through = require('through2-map');
const { argv } = require('process');

const server = http.createServer(received);
server.listen(argv[2]);

function received(req, res)
{
    if(req.method === 'POST')
    {
        res.writeHead(200, { 'content-type': 'text/plain' })
        req.pipe(through(chunk =>
            {
                return chunk.toString().toUpperCase();
            })).pipe(res);
    }
    else
    {
        return res.end('send me a POST\n')
    }
}