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

module.exports = Blockchain; //export modules