var express=require('express');
var path=require('path')
var app=express();



app.get('/sum',function(request, response){
	response.sendFile('sum.html',{root: path.join(__dirname,'./html')});
	if(request.query.name=="first" && request.query.name=="second"){
		var res= +request.query.first + +request.query.second;
		response.send("sum:"+res.toString());
	}
	//var res= +request.query.first + +request.query.second;
	//console.log(res);
	//response.writeHead(200,{'Content-Type':'text/plain'});
	//response.send("sum:"+res.toString());
	//JSAlert.alert(res);
})

/*app.get('/',function(request,response){
	var a=parseInt(request.query.first);
	var b=parseInt(request.query.second);
	var sum= +a + +b;
	response(sum.toSTring());
})*/

app.listen(3000,function(){
	console.log("Server is listeningn to port 3000...")
});
