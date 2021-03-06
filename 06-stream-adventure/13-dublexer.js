const { spawn } = require('child_process');
const duplex = require('duplexer2');

module.exports = function (cmd, args) {
 const child = spawn(cmd, args);
 return duplex(child.stdin, child.stdout)
}