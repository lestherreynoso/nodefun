var path = require("path")
var requestHandlers = require("./requestHandlers")
function route(handle, pathname, response, postData) {
	console.log("About to route a request for " + pathname);
	var file = path.basename(pathname);
	var ext = path.extname(pathname).replace(/\./, "");
	console.log("this is base: " + file);

	if (typeof handle[ext] === "string") {
		requestHandlers.sendFile(response, postData, file, handle[ext], pathname);
	} else if (typeof handle[file] === "function") {
		handle[file](response, postData);
	} else {
		console.log("No request handler found for " + pathname)
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 Not found");
		response.end();
	}
}

exports.route = route;