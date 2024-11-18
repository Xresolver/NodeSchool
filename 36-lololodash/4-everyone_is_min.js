// include the Lo-Dash library
const _ = require("lodash");

const worker = function (towns) {
    // do work; return stuff
    const obj = {hot: [], warm: []};
    
    _.forEach(towns, (town, townName) =>
        {
            if(_.every(town, (temperature) => temperature > 19))
                obj.hot.push(townName);
            else if(_.some(town, (temperature) => temperature > 19))
                obj.warm.push(townName);  
        })
    
    return obj;
};

// export the worker function as a nodejs module
module.exports = worker;