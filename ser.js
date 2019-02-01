var express=require('express');
var path=require('path')
var app=express();
var bodyparser=require('body-parser')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
	extended:true
}));


app.post('/',function(request, response){
	response.sendFile('sum.html',{root: path.join(__dirname,'./html')});
	//var res= +request.query.first + +request.query.second;
	//console.log(res);
	//response.writeHead(200,{'Content-Type':'text/plain'});
	//response.send("sum:"+res.toString());
	//JSAlert.alert(res);
	/*var a=request.body.first;
	console.log(a);*/
})

/*app.get('/sum',function(request, response){
	var res = +request.query.first + +request.query.second;
	response.send(res.toString());
})*/

app.listen(1337,function(){
	console.log("Server is listeningn to port 1337...")
});
