var http=require('http')
var server=http.createServer((function(request,response)
{
	console.log("user made a request"+request.url);
	response.writeHead(200,{"Content-Type" : "text/plain"});
	response.end("Here is some text...\n");
}));
server.listen(8888);
console.log("the server is running...");