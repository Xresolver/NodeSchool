const express = require('express');
const app = express();

app.set('port', (process.argv[2] || 3000));
app.set('view engine', 'jsx');
app.set('views', __dirname + '/views');
app.engine('jsx', require('express-react-views').createEngine({ transformViews: false }));

require('babel/register')({
    ignore: false
});

app.use('/', function (req, res) {
    // res.render('01-hello_react', '');
    // res.render('02-components', '');
    // res.render('03-props', '');
    // res.render('04-proptypes', '');
    // res.render('05-state', '');
    res.render('06-css', '');
});

app.listen(app.get('port'), function () {
    console.log('Express server is up on port 3000');
});