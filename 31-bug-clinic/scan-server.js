//  scan-server.js
const createServer = require("http").createServer;
const server = createServer(function (req, res) {
    res.end("hello");
});

server.listen(9876, function () {
    console.log("listening");
});