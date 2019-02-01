var express=require('express');
var path=require('path');
var app=express();

app.use('/css',express.static("./css"));
app.use('/html',express.static("./html"));
app.use('/js',express.static("./js"));

app.get('/',function(request, response){
	response.sendFile('index.html',{root: path.join(__dirname,'./html')});
})
app.get('/',function(request, response){
	response.sendFile('form.html',{root: path.join(__dirname,'./html')});
})
app.get('/',function(request, response){
	response.sendFile('about.html',{root: path.join(__dirname,'./html')});
})

app.listen(8888,function(){
	console.log("server is running at the port 8888...");
})