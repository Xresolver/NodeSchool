
var fs = require("fs");

const peach = function (obj) {
    // trace the message "traced"
    console.trace("traced");
    // dump obj to stdout
    console.dir(obj);
    
};

const bowser = function (callback) {
    fs.readFile(process.argv[2], { encoding: "utf8" }, callback);
};

const koopa = function (error, file) {
    // handle error by printing something to stderr
    if(error) return console.error(error.message);
    
    peach(JSON.parse(file));
};

bowser(koopa);