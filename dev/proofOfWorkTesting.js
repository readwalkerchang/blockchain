const Blockchain = require('./blockchain'); //Include Modules

const bitcoin = new Blockchain;

const previousBlockHash = '0000HKNBJFHFBJMHQ';
const currentBlockData = [
    {
        amount: 10,
        sender: 'HDWU144532IKJH98472',
        recipient: '14552F84JF8SJHK',
    },
    {
        amount: 100,
        sender: '1238FNJKFSJKL3',
        recipient: '12345FJHK38TRBIJ254',
    },
    {
        amount: 30,
        sender: '132453248BNF87FB',
        recipient: '954FEWHJKUHE2434587FU2',
    },
];

console.log(bitcoin.proofOfWork(previousBlockHash,currentBlockData));