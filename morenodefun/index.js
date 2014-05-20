var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {}
handle[""] = requestHandlers.start;
handle["start"] = requestHandlers.start;
handle["upload"] = requestHandlers.upload;
// handle[".css"] = requestHandlers.sendFile;
// handle[".js"] = requestHandlers.sendFile;
handle["css"] = "text/css"
handle["js"] = "text/javascript"

requestHandlers.filetype["css"] = "text/css"
requestHandlers.filetype["js"] = "text/javascript"

server.start(router.route, handle);