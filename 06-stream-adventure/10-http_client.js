const { request } = require('http')
const { stdin, stdout } = require('process')

const options = { method: 'POST' }
const req = request('http://kutubusitte.com/', options, (res) => {
  res.pipe(stdout)
})

stdin.pipe(req)