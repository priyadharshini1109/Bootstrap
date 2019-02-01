var express=require('express')
var app=express();

app.get('/add.html',function(req,res){
	response = {
		result : req.query.a + req.query.b,
	};
	res.end(document.write(JSON.stringify(response)));
})


app.listen(8000);