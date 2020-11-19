const Blockchain = require('./blockchain') //Include Modules

const bitcoin = new Blockchain;
bitcoin.createNewBlock(Math.random(),'hfiuahuif','hfuised849hf');
bitcoin.createNewBlock(Math.random(),'hfiuahuif','hfuised849hf');
bitcoin.createNewBlock(Math.random(),'hfiuahuif','hfuised849hf');



console.log(bitcoin.getLastblock());