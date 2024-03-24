const http = require('q-io/http')

http.read('http://localhost:7000')
    .then((id) => http.read(`http://localhost:7001/${id}`))
    .then((value) =>
        console.log(JSON.parse(value)))
    .catch(console.error)
    .done()