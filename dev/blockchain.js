const sha256 = require('sha256'); 
const currentNodeUrl = process.argv[3];
//import sha256 library and save it into the variable 'sha256'
//use 'npm install --save sha256' to install the library


function Blockchain(){
    this.chain = [];
    this.pendingTransactions = [];
    this.currentNodeUrl = currentNodeUrl;
    this.createNewBlock();
    this.networkNodes =[];
}

Blockchain.prototype.createNewBlock 
= function(nouce, previousBlockHash, hash){
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

Blockchain.prototype.hashBlock = 
function(previousBlockHash, currentBlockData, nonce) {
	const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
	const hash = sha256(dataAsString);
	return hash;
};


Blockchain.prototype.proofOfWork = 
function(previousBlockHash, currentBlockData) {
	let nonce = 0;
	let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
	while (hash.substring(0, 4) !== '0000') {
		nonce++;
		hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
	}

	return nonce;
};

module.exports = Blockchain; //export modules