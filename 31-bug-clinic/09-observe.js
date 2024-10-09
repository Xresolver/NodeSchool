module.exports = scenario

const replify = require('replify')

function scenario (callback) {
  const createServer = require('http').createServer
  const server = createServer()

  server.__message = 'REPLs are neat'
  const repl = replify({name: 'bug-clinic'}, server)

  server.listen(8080, function () { callback(server, repl) })
}