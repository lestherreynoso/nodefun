var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
// handle[""] = requestHandlers.start;
// handle["start"] = requestHandlers.start;
handle["upload"] = requestHandlers.upload;

handle["css"] = "text/css"
handle["js"] = "text/javascript"
handle["html"] = "text/html"
handle[""] = "text/html"


server.start(router.route, handle);