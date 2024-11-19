// include the Lo-Dash library
const _ = require("lodash");

const worker = function (user) {
    // do work; return stuff
    return _.template('Hello <%= name %> (logins: <%= login.length %>)')(user)
};

// export the worker function as a nodejs module
module.exports = worker;