var querystring = require("querystring");
var fs = require("fs");

function start(response, postData) {
	console.log("Request handler 'start' was called.");

	fs.readFile('html/index.html', function(err, body){
		if (err) 
			console.log("maybe you should have an index.html first");
			// throw err;
		response.writeHead(200, {"Content-Type": "text/html"});
		response.write(body);
		response.end();
	});

 }

 function upload(response, postData) {
	console.log("Request handler 'upload' was called.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("You've sent the text: " + querystring.parse(postData).text);
	response.end();
 }

 function sendFile(response, postData, file, ext, pathname){
	console.log("this is file 2 " + file);
	console.log("this is ext 2 " + ext);
	pathname = pathname.replace(/\//,"");
	console.log("this is pathname 2 " + pathname);
 	fs.readFile(pathname, function(err, data){
 		if (err) 
 			console.log("could not handle " + pathname);
 		response.writeHead(200, {"Content-Type": ext});
 		response.end(data);
 	});
 }

var filetype = {}
exports.filetype = filetype;
exports.start = start;
exports.upload = upload;
exports.sendFile = sendFile;