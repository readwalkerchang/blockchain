const sha256 = require('sha256'); 
//import sha256 library and save it into the variable 'sha256'
//use 'npm install --save sha256' to install the library


function Blockchain(){
    this.chain = [];
    this.pendingTransactions = [];
}

Blockchain.prototype.createNewBlock 
= function(nouce, previousBlockHash,hash){
    const newBlock = {
        index : this.chain.length + 1,
        timestamp : Date.now(),
        transactions : this.pendingTransactions,
        nouce : nouce, 
        hash: hash,
        previousBlockHash: previousBlockHash,
    };
    this.pendingTransactions = []; //keep newTransaction empty
    this.chain.push(newBlock);
    return newBlock;
}
Blockchain.prototype.getLastblock
= function(){
    return this.chain[this.chain.length -1];
};

Blockchain.prototype.createNewTransaction
= function(amount, sender, recipient){
    const newTransaction = {
        amount : amount,
        sender : sender,
        recipient : recipient,
    };
    this.pendingTransactions.push(newTransaction);
    return this.getLastblock()
    ['index'] + 1;
};

Blockchain.prototype.hashBlock 
= function(previousBlockHash, currentBlockData, nonce){
    const dataAsString = 
    previousBlockHash + JSON.stringify(currentBlockData) + nonce.toString();
    const hash = sha256(dataAsString);
    return hash
} 

Blockchain.prototype.proofOfWork
= function(previousBlockHash, currentBlockData){
    let nonce = 0:
     
}

module.exports = Blockchain; //export modules