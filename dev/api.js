const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const blockchain = require('./blockchain');
const bitcoin = new blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));//why use this?

app.get('/blockchain',function(req,res){
    res.send(bitcoin);
});

app.get('/blockchain',function(req,res){
    
});

app.post('/transaction',function(req,res){
    console.log(req.body);
    res.send(`the amount of transaction is:${req.body.amount} bitcoin.`);
});

app.listen(3000, function(){
    console.log('listening on port 3000...');
});

