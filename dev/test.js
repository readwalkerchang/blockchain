const Blockchain = require('./blockchain') //Include Modules

const bitcoin = new Blockchain;
bitcoin.createNewBlock(Math.random(),'hfiuahuif','hfuised849hf');
bitcoin.createNewTransaction(100,'Joe','Kay');
console.log(bitcoin);