var http=require('http')
var fs=require('fs')
var server=http.createServer(function(req,resp){
	if(req.url==="/"){
		fs.readFile("./html/index.html",function(error,pgResp){
			if(error){
				resp.writeHead(404);
				resp.write("content not found");
			} else{
				resp.writeHead(200,{'Content-Type':'text/html'});
				resp.write(pgResp);
			}
			
			resp.end();
		});

	}
});

server.listen(3000);
console.log("server is listening to port 3000...");