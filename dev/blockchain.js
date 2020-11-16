function Blockchain(){
    this.chain = [];
    this.newTransations = [];
}

Blockchain.prototype.createNewBlock 
= function(nouce, previousBlockHash,hash){
    const newBlock = {
        index : this.chain.length + 1,
    }; 
}