function Blockchain(){
    this.chain = [];
    this.newTransations = [];
}

Blockchain.prototype.createNewBlock 
= function(nouce, previousBlockHash,hash){
    const newBlock = {
        index : this.chain.length + 1,
        timestamp : Date.now(),
        Transactions : this.newTransations,
        nouce : nouce, 
        hash: hash,
        previousBlockHash: previousBlockHash,
    };
    this.newTransations = [];
    this.chain.push(newBlock);
    return newBlock;
}