const { Blockchain, Block } = require('./blockchain');

const myCoin = new Blockchain();

console.log('⛏ Mining block 1...');
myCoin.addBlock(new Block(1, Date.now().toString(), { amount: 4 }));

console.log('⛏ Mining block 2...');
myCoin.addBlock(new Block(2, Date.now().toString(), { amount: 8 }));

console.log(JSON.stringify(myCoin, null, 2));
console.log('Is blockchain valid?', myCoin.isChainValid());
