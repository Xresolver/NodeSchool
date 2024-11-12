    // include the Lo-Dash library
    const _ = require("lodash");

    const worker = function(users) {
        // do work; return stuff
        return _.filter(users, { active: true });
    };

    // export the worker function as a nodejs module
    module.exports = worker;