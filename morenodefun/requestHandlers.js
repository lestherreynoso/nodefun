var querystring = require("querystring");
var fs = require("fs");

/*function start(response, postData) {
	console.log("Request handler 'start' was called.");

	fs.readFile('html/index.html', 'r+', function(err, body){
		if (err) 
			console.log("maybe you should have an index.html first");
			// throw err;
		response.writeHead(200, {"Content-Type": "text/html"});
		// response.write(body);
		response.end();
	});

 }*/

 function upload(response, postData) {
	console.log("Request handler 'upload' was called.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("You've sent the text: " + querystring.parse(postData).text);
	response.end();
 }

 function processFile(response, postData, type, pathname, write){
	pathname = pathname.replace(/\//,"");

	// if no pathname specified go home
	if (pathname == "")
		pathname = "html/index.html";

	// console.log("this is type 2 " + type);
	// console.log("this is pathname 2 " + pathname);

 	// console.log("this is write: " + write);
 	
 	fs.readFile(pathname, function(err, data){
 		if (err) 
 			console.log("unable to handle " + pathname);
 		response.writeHead(200, {"Content-Type": type});
 		if (write){
 			response.write(data);
 			response.end();
 		}
 		else
			response.end(data);
 	});
 }

// exports.start = start;
exports.upload = upload;
exports.processFile = processFile;