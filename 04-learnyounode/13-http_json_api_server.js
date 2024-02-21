const http = require('http');
const url = require('url');
const { argv } = require('process');


const server = http.createServer(received);
server.listen(argv[2]);

function received(req, res)
{
    const timeUrl = new URL(`http://${req.url}`);
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end(getJSONTime(timeUrl));
}

function getJSONTime(url)
{
    const time = new Date(url.searchParams.get('iso'));
    if(url.pathname === '/parsetime')
        return `{"hour":${time.getHours()},"minute":${time.getMinutes()},"second":${time.getSeconds()}}`    
    else if(url.pathname === '/unixtime')
        return `{"unixtime":${time.getTime()}}`
    
}

// 'use strict'
// const http = require('http')

// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }

// function unixtime (time) {
//   return { unixtime: time.getTime() }
// }

// const server = http.createServer(function (req, res) {
//   const parsedUrl = new URL(req.url, 'http://example.com')
//   const time = new Date(parsedUrl.searchParams.get('iso'))
//   let result

//   if (/^\/api\/parsetime/.test(req.url)) {
//     result = parsetime(time)
//   } else if (/^\/api\/unixtime/.test(req.url)) {
//     result = unixtime(time)
//   }

//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))