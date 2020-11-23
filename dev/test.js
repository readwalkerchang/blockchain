const Blockchain = require('./blockchain') //Include Modules

const bitcoin = new Blockchain;
bitcoin.createNewBlock(Math.random(),'hfiuahuif','hfuised849hf');
bitcoin.createNewTransaction(100,'Joe','Kay');
bitcoin.createNewBlock(Math.random(),'hfiuahuif','hfuised849hf');
bitcoin.createNewTransaction(200,'Joe','Kay');
bitcoin.createNewTransaction(300,'Joe','Kay');
bitcoin.createNewTransaction(400,'Joe','Kay');

console.log(bitcoin);