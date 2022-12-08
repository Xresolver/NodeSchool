const { request } = require('http')
const { stdin, stdout } = require('process')

const options = { method: 'POST' }
const req = request('http://localhost:8099', options, (res) => {
  res.pipe(stdout)
})

stdin.pipe(req)