const url = require('url');

const urlStr = prompt('Enter Web Address:');
const parsedUrl = url.parse(urlStr, true);

console.log(url.resolve(urlStr, parsedUrl.query.file));

/* OFFICIEL SOLUTION */
/* ----------------- */
// var url = require('url');
// var querystring = require('querystring');

// var addr = prompt();
// var query = url.parse(addr).query;
// var params = querystring.parse(query);
// console.log(url.resolve(addr, params.file));