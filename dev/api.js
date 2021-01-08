const express = require('express');
const app = express();

app.get('/blockchain',function(req,res){
    
});

app.get('/blockchain',function(req,res){
    
});

app.post('/transaction',function(req,res){
    console.log(req.body);
    res.send(`the amount of transaction is:${req.body} bitcoin.`);
});

app.listen(3000, function(){
    console.log('listening on port 3000...');
});

