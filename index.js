const { Blockchain, Block } = require('./blockchain');

const myChain = new Blockchain();

console.log("Mining block 1...");
myChain.addBlock(new Block(1, Date.now().toString(), { amount: 100 }));

console.log("Mining block 2...");
myChain.addBlock(new Block(2, Date.now().toString(), { amount: 50 }));

console.log("Is blockchain valid?", myChain.isChainValid());
console.log(JSON.stringify(myChain, null, 4));
