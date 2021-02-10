const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const blockchain = require('./blockchain');
const bitcoin = new blockchain();
const { v4: uuidv4 } = require('uuid');
const nodeAddress = uuidv4().split('-').join('');
const port = process.argv[2];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));//why use this?

app.get('/blockchain',function(req,res){
    res.send(bitcoin);
});


app.post('/transaction',function(req,res){
    //console.log(req.body);
    const blockIndex = 
    bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
    //res.json({ note: `Transaction will be added in block ${blockIndex}.` });
    res.send(`the amount of transaction is: ${req.body.amount} bitcoin.`);
});

//show the pending transactions
app.get('/transaction',function(req,res){
    res.send(bitcoin.pendingTransactions);
});

app.get('/mine',function(req,res){
    //get last block
    const lastblock = bitcoin.getLastblock();
    const previousBlockHash = lastblock['hash'];
    const currentBlockData = {
        transaction: bitcoin.pendingTransactions,
        index: lastblock['index']+1
    };
    //get nonce
    const nonce = bitcoin.proofOfWork(previousBlockHash,currentBlockData)
    //get block hash
    const blockHash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce)
    //create a new block
    bitcoin.createNewTransaction(0.25,"000", nodeAddress);
    const newBlock = bitcoin.createNewBlock (nonce, previousBlockHash, blockHash)
    
    res.json({
        message: "A new block has been mined successfully",
        block: newBlock
});
   
});

app.listen(port, function(){
    console.log(`listening on port ${port} ..`);
});

