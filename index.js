let miner = require('./miner');
let block = require('./block');
let transaction = require('./transaction');

let blockChain = [];

let userTree = {
   name: 'The Money Tree',
   publicKey: '100', // This will be your address
   privatekey: '1001',
};

let userTjaard = {
   name: 'Tjaard',
   publicKey: '200', // This will be your address
   privatekey: '2002',
};

let genesisBlock = block.constructBlock(null, [ transaction.create(userTree.publicKey, userTree.publicKey, 100, userTree.privatekey) ])

blockChain.push(miner.mine(genesisBlock));

let nextBlock = block.constructBlock(blockChain[0], [ 
   transaction.create('Tjaard', 'Amazon', 10),
   transaction.create('Tjaard', 'Tom', 20)
]);

blockChain.push(miner.mine(nextBlock));

console.log(blockChain);