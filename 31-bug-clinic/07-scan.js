//  scan-client.js
const request = require("http").request;

const contentType = "text/html";
const body = "<html>" +
    "<head><title>hi</title></head>" +
    "<body><p>yo</p></body>" +
    "</html>";


const headers = {
    host: "localhost",
    port: 9876,
    method: "GET",
    headers: {
        "content-type": contentType,
        "content-length": body.length
    }
};

const yolo = request(headers, function (res) {
    res.setEncoding("utf8");
    res.on("data", function (data) {
        console.log("BODY: " + data);
    });

    res.on("end", function () {
        console.error("done!");
    });

});

yolo.end();