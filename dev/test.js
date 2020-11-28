const Blockchain = require('./blockchain') //Include Modules

const bitcoin = new Blockchain;
const previousBlockHash = '78495890GDUFJ5HBDIHG7FY23JGHB871';
const currentBlockData = [{
    amount: 10,
    sender: 'BJIO9843JNHA',
    recipient: '2F84JF8SJHK',
}]
const nonce = 100;

let result = bitcoin.hashBlock(previousBlockHash,currentBlockData,nonce);

console.log(result);