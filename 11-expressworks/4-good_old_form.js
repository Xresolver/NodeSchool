const bodyparser = require('body-parser')
const express = require('express');

const app = express();

app.use(bodyparser.urlencoded({extended: false}))
app.post('/form', function(req, res, next) {
    res.end(req.body.str.split('').reverse().join(''));
    next()
})
app.listen(process.argv[2] || 3000)