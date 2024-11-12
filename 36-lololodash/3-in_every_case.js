// include the Lo-Dash library
const _ = require("lodash");

const worker = function (cities) {
    // do work; return stuff
    return _.forEach(cities, (city) =>
        {
            if(city.population > 1)
                city.size = 'big';
            else if(city.population > 0.5)
                city.size = 'med';
            else
                city.size = 'small';
        })
};

// export the worker function as a nodejs module
module.exports = worker;